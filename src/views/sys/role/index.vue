<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> {{ t('common.createText') }} </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:assign-user-line',
              tooltip: t('sys.role.assign'),
              onClick: handleAssign.bind(null, record),
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

  export default defineComponent({
    name: 'RoleManagement',
    components: { BasicTable, TableAction, RoleDrawer, RoleAssignDrawer },
    setup() {
      const { t } = useI18n();
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
