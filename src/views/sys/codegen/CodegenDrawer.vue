<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="95%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
    <div class="p-4">
      <BasicTable @register="registerTable">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'labelName'">
            <TypographyText type="danger">*</TypographyText>
            字段名
          </template>
          <template v-else-if="column.key === 'javaFieldName'">
            <TypographyText type="danger">*</TypographyText>
            Java字段名
          </template>
          <template v-else>
            <HeaderCell :column="column" />
          </template>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'labelName'">
            <Input
              v-model:value="record.labelName"
              :maxlength="6"
              :style="{ border: record.labelName ? '' : '1px solid red' }"
              placeholder="最长6"
            />
          </template>
          <template v-if="column.key === 'javaFieldName'">
            <Input
              v-model:value="record.javaFieldName"
              :disabled="record.defaultField"
              :maxlength="20"
              :style="{ border: record.javaFieldName ? '' : '1px solid red' }"
            />
          </template>
          <template v-if="column.key === 'nullable|insert|update'">
            <Divider :dashed="true" type="vertical" />
            <Checkbox v-model:checked="record.nullable" />
            <Divider type="vertical" />
            <Checkbox v-model:checked="record.insert" />
            <Divider type="vertical" />
            <Checkbox v-model:checked="record.update" />
          </template>
          <template v-if="column.key === 'list|sortable'">
            <Divider :dashed="true" type="vertical" />
            <Checkbox v-model:checked="record.list" :disabled="!allowedSearchAndShow(record)" />
            <Divider type="vertical" />
            <Checkbox v-model:checked="record.sortable" :disabled="!allowedSearchAndShow(record)" />
          </template>
          <template v-if="column.key === 'search'">
            <Tooltip placement="top">
              <template #title>
                <span>配合查询方式</span>
              </template>
              <Checkbox v-model:checked="record.search" :disabled="!allowedSearchAndShow(record)" />
            </Tooltip>
          </template>
          <template v-if="column.key === 'queryType'">
            <Select
              v-model:value="record.queryType"
              :allowClear="true"
              :disabled="!allowedSearchAndShow(record)"
              :options="queryTypeDict"
              style="width: 100px"
            />
          </template>
          <template v-if="column.key === 'inputType'">
            <Select
              v-model:value="record.inputType"
              :allowClear="true"
              :options="inputTypeDict"
              style="width: 110px"
              @change="inputTypeChange(record)"
            />
          </template>
          <template v-if="column.key === 'dictType'">
            <Select
              v-model:value="record.dictType"
              :allowClear="true"
              :disabled="!dictField(record)"
              :options="dictTypeDict"
              placeholder="可data.ts补全"
              show-search
              style="width: 140px"
            />
          </template>
          <template v-if="column.key === 'sort'">
            <InputNumber
              v-model:value="record.sort"
              :maxlength="20"
              :step="10"
              :style="{ border: record.sort != null ? '' : '1px solid red' }"
              placeholder="升序"
            />
          </template>
        </template>
      </BasicTable>
    </div>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema, editableColumns } from './codegen.data';
  import { BasicTable, useTable } from '/@/components/Table';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { queryTypeDict, inputTypeDict } from '/@/api/sys/dict';
  import {
    Checkbox,
    TypographyText,
    Input,
    InputNumber,
    Select,
    Tooltip,
    Divider,
  } from 'ant-design-vue';
  import HeaderCell from '/@/components/Table/src/components/HeaderCell.vue';
  import { saveCodegen, updateCodegen } from '/@/api/sys/codegen';
  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    name: 'CodegenDrawer',
    components: {
      BasicDrawer,
      BasicForm,
      BasicTable,
      HeaderCell,
      Checkbox,
      TypographyText,
      Input,
      InputNumber,
      Select,
      Tooltip,
      Divider,
    },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      let tableDataSource = ref<any>([]);
      const { t } = useI18n();
      const rowId = ref('');
      const isUpdate = ref(true);
      let dictTypeDict = ref([]);
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 80,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: { md: 8 },
      });

      const [registerTable] = useTable({
        columns: editableColumns,
        pagination: false,
        dataSource: tableDataSource,
        showIndexColumn: false,
        showTableSetting: false,
      });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        await resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        rowId.value = data?.id;
        await setFieldsValue({
          ...data.record,
        });
        tableDataSource.value = data.record.columnPlans;
      });

      const getTitle = computed(() =>
        !unref(isUpdate) ? t('common.createText') : t('common.editText'),
      );

      async function handleSubmit() {
        try {
          const values = await validate();
          values.columnPlans = tableDataSource.value;
          setDrawerProps({ confirmLoading: true });
          if (!unref(isUpdate)) {
            await saveCodegen(values);
          } else {
            await updateCodegen(rowId.value, values);
          }

          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return {
        dictTypeDict,
        registerDrawer,
        registerForm,
        registerTable,
        tableDataSource,
        getTitle,
        queryTypeDict,
        inputTypeDict,
        handleSubmit,
      };
    },
    methods: {
      allowedSearchAndShow(record) {
        return !['RICH_TEXT', 'IMAGE', 'FILE'].includes(record.inputType);
      },
      inputTypeChange(record) {
        if (['RICH_TEXT', 'IMAGE', 'FILE'].includes(record.inputType)) {
          record.search = false;
          record.list = false;
          record.sortable = false;
          record.queryType = 'NONE';
        }
      },
      dictField(record) {
        return ['SELECT', 'SELECT_MULTIPLE', 'RADIO', 'CHECKBOX'].includes(record.inputType);
      },
    },
  });
</script>
