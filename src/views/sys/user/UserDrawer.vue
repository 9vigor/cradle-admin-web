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
  import { drawerFormSchema } from './user.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { saveUser, updateUser } from '/@/api/sys/user';
  import { getDeptTree } from '/@/api/sys/dept';

  export default defineComponent({
    name: 'UserDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const { t } = useI18n();
      const isUpdate = ref(true);
      const rowId = ref('');
      const [drawerForm, { resetFields, setFieldsValue, updateSchema, clearValidate, validate }] =
        useForm({
          labelWidth: 100,
          schemas: drawerFormSchema,
          showActionButtonGroup: false,
          baseColProps: { lg: 12, md: 24 },
        });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        await resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        const treeData = await getDeptTree();
        await updateSchema({
          field: 'deptId',
          componentProps: { treeData },
        });
        await updateSchema({
          field: 'password',
          dynamicRules: ({ values }) => [
            { required: true, message: '密码不能为空', whitespace: true },
            { min: 6, max: 50, message: '密码长度6-50' },
            {
              validator(_, value) {
                return new Promise((resolve, reject) => {
                  if (!(value && value.trim())) {
                    resolve();
                    return;
                  }
                  if (values.password === values.confirmPassword) {
                    clearValidate('confirmPassword');
                    resolve();
                  } else {
                    reject('密码和确认密码不一致');
                  }
                });
              },
              trigger: 'blur',
            },
          ],
        });
        await updateSchema({
          field: 'confirmPassword',
          dynamicRules: ({ values }) => [
            { required: true, message: '确认密码不能为空', whitespace: true },
            {
              validator(_, value) {
                return new Promise((resolve, reject) => {
                  if (!(value && value.trim())) {
                    resolve();
                    return;
                  }
                  if (values.password === values.confirmPassword) {
                    clearValidate('password');
                    resolve();
                  } else {
                    reject('密码和确认密码不一致');
                  }
                });
              },
              trigger: 'blur',
            },
          ],
        });

        if (unref(isUpdate)) {
          await updateSchema({
            field: 'password',
            dynamicRules: ({ values }) => [
              { min: 6, max: 50, message: '密码长度6-50' },
              {
                validator(_, value) {
                  return new Promise((resolve, reject) => {
                    if (!(value && value.trim())) {
                      resolve();
                      return;
                    }
                    if (values.password === values.confirmPassword) {
                      clearValidate('confirmPassword');
                      resolve();
                    } else {
                      reject('密码和确认密码不一致');
                    }
                  });
                },
                trigger: 'blur',
              },
            ],
          });
          await updateSchema({
            field: 'confirmPassword',
            dynamicRules: ({ values }) => [
              { min: 6, max: 50, message: '密码长度6-50' },
              {
                validator(_, value) {
                  return new Promise((resolve, reject) => {
                    if (!(value && value.trim())) {
                      resolve();
                      return;
                    }
                    if (values.password === values.confirmPassword) {
                      clearValidate('password');
                      resolve();
                    } else {
                      reject('密码和确认密码不一致');
                    }
                  });
                },
                trigger: 'blur',
              },
            ],
          });
          await setFieldsValue({
            ...data.record,
          });
          rowId.value = data.record.id;
          await clearValidate();
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
            await saveUser(values);
          } else {
            values.id = rowId.value;
            await updateUser(values);
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
