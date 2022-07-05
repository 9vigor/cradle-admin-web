<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:tenant:save')">
          {{ t('common.createText') }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                tooltip: t('common.editText'),
                onClick: handleEdit.bind(null, record),
                ifShow: hasPermission('sys:tenant:update'),
              },
              {
                icon: 'ant-design:delete-outlined',
                tooltip: t('common.delText'),
                color: 'error',
                ifShow: hasPermission('sys:tenant:delete'),
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
    <TenantDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { useDrawer } from '/@/components/Drawer';

  import { columns, searchFormSchema } from './tenant.data';
  import { useI18n } from '/@/hooks/web/useI18n';
  import TenantDrawer from '/@/views/sys/tenant/TenantDrawer.vue';
  import { getTenantList, deleteTenant } from '/@/api/sys/tenant';
  import { usePermission } from '/@/hooks/web/usePermission';

  export default defineComponent({
    name: 'TenantManagement',
    components: { BasicTable, TableAction, TenantDrawer },
    setup() {
      const { t } = useI18n();
      const { hasPermission } = usePermission();
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload }] = useTable({
        title: '租户列表',
        api: getTenantList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 120,
          title: t('common.operateText'),
          dataIndex: 'action',
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

      function handleDelete(record: Recordable) {
        deleteTenant(record.id).then(() => reload());
      }

      function handleSuccess() {
        reload();
      }

      return {
        t,
        hasPermission,
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
