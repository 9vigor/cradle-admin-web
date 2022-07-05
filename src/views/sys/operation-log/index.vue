<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:info-standard-line',
                tooltip: t('common.detailText'),
                onClick: handleView.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: t('common.delText'),
                ifShow: hasPermission('sys:operation-log:delete'),
                popConfirm: {
                  title: t('common.delTip'),
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <OperationLogDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import OperationLogDrawer from './OperationLogDrawer.vue';

  import { columns, searchFormSchema } from './operationLog.data';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useDrawer } from '/@/components/Drawer';
  import { deleteOperationLog, getOperationLogList } from '/@/api/sys/user';
  import { usePermission } from '/@/hooks/web/usePermission';

  export default defineComponent({
    name: 'OperationLogManagement',
    components: { BasicTable, OperationLogDrawer, TableAction },
    setup() {
      const { t } = useI18n();
      const { hasPermission } = usePermission();
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload }] = useTable({
        api: getOperationLogList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        pagination: true,
        striped: false,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
        actionColumn: {
          width: 100,
          title: t('common.operateText'),
          dataIndex: 'action',
        },
      });

      function handleView(record: Recordable) {
        openDrawer(true, {
          record,
        });
      }

      function handleDelete(record: Recordable) {
        deleteOperationLog(record.id).then(() => reload());
      }

      function handleSuccess() {
        reload();
      }

      return {
        t,
        hasPermission,
        registerTable,
        registerDrawer,
        handleView,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
