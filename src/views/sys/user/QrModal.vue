<template>
  <BasicModal v-bind="$attrs" @register="qrModal" :title="t('sys.user.google.title')">
    <QrCode
      style="text-align: center"
      v-model:value="rowRecord.googleQrUrl"
      :width="300"
      :options="{
        color: { dark: '#000000' },
      }"
    />
    <div class="msg" style="text-align: center">{{ rowRecord.googleSecret }}</div>
    <br />
    <div style="text-align: center">
      <a-button
        v-if="hasPermission('sys:user:reset-google-secret')"
        class="mb-2"
        type="primary"
        @click="resetSecret"
      >
        {{ t('sys.user.google.reset') }}
      </a-button>
      <Divider v-if="hasPermission('sys:user:google-verify')" type="vertical" />
      <a-button
        class="mb-2"
        type="primary"
        @click="openVerify"
        v-if="!rowRecord.googleVerify && hasPermission('sys:user:google-verify')"
      >
        {{ t('sys.user.google.openVerify') }}
      </a-button>
      <a-button
        class="mb-2"
        type="primary"
        @click="closeVerify"
        v-if="rowRecord.googleVerify && hasPermission('sys:user:google-verify')"
      >
        {{ t('sys.user.google.closeVerify') }}
      </a-button>
    </div>
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { QrCode } from '/@/components/Qrcode';
  import { Divider } from 'ant-design-vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import {
    closeGoogleSecret,
    getGoogleSecret,
    openGoogleSecret,
    resetGoogleSecret,
  } from '/@/api/sys/user';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { usePermission } from '/@/hooks/web/usePermission';

  export default defineComponent({
    name: 'QrModal',
    components: { BasicModal, QrCode, Divider },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const { t } = useI18n();
      const { hasPermission } = usePermission();
      const rowRecord = ref<Recordable>({});
      const { createMessage } = useMessage();

      const [qrModal, { setModalProps }] = useModalInner(async (data) => {
        try {
          setModalProps({ showCancelBtn: false, showOkBtn: false, confirmLoading: true });
          rowRecord.value = data.record;
          const res = await getGoogleSecret(rowRecord.value.id);
          rowRecord.value.googleQrUrl = res.googleQrUrl;
          rowRecord.value.googleSecret = res.googleSecret;
        } finally {
          setModalProps({ confirmLoading: false });
        }
      });

      async function resetSecret() {
        try {
          setModalProps({ confirmLoading: true });
          resetGoogleSecret(rowRecord.value.id).then(() => {
            getGoogleSecret(rowRecord.value.id).then((data) => {
              rowRecord.value.googleQrUrl = data.googleQrUrl;
              rowRecord.value.googleSecret = data.googleSecret;
              rowRecord.value.googleBind = false;
              emit('success', {
                isUpdate: true,
                values: { ...rowRecord.value, id: rowRecord.value.id },
              });
            });
          });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      async function openVerify() {
        openGoogleSecret(rowRecord.value.id).then(() => {
          rowRecord.value.googleVerify = true;
          createMessage.success(t('sys.user.google.openMessage'));
          emit('success', {
            isUpdate: true,
            values: { ...rowRecord.value, id: rowRecord.value.id },
          });
        });
      }

      async function closeVerify() {
        closeGoogleSecret(rowRecord.value.id).then(() => {
          rowRecord.value.googleVerify = false;
          createMessage.success(t('sys.user.google.closeMessage'));
          emit('success', {
            isUpdate: true,
            values: { ...rowRecord.value, id: rowRecord.value.id },
          });
        });
      }

      return {
        t,
        hasPermission,
        rowRecord,
        qrModal,
        resetSecret,
        openVerify,
        closeVerify,
      };
    },
  });
</script>
