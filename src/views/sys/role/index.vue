<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:role:save')">
          {{ t('common.createText') }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:assign-user-line',
                tooltip: t('sys.role.assign'),
                onClick: handleAssign.bind(null, record),
                ifShow: hasPermission('sys:role:assign'),
              },
              {
                icon: 'clarity:note-edit-line',
                tooltip: t('common.editText'),
                onClick: handleEdit.bind(null, record),
                ifShow:
                  hasPermission('sys:role:update') &&
                  record.code !== 'ADMIN' &&
                  record.code !== 'MEMBER',
              },
              {
                icon: 'ant-design:delete-outlined',
                tooltip: t('common.delText'),
                color: 'error',
                ifShow:
                  hasPermission('sys:role:delete') &&
                  record.code !== 'ADMIN' &&
                  record.code !== 'MEMBER',
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
    <RoleDrawer @register="registerDrawer" @success="handleSuccess" />
    <RoleAssignDrawer @register="roleAssignDrawer" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { useDrawer } from '/@/components/Drawer';
  import RoleDrawer from './RoleDrawer.vue';

  import { columns, searchFormSchema } from './role.data';
  import { deleteRole, getRoleList } from '/@/api/sys/role';
  import { useI18n } from '/@/hooks/web/useI18n';
  import RoleAssignDrawer from '/@/views/sys/role/RoleAssignDrawer.vue';
  import { usePermission } from '/@/hooks/web/usePermission';

  export default defineComponent({
    name: 'SysRole',
    components: { BasicTable, TableAction, RoleDrawer, RoleAssignDrawer },
    setup() {
      const { t } = useI18n();
      const { hasPermission } = usePermission();
      const [roleAssignDrawer, { openDrawer: openRoleAssignDrawer }] = useDrawer();
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload }] = useTable({
        title: '角色列表',
        api: getRoleList,
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
      function handleAssign(record: Recordable) {
        openRoleAssignDrawer(true, {
          record,
        });
      }

      function handleDelete(record: Recordable) {
        deleteRole(record.id).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        reload();
      }

      return {
        t,
        hasPermission,
        registerTable,
        roleAssignDrawer,
        openRoleAssignDrawer,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleAssign,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
