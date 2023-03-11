<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: t('common.delText'),
                ifShow: hasPermission('sys:login-log:delete'),
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
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { columns, searchFormSchema } from './loginLog.data';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { deleteLoginLog, getLoginLogList } from '/@/api/sys/user';
  import { usePermission } from '/@/hooks/web/usePermission';

  export default defineComponent({
    name: 'SysLoginLog',
    components: { BasicTable, TableAction },
    setup() {
      const { t } = useI18n();
      const { hasPermission } = usePermission();
      const [registerTable, { reload }] = useTable({
        api: getLoginLogList,
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

      function handleDelete(record: Recordable) {
        deleteLoginLog(record.id).then(() => reload());
      }

      function handleSuccess() {
        reload();
      }

      return {
        t,
        hasPermission,
        registerTable,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
