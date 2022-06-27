<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="roleAssignDrawer"
    showFooter
    :title="getTitle"
    width="70%"
    :destroyOnClose="true"
  >
    <BasicTable
      @register="registerTable"
      :rowSelection="{
        type: 'checkbox',
        selectedRowKeys: checkedKeys,
        onChange: onSelectChange,
      }"
      @fetch-success="onFetchSuccess"
      :searchInfo="searchInfo"
    >
      <template #avatarUrl="{ text }">
        <Image v-if="text" :src="text" height="40px" width="40px" />
      </template>
      <template #toolbar>
        <a-button v-if="searchInfo.hasThisRole" @click="handleSelect(false)"> 可分配用户 </a-button>
        <a-button v-if="!searchInfo.hasThisRole" @click="handleSelect(true)"> 已分配用户 </a-button>
        <a-button
          type="primary"
          v-if="!searchInfo.hasThisRole"
          @click="handleAssign"
          :disabled="checkedKeys.length === 0"
        >
          {{ t('sys.role.assign') }}
        </a-button>
        <a-button
          type="primary"
          v-if="searchInfo.hasThisRole"
          @click="handleRemove"
          :disabled="checkedKeys.length === 0"
        >
          {{ t('sys.role.remove') }}
        </a-button>
      </template>
    </BasicTable>
  </BasicDrawer>
</template>
<script lang="ts">
  import { Image } from 'ant-design-vue';
  import { defineComponent, ref, computed, reactive } from 'vue';
  import { userSearchFormSchema, userTableColumns } from './role.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { BasicTable, useTable } from '/@/components/Table';

  import { useI18n } from '/@/hooks/web/useI18n';
  import { getUserList } from '/@/api/sys/user';
  import { assign } from '/@/api/sys/role';

  export default defineComponent({
    name: 'RoleAssignDrawer',
    components: { BasicDrawer, BasicTable, Image },
    emits: ['success', 'register'],
    setup(_) {
      const { t } = useI18n();
      const rowId = ref('');
      const roleName = ref('');
      const searchInfo = reactive<Recordable>({ hasThisRole: false });
      const checkedKeys = ref<Array<string | number>>([]);
      const [registerTable, { reload }] = useTable({
        title: computed(() => (searchInfo.hasThisRole ? '已分配用户' : '可分配用户')),
        api: getUserList,
        rowKey: 'id',
        columns: userTableColumns,
        formConfig: {
          labelWidth: 120,
          schemas: userSearchFormSchema,
        },
        isCanResizeParent: true,
        useSearchForm: true,
        showTableSetting: false,
        bordered: true,
        pagination: true,
        showIndexColumn: false,
      });

      const [roleAssignDrawer, { setDrawerProps }] = useDrawerInner(async (data) => {
        setDrawerProps({
          showCancelBtn: false,
          showOkBtn: false,
          visible: true,
          confirmLoading: false,
        });
        rowId.value = data.record.id;
        roleName.value = data.record.name;
        searchInfo.hasThisRole = false;
      });

      function handleAssign() {
        assign({ roleId: rowId.value, userIds: checkedKeys.value, addUser: true }).then(() => {
          searchInfo.roleId = rowId.value;
          reload();
        });
        searchInfo.roleId = rowId.value;
        reload();
      }

      function handleRemove() {
        assign({ roleId: rowId.value, userIds: checkedKeys.value, addUser: false }).then(() => {});
      }

      function onFetchSuccess() {}

      function onSelectChange(selectedRowKeys: (string | number)[]) {
        checkedKeys.value = selectedRowKeys;
      }

      function handleSelect(hasThisRole = false) {
        searchInfo.roleId = rowId.value;
        searchInfo.hasThisRole = hasThisRole;
        reload();
      }

      const getTitle = computed(() => '【' + roleName.value + '】角色分配');

      return {
        t,
        getTitle,
        searchInfo,
        checkedKeys,
        roleAssignDrawer,
        registerTable,
        handleAssign,
        handleRemove,
        onFetchSuccess,
        onSelectChange,
        handleSelect,
      };
    },
  });
</script>
