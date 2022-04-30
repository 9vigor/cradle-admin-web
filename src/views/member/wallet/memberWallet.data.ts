import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import dayjs from 'dayjs';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('member.wallet.id'),
    dataIndex: 'id',
    ellipsis: true,
  },
  {
    title: t('member.wallet.username'),
    dataIndex: 'username',
    ellipsis: true,
  },
  {
    title: t('member.wallet.mobile'),
    dataIndex: 'mobile',
    ellipsis: true,
  },
  {
    title: t('member.wallet.balance'),
    dataIndex: 'balance',
    ellipsis: true,
  },
  {
    title: t('member.wallet.points'),
    dataIndex: 'points',
    ellipsis: true,
  },
  {
    title: t('member.wallet.createTime'),
    dataIndex: 'createTime',
    ellipsis: true,
  },
  {
    title: t('member.wallet.updateTime'),
    dataIndex: 'updateTime',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: t('member.wallet.id'),
    component: 'InputNumber',
    colProps: { span: 8 },
  },
  {
    field: 'username',
    label: t('member.wallet.username'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'mobile',
    label: t('member.wallet.mobile'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'createTimeRange',
    label: t('member.wallet.createTime'),
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
];

export const formSchema: FormSchema[] = [
  {
    field: 'username',
    label: t('member.wallet.username'),
    component: 'Input',
  },
  {
    field: 'mobile',
    label: t('member.wallet.mobile'),
    component: 'Input',
  },
  {
    field: 'balance',
    label: t('member.wallet.balance'),
    component: 'InputNumber',
  },
  {
    field: 'points',
    label: t('member.wallet.points'),
    component: 'InputNumber',
  },
];
