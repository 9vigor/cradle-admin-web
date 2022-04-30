<template>
  <BasicModal
    :footer="null"
    :title="t('layout.header.tooltipPersonalCenter')"
    v-bind="$attrs"
    @register="registerUserCenterModal"
    width="50%"
  >
    <Tabs v-model:activeKey="activeKey" tabPosition="left">
      <TabPane key="info">
        <template #tab>
          <span>
            <Icon icon="carbon:user-identification" />
            基本信息
          </span>
        </template>
        <Descriptions :column="1">
          <DescriptionsItem label="用户名"> {{ record.username }} </DescriptionsItem>
          <DescriptionsItem label="所在部门">
            {{ record.deptName || '未分配部门' }}
          </DescriptionsItem>
        </Descriptions>
        <BasicForm @register="userInfoForm" />
        <a-button type="primary" @click="handleUpdateUserInfo">修改</a-button>
      </TabPane>
      <TabPane key="password">
        <template #tab>
          <span>
            <Icon icon="vaadin:password" />
            修改密码
          </span>
        </template>
        <Alert banner closable message="密码修改成功后将重新回到登录页" show-icon />
        <BasicForm @register="changePasswordForm" />
        <a-button type="primary" @click="handleChangePassword">修改</a-button>
      </TabPane>
    </Tabs>
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Icon } from '/@/components/Icon';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Tabs, TabPane, Alert, Descriptions, DescriptionsItem } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { BasicForm, useForm } from '/@/components/Form';
  import {
    userInfoFormSchema,
    changePasswordFormSchema,
  } from '/@/layouts/default/header/components/user-center/userCenter.data';
  import { changePassword, saveUserInfo } from '/@/api/sys/user';

  export default defineComponent({
    name: 'UserCenterModal',
    components: {
      BasicModal,
      BasicForm,
      Descriptions,
      DescriptionsItem,
      Tabs,
      TabPane,
      Alert,
      Icon,
    },
    emits: ['register'],
    setup(_) {
      const { t } = useI18n();
      const activeKey = ref('info');
      const record = ref<Recordable>({});
      const { createMessage } = useMessage();
      const [
        userInfoForm,
        {
          resetFields: resetUserInfoFormFields,
          setFieldsValue: setUserInfoForFieldsValue,
          clearValidate: clearUserInfoFormValidate,
          validate: validateUserInfoForm,
        },
      ] = useForm({
        labelWidth: 150,
        schemas: userInfoFormSchema,
        showActionButtonGroup: false,
        baseColProps: {},
      });

      const [
        changePasswordForm,
        {
          resetFields: resetChangePasswordFormFields,
          updateSchema: updateChangePasswordFormSchema,
          clearValidate: clearChangePasswordFormValidate,
          validate: validateChangePasswordForm,
        },
      ] = useForm({
        labelWidth: 150,
        schemas: changePasswordFormSchema,
        showActionButtonGroup: false,
      });

      const [registerUserCenterModal, { setModalProps, closeModal }] = useModalInner((data) => {
        activeKey.value = 'info';
        resetUserInfoFormFields();
        resetChangePasswordFormFields();
        setModalProps({ confirmLoading: false });
        record.value = data.record;
        setUserInfoForFieldsValue({
          ...data.record,
        });

        clearUserInfoFormValidate();

        updateChangePasswordFormSchema({
          field: 'newPassword',
          dynamicRules: ({ values }) => [
            { required: true, message: '新密码不能为空', whitespace: true },
            { min: 6, max: 50, message: '新密码长度6-50' },
            {
              validator(_, value) {
                return new Promise((resolve, reject) => {
                  if (!(value && value.trim())) {
                    resolve();
                    return;
                  }
                  if (values.newPassword === values.confirmPassword) {
                    clearChangePasswordFormValidate('confirmPassword');
                    resolve();
                  } else {
                    reject('新密码和确认密码不一致');
                  }
                });
              },
              trigger: 'blur',
            },
          ],
        });
        updateChangePasswordFormSchema({
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
                  if (values.newPassword === values.confirmPassword) {
                    clearChangePasswordFormValidate('newPassword');
                    resolve();
                  } else {
                    reject('新密码和确认密码不一致');
                  }
                });
              },
              trigger: 'blur',
            },
          ],
        });
      });

      function handleUpdateUserInfo() {
        validateUserInfoForm().then((values) => {
          saveUserInfo(values).then(() => {
            createMessage.success('修改成功');
          });
        });
      }

      function handleChangePassword() {
        validateChangePasswordForm().then((values) => {
          console.log(values);
          changePassword(values).then(() => {
            createMessage.success('密码修改成功');
            closeModal();
          });
        });
      }

      return {
        t,
        record,
        activeKey,
        registerUserCenterModal,
        userInfoForm,
        changePasswordForm,
        handleUpdateUserInfo,
        handleChangePassword,
      };
    },
  });
</script>
