import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { templateDict, templateDictMap } from '/@/api/sys/dict';
import { getTableList } from '/@/api/sys/codegen';
import { CodeTemplateEnum } from '/@/enums/codegenEnum';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('sys.codegen.tableName'),
    dataIndex: 'tableName',
  },
  {
    title: t('sys.codegen.menuName'),
    dataIndex: 'menuName',
  },
  {
    title: t('sys.codegen.moduleName'),
    dataIndex: 'moduleName',
  },
  {
    title: t('sys.codegen.className'),
    dataIndex: 'className',
  },
  {
    title: t('sys.codegen.template'),
    dataIndex: 'template',
    customRender: ({ record }) => {
      return templateDictMap.get(record.template);
    },
  },
  {
    title: t('common.updateTime'),
    dataIndex: 'updateTime',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'tableName',
    label: t('sys.codegen.tableName'),
    component: 'ApiSelect',
    componentProps: {
      api: getTableList,
      labelField: 'tableName',
      valueField: 'tableName',
      alwaysLoad: true,
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'tableName',
    label: t('sys.codegen.tableName'),
    component: 'Input',
    rules: [{ required: true, message: '表不能为空', whitespace: true }],
    colProps: { md: 8 },
  },
  {
    field: 'menuName',
    label: t('sys.codegen.menuName'),
    component: 'Input',
    rules: [{ required: true, message: '菜单名不能为空', whitespace: true }],
    colProps: { md: 8 },
  },
  {
    field: 'moduleName',
    label: t('sys.codegen.moduleName'),
    component: 'Input',
    rules: [{ required: true, message: '模块名不能为空', whitespace: true }],
    componentProps: { placeholder: '英文名如sys' },
    colProps: { md: 8 },
  },
  {
    field: 'functionName',
    label: t('sys.codegen.functionName'),
    component: 'Input',
    rules: [{ required: true, message: '功能名不能为空', whitespace: true }],
    componentProps: { placeholder: '英文名如demo' },
    colProps: { md: 8 },
  },
  {
    field: 'className',
    label: t('sys.codegen.className'),
    component: 'Input',
    rules: [{ required: true, message: '类名不能为空', whitespace: true }],
    componentProps: { placeholder: '英文名如SysDemo' },
    colProps: { md: 8 },
  },
  {
    field: 'templateType',
    label: t('sys.codegen.template'),
    component: 'Select',
    rules: [{ required: true, message: '类名不能为空', whitespace: true }],
    defaultValue: CodeTemplateEnum.JAVA_CRUD,
    componentProps: {
      options: templateDict,
    },
    colProps: { md: 8 },
  },
];

export const editableColumns: BasicColumn[] = [
  {
    title: '列名',
    align: 'left',
    dataIndex: 'dbColumnName',
  },
  {
    title: '字段名',
    dataIndex: 'labelName',
    slots: { customRender: 'labelName', title: 'labelName' },
  },
  {
    title: 'DB类型',
    align: 'left',
    dataIndex: 'columnType',
  },
  {
    title: 'Java类型',
    align: 'left',
    dataIndex: 'javaType',
  },
  {
    title: 'Java字段名称',
    dataIndex: 'javaFieldName',
    slots: { customRender: 'javaFieldName', title: 'javaFieldNameTitle' },
  },
  {
    title: '可空 | 插入 | 更新',
    dataIndex: 'nullable|insert|update',
    slots: { customRender: 'nullable|insert|update' },
  },
  {
    title: '列表 | 排序',
    dataIndex: 'list|sortable',
    slots: { customRender: 'list|sortable' },
  },
  {
    title: '查询',
    dataIndex: 'search',
    slots: { customRender: 'search' },
    width: 60,
  },
  {
    title: '查询方式',
    dataIndex: 'queryType',
    slots: { customRender: 'queryType' },
  },
  {
    title: '表单类型',
    dataIndex: 'inputType',
    slots: { customRender: 'inputType' },
  },
  {
    title: '字典',
    dataIndex: 'dictType',
    slots: { customRender: 'dictType' },
  },
  {
    title: '顺序',
    dataIndex: 'sort',
    slots: { customRender: 'sort' },
  },
];
