<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <BasicUpload
          :maxSize="20"
          :maxNumber="10"
          :api="uploadApi"
          class="my-5"
          :emptyHidePreview="true"
        />
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:eye-line',
              tooltip: t('common.previewText'),
              onClick: handlePreview.bind(null, record),
            },
            {
              icon: 'clarity:download-line',
              tooltip: t('common.downloadText'),
              onClick: handleDownload.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: t('common.delText'),
              popConfirm: {
                title: t('common.delTip'),
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { BasicUpload } from '/@/components/Upload';
  import { uploadApi } from '/@/api/sys/file';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { deleteFile, downloadFile, getFileList } from '/@/api/sys/file';
  import { columns, searchFormSchema } from './file.data';
  import { downloadByData } from '/@/utils/file/download';
  import { createImgPreview } from '/@/components/Preview';

  export default defineComponent({
    name: 'FileManagement',
    components: { BasicTable, TableAction, BasicUpload },
    setup() {
      const { t } = useI18n();
      const [registerTable, { reload }] = useTable({
        api: getFileList,
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
          slots: { customRender: 'action' },
        },
      });

      function handleDelete(record: Recordable) {
        deleteFile(record.id).then(() => reload());
      }

      function handlePreview(record: Recordable) {
        createImgPreview({ imageList: [record.url] });
      }

      function handleDownload(record: Recordable) {
        downloadFile(record.id).then((res) => {
          downloadByData(
            res.data,
            decodeURI(
              res?.headers['content-disposition']?.substring('attachment;filename='.length),
            ),
          );
        });
      }

      function handleSuccess() {
        reload();
      }

      return {
        t,
        uploadApi,
        registerTable,
        handleDownload,
        handlePreview,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
