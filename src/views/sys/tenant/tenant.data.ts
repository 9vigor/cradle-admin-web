import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { StatusEnum } from '/@/enums/commonEnum';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { localeDict, localeDictMap } from '/@/api/sys/dict';

const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: '租户ID',
    dataIndex: 'tenantKey',
    ellipsis: true,
  },
  {
    title: '租户名称',
    dataIndex: 'tenantName',
    ellipsis: true,
  },
  {
    title: '地区',
    dataIndex: 'locale',
    ellipsis: true,
    customRender: ({ text }) => {
      return localeDictMap.get(text);
    },
  },
  {
    title: '域名',
    dataIndex: 'domain',
    ellipsis: true,
  },
  {
    title: '状态',
    dataIndex: 'status',
    ellipsis: true,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = status === StatusEnum.NORMAL;
      const color = enable ? 'green' : 'red';
      const text = enable ? t('common.enable') : t('common.disable');
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建人',
    dataIndex: 'createBy',
    ellipsis: true,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    ellipsis: true,
    sorter: true,
  },
  {
    title: '更新人',
    dataIndex: 'updateBy',
    ellipsis: true,
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'tenantKey',
    label: '租户ID',
    component: 'InputNumber',
    colProps: { span: 8 },
  },
  {
    field: 'tenantName',
    label: '租户名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'tenantKey',
    label: '租户ID',
    component: 'InputNumber',
    required: true,
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'tenantName',
    label: '租户名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'locale',
    label: '地区',
    component: 'Select',
    required: true,
    componentProps: {
      options: localeDict,
    },
  },
  {
    field: 'domain',
    label: '域名',
    component: 'InputTextArea',
    required: true,
    componentProps: {
      rows: 3,
      placeholder: '支持多条，用英文";"分隔',
    },
  },
  {
    field: 'remarks',
    label: t('common.remarks'),
    component: 'InputTextArea',
    componentProps: {
      rows: 3,
    },
    required: false,
  },
];
