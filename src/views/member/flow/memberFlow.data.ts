import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import dayjs from 'dayjs';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('member.flow.userId'),
    dataIndex: 'userId',
    ellipsis: true,
  },
  {
    title: t('member.flow.username'),
    dataIndex: 'username',
    ellipsis: true,
  },
  {
    title: t('member.flow.mobile'),
    dataIndex: 'mobile',
    ellipsis: true,
  },
  {
    title: t('member.flow.balanceChange'),
    dataIndex: 'balanceChange',
    ellipsis: true,
  },
  {
    title: t('member.flow.beforeBalance'),
    dataIndex: 'beforeBalance',
    ellipsis: true,
  },
  {
    title: t('member.flow.afterBalance'),
    dataIndex: 'afterBalance',
    ellipsis: true,
  },
  {
    title: t('member.flow.pointsChange'),
    dataIndex: 'pointsChange',
    ellipsis: true,
  },
  {
    title: t('member.flow.beforePoints'),
    dataIndex: 'beforePoints',
    ellipsis: true,
  },
  {
    title: t('member.flow.afterPoints'),
    dataIndex: 'afterPoints',
    ellipsis: true,
  },
  {
    title: t('member.flow.createTime'),
    dataIndex: 'createTime',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userId',
    label: t('member.flow.userId'),
    component: 'InputNumber',
    colProps: { span: 8 },
  },
  {
    field: 'username',
    label: t('member.flow.username'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'mobile',
    label: t('member.flow.mobile'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'createTimeRange',
    label: t('member.flow.createTime'),
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
    field: 'userId',
    label: t('member.flow.userId'),
    component: 'InputNumber',
  },
  {
    field: 'username',
    label: t('member.flow.username'),
    component: 'Input',
  },
  {
    field: 'mobile',
    label: t('member.flow.mobile'),
    component: 'Input',
  },
  {
    field: 'balanceChange',
    label: t('member.flow.balanceChange'),
    component: 'InputNumber',
  },
  {
    field: 'beforeBalance',
    label: t('member.flow.beforeBalance'),
    component: 'InputNumber',
  },
  {
    field: 'afterBalance',
    label: t('member.flow.afterBalance'),
    component: 'InputNumber',
  },
  {
    field: 'pointsChange',
    label: t('member.flow.pointsChange'),
    component: 'InputNumber',
  },
  {
    field: 'beforePoints',
    label: t('member.flow.beforePoints'),
    component: 'InputNumber',
  },
  {
    field: 'afterPoints',
    label: t('member.flow.afterPoints'),
    component: 'InputNumber',
  },
];
