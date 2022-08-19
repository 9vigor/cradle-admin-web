<template>
  <template v-if="getShow">
    <LoginFormTitle class="enter-x" />
    <div class="enter-x min-w-64 min-h-64">
      <QrCode :value="userStore.getGoogleQrUrl" class="enter-x flex justify-center" :width="280" />
      <Form
        class="p-4 enter-x"
        :model="formData"
        :rules="getFormRules"
        ref="formRef"
        v-show="getShow"
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
      </Form>
      <Divider class="enter-x">{{ t('sys.login.googleScan') }}</Divider>
      <Button type="primary" size="large" block @click="handleLogin" :loading="loading">
        {{ t('sys.login.bindButton') }}
      </Button>
      <Button size="large" block class="mt-4 enter-x" @click="handleBackLogin">
        {{ t('sys.login.backSignIn') }}
      </Button>
    </div>
  </template>
</template>
<script lang="ts" setup>
  import { computed, nextTick, onUpdated, reactive, ref, unref } from 'vue';
  import LoginFormTitle from './LoginFormTitle.vue';
  import { Form, Input, Button, Divider } from 'ant-design-vue';
  import { QrCode } from '/@/components/Qrcode';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useLoginState, LoginStateEnum, useFormRules, useFormValid } from './useLogin';
  import { useUserStore } from '/@/store/modules/user';
  import { useMessage } from '/@/hooks/web/useMessage';

  const FormItem = Form.Item;
  const { t } = useI18n();
  const userStore = useUserStore();
  const { getFormRules } = useFormRules();
  const { notification } = useMessage();
  const loading = ref(false);
  const formRef = ref();
  const { validForm } = useFormValid(formRef);
  const { handleBackLogin, getLoginState } = useLoginState();
  const getShow = computed(() => unref(getLoginState) === LoginStateEnum.GOOGLE_BIND);

  const formData = reactive({
    verifyToken: '',
    googleCode: '',
  });

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
