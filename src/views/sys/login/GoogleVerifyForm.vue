<template>
  <template v-if="getShow">
    <LoginFormTitle class="enter-x" />
    <Form
      class="p-4 enter-x"
      :model="formData"
      :rules="getFormRules"
      ref="formRef"
      @keypress.enter="handleLogin"
    >
      <FormItem name="googleCode" class="enter-x">
        <Input
          size="large"
          v-model:value="formData.googleCode"
          :placeholder="t('sys.login.googleCode')"
          class="fix-auto-fill"
        />
      </FormItem>
      <FormItem class="enter-x">
        <Button type="primary" size="large" block @click="handleLogin" :loading="loading">
          {{ t('sys.login.verifyButton') }}
        </Button>
        <Button size="large" block class="mt-4" @click="handleBackLogin">
          {{ t('sys.login.backSignIn') }}
        </Button>
      </FormItem>
    </Form>
  </template>
</template>
<script lang="ts" setup>
  import { reactive, ref, computed, unref, onUpdated, nextTick } from 'vue';
  import { Form, Input, Button } from 'ant-design-vue';
  import LoginFormTitle from './LoginFormTitle.vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useLoginState, useFormRules, useFormValid, LoginStateEnum } from './useLogin';
  import { useUserStore } from '/@/store/modules/user';
  import { useMessage } from '/@/hooks/web/useMessage';

  const FormItem = Form.Item;
  const { t } = useI18n();
  const userStore = useUserStore();
  const { notification } = useMessage();

  const { handleBackLogin, getLoginState } = useLoginState();
  const { getFormRules } = useFormRules();

  const formRef = ref();
  const loading = ref(false);

  const formData = reactive({
    verifyToken: '',
    googleCode: '',
  });

  const { validForm } = useFormValid(formRef);

  const getShow = computed(() => unref(getLoginState) === LoginStateEnum.GOOGLE_VERIFY);

  async function handleLogin() {
    const data = await validForm();
    data.verifyToken = userStore.verifyToken;
    try {
      loading.value = true;
      const userInfo = await userStore.login({
        verifyToken: data.verifyToken,
        googleCode: data.googleCode,
        mode: 'message',
      });
      if (userInfo) {
        notification.success({
          message: t('sys.login.loginSuccessTitle'),
          description: `${t('sys.login.loginSuccessDesc')}: ${userInfo.name}`,
          duration: 3,
        });
      }
      userStore.setVerifyToken('');
      userStore.setGoogleQrUrl('');
    } catch (error) {
      console.error((error as unknown as Error).message || t('sys.api.networkExceptionMsg'));
    } finally {
      loading.value = false;
    }
  }
  onUpdated(() => {
    if (getShow.value) {
      nextTick(function () {
        const googleCodeInput = document.getElementById('form_item_googleCode');
        googleCodeInput && googleCodeInput.focus();
      });
    }
  });
</script>
