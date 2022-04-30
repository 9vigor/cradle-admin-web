import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('pos.comboOrder.userId'),
    dataIndex: 'userId',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrder.username'),
    dataIndex: 'username',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrder.mobile'),
    dataIndex: 'mobile',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrder.orderNo'),
    dataIndex: 'orderNo',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrder.orderSource'),
    dataIndex: 'orderSource',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrder.orderAmount'),
    dataIndex: 'orderAmount',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrder.actualAmount'),
    dataIndex: 'actualAmount',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrder.discountedAmount'),
    dataIndex: 'discountedAmount',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrder.usedPoints'),
    dataIndex: 'usedPoints',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrder.pointAmount'),
    dataIndex: 'pointAmount',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrder.tableNo'),
    dataIndex: 'tableNo',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrder.comboNum'),
    dataIndex: 'comboNum',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrder.createTime'),
    dataIndex: 'createTime',
    ellipsis: true,
  },
  {
    title: t('pos.comboOrder.createBy'),
    dataIndex: 'createBy',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userId',
    label: t('pos.comboOrder.userId'),
    component: 'InputNumber',
    colProps: { span: 8 },
  },
  {
    field: 'username',
    label: t('pos.comboOrder.username'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'mobile',
    label: t('pos.comboOrder.mobile'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'orderNo',
    label: t('pos.comboOrder.orderNo'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'orderSource',
    label: t('pos.comboOrder.orderSource'),
    component: 'InputNumber',
    colProps: { span: 8 },
  },
  {
    field: 'createBy',
    label: t('pos.comboOrder.createBy'),
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'userId',
    label: t('pos.comboOrder.userId'),
    component: 'InputNumber',
  },
  {
    field: 'username',
    label: t('pos.comboOrder.username'),
    component: 'Input',
  },
  {
    field: 'mobile',
    label: t('pos.comboOrder.mobile'),
    component: 'Input',
  },
  {
    field: 'orderNo',
    label: t('pos.comboOrder.orderNo'),
    component: 'Input',
  },
  {
    field: 'orderSource',
    label: t('pos.comboOrder.orderSource'),
    component: 'InputNumber',
  },
  {
    field: 'orderAmount',
    label: t('pos.comboOrder.orderAmount'),
    component: 'InputNumber',
  },
  {
    field: 'actualAmount',
    label: t('pos.comboOrder.actualAmount'),
    component: 'InputNumber',
  },
  {
    field: 'discountedAmount',
    label: t('pos.comboOrder.discountedAmount'),
    component: 'InputNumber',
  },
  {
    field: 'usedPoints',
    label: t('pos.comboOrder.usedPoints'),
    component: 'InputNumber',
  },
  {
    field: 'pointAmount',
    label: t('pos.comboOrder.pointAmount'),
    component: 'InputNumber',
  },
  {
    field: 'tableNo',
    label: t('pos.comboOrder.tableNo'),
    component: 'Input',
  },
  {
    field: 'comboNum',
    label: t('pos.comboOrder.comboNum'),
    component: 'InputNumber',
  },
];
