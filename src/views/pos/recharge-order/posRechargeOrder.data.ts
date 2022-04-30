import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import dayjs from 'dayjs';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('pos.rechargeOrder.orderNo'),
    dataIndex: 'orderNo',
    ellipsis: true,
  },
  {
    title: t('pos.rechargeOrder.userId'),
    dataIndex: 'userId',
    ellipsis: true,
  },
  {
    title: t('pos.rechargeOrder.username'),
    dataIndex: 'username',
    ellipsis: true,
  },
  {
    title: t('pos.rechargeOrder.mobile'),
    dataIndex: 'mobile',
    ellipsis: true,
  },
  {
    title: t('pos.rechargeOrder.amount'),
    dataIndex: 'amount',
    ellipsis: true,
  },
  {
    title: t('pos.rechargeOrder.channel'),
    dataIndex: 'channel',
    ellipsis: true,
  },
  {
    title: t('pos.rechargeOrder.remarks'),
    dataIndex: 'remarks',
    ellipsis: true,
  },
  {
    title: t('pos.rechargeOrder.createTime'),
    dataIndex: 'createTime',
    ellipsis: true,
  },
  {
    title: t('pos.rechargeOrder.createBy'),
    dataIndex: 'createBy',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'orderNo',
    label: t('pos.rechargeOrder.orderNo'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'userId',
    label: t('pos.rechargeOrder.userId'),
    component: 'InputNumber',
    colProps: { span: 8 },
  },
  {
    field: 'username',
    label: t('pos.rechargeOrder.username'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'mobile',
    label: t('pos.rechargeOrder.mobile'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'channel',
    label: t('pos.rechargeOrder.channel'),
    component: 'InputNumber',
    colProps: { span: 8 },
  },
  {
    field: 'createTimeRange',
    label: t('pos.rechargeOrder.createTime'),
    component: 'RangePicker',
    defaultValue: [
      dayjs().startOf('month').format('YYYY-MM-DD HH:mm:ss'),
      dayjs().endOf('month').format('YYYY-MM-DD HH:mm:ss'),
    ],
    componentProps: {
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      showTime: true,
    },
    colProps: { span: 8 },
  },
  {
    field: 'createBy',
    label: t('pos.rechargeOrder.createBy'),
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'orderNo',
    label: t('pos.rechargeOrder.orderNo'),
    component: 'Input',
  },
  {
    field: 'userId',
    label: t('pos.rechargeOrder.userId'),
    component: 'InputNumber',
  },
  {
    field: 'username',
    label: t('pos.rechargeOrder.username'),
    component: 'Input',
  },
  {
    field: 'mobile',
    label: t('pos.rechargeOrder.mobile'),
    component: 'Input',
  },
  {
    field: 'amount',
    label: t('pos.rechargeOrder.amount'),
    component: 'InputNumber',
  },
  {
    field: 'channel',
    label: t('pos.rechargeOrder.channel'),
    component: 'InputNumber',
  },
  {
    field: 'remarks',
    label: t('pos.rechargeOrder.remarks'),
    component: 'Input',
  },
];
