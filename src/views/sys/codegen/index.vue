<template>
  <div>
    <BasicTable
      @register="registerTable"
      :rowSelection="{
        type: 'checkbox',
        selectedRowKeys: checkedKeys,
        onChange: onSelectChange,
      }"
      @fetch-success="onFetchSuccess"
    >
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:gen:save')">
          {{ t('common.createText') }}
        </a-button>
        <a-button
          type="primary"
          @click="handleGenerateBatch"
          :disabled="checkedKeys.length === 0"
          v-if="hasPermission('sys:gen:generate')"
        >
          {{ t('sys.codegen.batchGenerate') }}
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
                ifShow: hasPermission('sys:gen:update'),
              },
              {
                icon: 'ant-design:delete-outlined',
                tooltip: t('common.delText'),
                color: 'error',
                ifShow: hasPermission('sys:gen:delete'),
                popConfirm: {
                  title: t('common.delTip'),
                  confirm: handleDelete.bind(null, record),
                },
              },
              {
                icon: 'clarity:export-line',
                tooltip: t('sys.codegen.generate'),
                onClick: handleGenerate.bind(null, record),
                ifShow: hasPermission('sys:gen:generate'),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <CodegenDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { useDrawer } from '/@/components/Drawer';
  import CodegenDrawer from './CodegenDrawer.vue';

  import { columns, searchFormSchema } from './codegen.data';
  import { useI18n } from '/@/hooks/web/useI18n';
  import {
    deleteCodegen,
    codeGenerate,
    getCodegenList,
    getCustomCase,
    getDefaultCase,
  } from '/@/api/sys/codegen';
  import { downloadByData } from '/@/utils/file/download';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { usePermission } from '/@/hooks/web/usePermission';
  export default defineComponent({
    name: 'CodegenManagement',
    components: { BasicTable, CodegenDrawer, TableAction },
    setup() {
      const { t } = useI18n();
      const { hasPermission } = usePermission();
      const { createMessage } = useMessage();
      const checkedKeys = ref<Array<string | number>>([]);
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload, getForm }] = useTable({
        api: getCodegenList,
        columns,
        useSearchForm: true,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        rowKey: 'id',
        isTreeTable: false,
        pagination: true,
        striped: false,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: true,
        canResize: true,
        actionColumn: {
          width: 120,
          title: t('common.operateText'),
          dataIndex: 'action',
          fixed: undefined,
        },
      });

      function handleCreate() {
        const tableName = getForm().getFieldsValue().tableName;
        if (!tableName) {
          createMessage.warning('请选择数据库表');
          return;
        }
        getDefaultCase(tableName).then((data) => {
          openDrawer(true, {
            record: data,
            isUpdate: false,
          });
        });
      }

      function handleEdit(record: Recordable) {
        getCustomCase(record.id).then((data) => {
          openDrawer(true, {
            id: record.id,
            record: data,
            isUpdate: true,
          });
        });
      }

      function handleDelete(record: Recordable) {
        deleteCodegen(record.id).then(() => reload());
      }

      function handleGenerate(record: Recordable) {
        codeGenerate([record.id]).then((res) => {
          downloadByData(
            res.data,
            decodeURI(
              res?.headers['content-disposition']?.substring('attachment;filename='.length),
            ),
            'application/zip',
          );
        });
      }
      function handleGenerateBatch() {
        codeGenerate(checkedKeys.value).then((res) => {
          downloadByData(
            res.data,
            decodeURI(
              res?.headers['content-disposition']?.substring('attachment;filename='.length),
            ),
            'application/zip',
          );
        });
      }

      function handleSuccess() {
        reload();
      }

      function onFetchSuccess() {}

      function onSelectChange(selectedRowKeys: (string | number)[]) {
        checkedKeys.value = selectedRowKeys;
      }

      return {
        t,
        hasPermission,
        checkedKeys,
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleGenerate,
        handleGenerateBatch,
        handleSuccess,
        onFetchSuccess,
        onSelectChange,
      };
    },
  });
</script>
