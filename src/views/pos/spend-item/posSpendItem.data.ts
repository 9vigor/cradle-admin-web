import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('pos.spendItem.spendId'),
    dataIndex: 'spendId',
    ellipsis: true,
  },
  {
    title: t('pos.spendItem.name'),
    dataIndex: 'name',
    ellipsis: true,
  },
  {
    title: t('pos.spendItem.price'),
    dataIndex: 'price',
    ellipsis: true,
  },
  {
    title: t('pos.spendItem.num'),
    dataIndex: 'num',
    ellipsis: true,
  },
  {
    title: t('pos.spendItem.subtotal'),
    dataIndex: 'subtotal',
    ellipsis: true,
  },
  {
    title: t('pos.spendItem.remarks'),
    dataIndex: 'remarks',
    ellipsis: true,
  },
  {
    title: t('pos.spendItem.createTime'),
    dataIndex: 'createTime',
    ellipsis: true,
  },
  {
    title: t('pos.spendItem.updateTime'),
    dataIndex: 'updateTime',
    ellipsis: true,
  },
  {
    title: t('pos.spendItem.createBy'),
    dataIndex: 'createBy',
    ellipsis: true,
  },
  {
    title: t('pos.spendItem.updateBy'),
    dataIndex: 'updateBy',
    ellipsis: true,
  },
  {
    title: t('pos.spendItem.status'),
    dataIndex: 'status',
    ellipsis: true,
  },
  {
    title: t('pos.spendItem.deleted'),
    dataIndex: 'deleted',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'spendId',
    label: t('pos.spendItem.spendId'),
    component: 'InputNumber',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'spendId',
    label: t('pos.spendItem.spendId'),
    component: 'InputNumber',
  },
  {
    field: 'name',
    label: t('pos.spendItem.name'),
    component: 'Input',
  },
  {
    field: 'price',
    label: t('pos.spendItem.price'),
    component: 'InputNumber',
  },
  {
    field: 'num',
    label: t('pos.spendItem.num'),
    component: 'InputNumber',
  },
  {
    field: 'subtotal',
    label: t('pos.spendItem.subtotal'),
    component: 'InputNumber',
  },
  {
    field: 'remarks',
    label: t('pos.spendItem.remarks'),
    component: 'Input',
  },
];
