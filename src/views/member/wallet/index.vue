<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="onFetchSuccess">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> {{ t('common.createText') }} </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: t('common.detailText'),
              onClick: handleView.bind(null, record),
            },
            {
              icon: 'clarity:note-edit-line',
              tooltip: t('common.editText'),
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              tooltip: t('common.delText'),
              color: 'error',
              popConfirm: {
                title: t('common.delTip'),
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <memberWalletDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { useDrawer } from '/@/components/Drawer';
  import MemberWalletDrawer from './MemberWalletDrawer.vue';

  import { columns, searchFormSchema } from './memberWallet.data';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { deleteMemberWallet, getMemberWalletList } from '/@/api/member/memberWallet';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'MemberWalletManagement',
    components: { BasicTable, MemberWalletDrawer, TableAction },
    setup() {
      const go = useGo();
      const { t } = useI18n();
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload }] = useTable({
        api: getMemberWalletList,
        columns,
        useSearchForm: true,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        isTreeTable: false,
        pagination: true,
        striped: false,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: true,
        actionColumn: {
          width: 80,
          title: t('common.operateText'),
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      function handleView(record: Recordable) {
        go('/member/wallet_detail/' + record.id);
      }

      function handleDelete(record: Recordable) {
        deleteMemberWallet({ id: record.id }).then(() => reload());
      }

      function handleSuccess() {
        reload();
      }

      function onFetchSuccess() {}

      return {
        t,
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleView,
        handleDelete,
        handleSuccess,
        onFetchSuccess,
      };
    },
  });
</script>
