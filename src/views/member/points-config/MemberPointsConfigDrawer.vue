<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="50%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './memberPointsConfig.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import {
    saveMemberPointsConfig,
    updateMemberPointsConfig,
  } from '/@/api/member/memberPointsConfig';
  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    name: 'MemberPointsConfigDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const { t } = useI18n();
      const isUpdate = ref(true);
      let recordId;
      const [registerForm, { resetFields, setFieldsValue, removeSchemaByFiled, validate }] =
        useForm({
          labelWidth: 100,
          schemas: formSchema,
          showActionButtonGroup: false,
          baseColProps: { lg: 12, md: 24 },
        });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        await resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          const notAllowedUpdateField = ['id', 'tenantId'];
          await removeSchemaByFiled(notAllowedUpdateField);
          await setFieldsValue({
            ...data.record,
          });
          recordId = data.record.id;
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
            await saveMemberPointsConfig(values);
          } else {
            values.id = recordId;
            await updateMemberPointsConfig(values);
          }

          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return { registerDrawer, registerForm, getTitle, handleSubmit };
    },
  });
</script>
