<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="50%"
    @ok="handleSubmit"
  >
    <BasicForm @register="drawerForm" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { formSchema } from '/@/views/sys/tenant/tenant.data';
  import { saveTenant, updateTenant } from '/@/api/sys/tenant';

  export default defineComponent({
    name: 'TenantDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const { t } = useI18n();
      const isUpdate = ref(true);
      const rowId = ref('');
      const [drawerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: { lg: 12, md: 24 },
      });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        await resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        await updateSchema({
          field: 'tenantKey',
          dynamicDisabled: false,
        });
        if (unref(isUpdate)) {
          await setFieldsValue({
            ...data.record,
          });
          await updateSchema({
            field: 'tenantKey',
            dynamicDisabled: true,
          });
          rowId.value = data.record.id;
        }
      });

      const getTitle = computed(() =>
        !unref(isUpdate) ? t('common.createText') : t('common.editText'),
      );

      async function handleSubmit() {
        try {
          const values = await validate();
          setDrawerProps({ confirmLoading: true });
          if (!unref(isUpdate)) {
            await saveTenant(values);
          } else {
            values.id = rowId.value;
            await updateTenant(values);
          }

          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return { registerDrawer, drawerForm, getTitle, handleSubmit };
    },
  });
</script>
