<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <DeptTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:user:save')">{{
          t('common.createText')
        }}</a-button>
        <a-button type="primary" @click="handleUnlockModal" v-if="hasPermission('sys:user:unlock')">
          {{ t('sys.user.unlock') }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'avatarUrl'">
          <Image v-if="record.avatarUrl" :src="record.avatarUrl" height="40px" width="40px" />
        </template>
        <template v-if="column.key === 'status'">
          <Tag :color="record.status === StatusEnum.NORMAL ? 'blue' : 'red'">
            {{ statusDictMap.get(record.status) }}
          </Tag>
        </template>
        <template v-if="column.key === 'googleBind'">
          <Tag :color="record.googleVerify === true ? 'blue' : 'red'">
            {{
              record.googleVerify === true
                ? t('sys.user.google.openVerify')
                : t('sys.user.google.closeVerify')
            }}
          </Tag>
          <Divider type="vertical" />
          <Tag :color="record.googleBind === true ? 'blue' : 'red'">
            {{
              record.googleBind === true ? t('sys.user.google.bound') : t('sys.user.google.unbound')
            }}
          </Tag>
          <Divider type="vertical" />
          <a @click="handleGoogleSecret(record)" v-if="hasPermission('sys:user:google-secret')">{{
            t('common.detailText')
          }}</a>
        </template>
        <template v-if="column.key === 'action'">
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
                ifShow: hasPermission('sys:user:update'),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: t('common.delText'),
                ifShow: hasPermission('sys:user:delete'),
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
    <UserDrawer @register="registerDrawer" @success="handleSuccess" />
    <QrModal @register="qrModal" @success="handleSuccess" />
    <UnlockModal @register="unlockModal" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import DeptTree from './DeptTree.vue';

  import { columns, searchFormSchema } from './user.data';
  import { useGo } from '/@/hooks/web/usePage';
  import { deleteUser, getUserList } from '/@/api/sys/user';
  import { useDrawer } from '/@/components/Drawer';
  import UserDrawer from '/@/views/sys/user/UserDrawer.vue';
  import { statusDictMap } from '/@/api/sys/dict';
  import QrModal from '/@/views/sys/user/QrModal.vue';
  import { useModal } from '/@/components/Modal';
  import { Tag, Image, Divider } from 'ant-design-vue';
  import { StatusEnum } from '/@/enums/commonEnum';
  import UnlockModal from '/@/views/sys/user/UnlockModal.vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { usePermission } from '/@/hooks/web/usePermission';

  export default defineComponent({
    name: 'UserManagement',
    components: {
      UnlockModal,
      UserDrawer,
      QrModal,
      BasicTable,
      PageWrapper,
      DeptTree,
      TableAction,
      Tag,
      Image,
      Divider,
    },
    setup() {
      const go = useGo();
      const { t } = useI18n();
      const { hasPermission } = usePermission();
      const [unlockModal, { openModal: openUnlockModal }] = useModal();
      const [qrModal, { openModal }] = useModal();
      const [registerDrawer, { openDrawer }] = useDrawer();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: t('sys.user.title'),
        api: getUserList,
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        actionColumn: {
          width: 120,
          title: t('common.operateText'),
          dataIndex: 'action',
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
        deleteUser(record.id).then(() => reload());
      }

      function handleGoogleSecret(record: Recordable) {
        openModal(true, {
          record,
        });
      }

      function handleUnlockModal() {
        openUnlockModal();
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          updateTableDataRecord(values.id, values);
        } else {
          reload();
        }
      }

      function handleSelect(deptId = '') {
        searchInfo.deptId = deptId;
        reload();
      }

      function handleView(record: Recordable) {
        go('/sys/user_detail/' + record.id);
      }

      return {
        t,
        hasPermission,
        registerTable,
        qrModal,
        unlockModal,
        openUnlockModal,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleGoogleSecret,
        handleSuccess,
        handleSelect,
        handleView,
        handleUnlockModal,
        searchInfo,
        StatusEnum,
        statusDictMap,
      };
    },
  });
</script>
