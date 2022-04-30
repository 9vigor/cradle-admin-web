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
        <template #fieldNameTitle>
          <TypographyText type="danger">*</TypographyText>
          字段名
        </template>
        <template #javaFieldNameTitle>
          <TypographyText type="danger">*</TypographyText>
          Java字段名
        </template>
        <template #labelName="{ index }">
          <Input
            v-model:value="tableDataSource[index].labelName"
            :maxlength="6"
            :style="{ border: tableDataSource[index].labelName ? '' : '1px solid red' }"
            placeholder="最长6"
          />
        </template>
        <template #javaFieldName="{ index }">
          <Input
            v-model:value="tableDataSource[index].javaFieldName"
            :disabled="tableDataSource[index].defaultField"
            :maxlength="20"
            :style="{ border: tableDataSource[index].javaFieldName ? '' : '1px solid red' }"
          />
        </template>
        <template #nullable|insert|update="{ index }">
          <Divider :dashed="true" type="vertical" />
          <Checkbox v-model:checked="tableDataSource[index].nullable" />
          <Divider type="vertical" />
          <Checkbox v-model:checked="tableDataSource[index].insert" />
          <Divider type="vertical" />
          <Checkbox v-model:checked="tableDataSource[index].update" />
        </template>
        <template #list|sortable="{ index }">
          <Divider :dashed="true" type="vertical" />
          <Checkbox
            v-model:checked="tableDataSource[index].list"
            :disabled="!allowedSearchAndShow(index)"
          />
          <Divider type="vertical" />
          <Checkbox
            v-model:checked="tableDataSource[index].sortable"
            :disabled="!allowedSearchAndShow(index)"
          />
        </template>
        <template #search="{ index }">
          <Tooltip placement="top">
            <template #title>
              <span>配合查询方式</span>
            </template>
            <Checkbox
              v-model:checked="tableDataSource[index].search"
              :disabled="!allowedSearchAndShow(index)"
            />
          </Tooltip>
        </template>
        <template #queryType="{ index }">
          <Select
            v-model:value="tableDataSource[index].queryType"
            :allowClear="true"
            :disabled="!allowedSearchAndShow(index)"
            :options="queryTypeDict"
            style="width: 100px"
          />
        </template>
        <template #inputType="{ index }">
          <Select
            v-model:value="tableDataSource[index].inputType"
            :allowClear="true"
            :options="inputTypeDict"
            style="width: 110px"
            @change="inputTypeChange(index)"
          />
        </template>
        <template #dictType="{ index }">
          <Select
            v-model:value="tableDataSource[index].dictType"
            :allowClear="true"
            :disabled="!dictField(index)"
            :options="dictTypeDict"
            placeholder="可data.ts补全"
            show-search
            style="width: 140px"
          />
        </template>
        <template #sort="{ index }">
          <InputNumber
            v-model:value="tableDataSource[index].sort"
            :maxlength="20"
            :step="10"
            :style="{ border: tableDataSource[index].sort != null ? '' : '1px solid red' }"
            placeholder="升序"
          />
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
  import { saveCodegen, updateCodegen } from '/@/api/sys/codegen';
  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    name: 'CodegenDrawer',
    components: {
      BasicDrawer,
      BasicForm,
      BasicTable,
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
      allowedSearchAndShow(index) {
        return !['RICH_TEXT', 'IMAGE', 'FILE'].includes(this.tableDataSource[index].inputType);
      },
      inputTypeChange(index) {
        if (['RICH_TEXT', 'IMAGE', 'FILE'].includes(this.tableDataSource[index].inputType)) {
          this.tableDataSource[index].search = false;
          this.tableDataSource[index].list = false;
          this.tableDataSource[index].sortable = false;
          this.tableDataSource[index].queryType = 'NONE';
        }
      },
      dictField(index) {
        return ['SELECT', 'SELECT_MULTIPLE', 'RADIO', 'CHECKBOX'].includes(
          this.tableDataSource[index].inputType,
        );
      },
    },
  });
</script>
