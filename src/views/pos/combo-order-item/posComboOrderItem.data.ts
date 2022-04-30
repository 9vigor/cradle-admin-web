import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('pos.comboOrderItem.orderId'),
    dataIndex: 'orderId',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrderItem.comboId'),
    dataIndex: 'comboId',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrderItem.comboName'),
    dataIndex: 'comboName',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrderItem.comboImage'),
    dataIndex: 'comboImage',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrderItem.comboDescription'),
    dataIndex: 'comboDescription',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrderItem.comboPrice'),
    dataIndex: 'comboPrice',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrderItem.comboNum'),
    dataIndex: 'comboNum',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrderItem.subtotal'),
    dataIndex: 'subtotal',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'orderId',
    label: t('pos.comboOrderItem.orderId'),
    component: 'InputNumber',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'orderId',
    label: t('pos.comboOrderItem.orderId'),
    component: 'InputNumber',
  },
  {
    field: 'comboId',
    label: t('pos.comboOrderItem.comboId'),
    component: 'InputNumber',
  },
  {
    field: 'comboName',
    label: t('pos.comboOrderItem.comboName'),
    component: 'Input',
  },
  {
    field: 'comboImage',
    label: t('pos.comboOrderItem.comboImage'),
    component: 'Input',
  },
  {
    field: 'comboDescription',
    label: t('pos.comboOrderItem.comboDescription'),
    component: 'Input',
  },
  {
    field: 'comboPrice',
    label: t('pos.comboOrderItem.comboPrice'),
    component: 'InputNumber',
  },
  {
    field: 'comboNum',
    label: t('pos.comboOrderItem.comboNum'),
    component: 'InputNumber',
  },
  {
    field: 'subtotal',
    label: t('pos.comboOrderItem.subtotal'),
    component: 'InputNumber',
  },
];
