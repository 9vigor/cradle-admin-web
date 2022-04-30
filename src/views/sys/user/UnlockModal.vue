<template>
  <BasicModal @register="unlockModal" :title="t('sys.user.unlock')" @ok="handleSubmit">
    <BasicForm @register="unlockModalForm" />
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicForm, useForm } from '/@/components/Form';
  import { unlockModalFormSchemas } from '/@/views/sys/user/user.data';
  import { unlockUser } from '/@/api/sys/user';
  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    name: 'UnlockModal',
    components: { BasicModal, BasicForm },
    emits: ['register'],
    setup(_) {
      const { t } = useI18n();
      const { createMessage } = useMessage();

      const [unlockModalForm, { resetFields, validate }] = useForm({
        labelWidth: 150,
        schemas: unlockModalFormSchemas,
        showActionButtonGroup: false,
      });

      const [unlockModal, { setModalProps, closeModal }] = useModalInner(() => {
        setModalProps({ okText: t('sys.user.unlock'), visible: true, confirmLoading: false });
      });

      async function handleSubmit() {
        try {
          const values = await validate();
          unlockUser(values).then(() => {
            setModalProps({ confirmLoading: true });
            createMessage.success(t('sys.user.unlockSuccess'));
            resetFields();
            closeModal();
          });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        t,
        unlockModal,
        unlockModalForm,
        handleSubmit,
      };
    },
  });
</script>
