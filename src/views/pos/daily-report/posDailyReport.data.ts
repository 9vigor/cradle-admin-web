import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import dayjs from 'dayjs';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('pos.dailyReport.reportDate'),
    dataIndex: 'reportDate',
    ellipsis: true,
  },
  {
    title: t('pos.dailyReport.registeredMember'),
    dataIndex: 'registeredMember',
    ellipsis: true,
  },
  {
    title: t('pos.dailyReport.rechargedMember'),
    dataIndex: 'rechargedMember',
    ellipsis: true,
  },
  {
    title: t('pos.dailyReport.consumedMember'),
    dataIndex: 'consumedMember',
    ellipsis: true,
  },
  {
    title: t('pos.dailyReport.rechargeAmount'),
    dataIndex: 'rechargeAmount',
    ellipsis: true,
  },
  {
    title: t('pos.dailyReport.consumedAmount'),
    dataIndex: 'consumedAmount',
    ellipsis: true,
  },
  {
    title: t('pos.dailyReport.spendAmount'),
    dataIndex: 'spendAmount',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'reportDateRange',
    label: t('pos.dailyReport.reportDate'),
    component: 'RangePicker',
    defaultValue: [
      dayjs().startOf('month').format('YYYY-MM-DD'),
      dayjs().endOf('month').format('YYYY-MM-DD'),
    ],
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'reportDate',
    label: t('pos.dailyReport.reportDate'),
    component: 'DatePicker',
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
    },
  },
  {
    field: 'registeredMember',
    label: t('pos.dailyReport.registeredMember'),
    component: 'InputNumber',
  },
  {
    field: 'rechargedMember',
    label: t('pos.dailyReport.rechargedMember'),
    component: 'InputNumber',
  },
  {
    field: 'consumedMember',
    label: t('pos.dailyReport.consumedMember'),
    component: 'InputNumber',
  },
  {
    field: 'rechargeAmount',
    label: t('pos.dailyReport.rechargeAmount'),
    component: 'InputNumber',
  },
  {
    field: 'consumedAmount',
    label: t('pos.dailyReport.consumedAmount'),
    component: 'InputNumber',
  },
  {
    field: 'spendAmount',
    label: t('pos.dailyReport.spendAmount'),
    component: 'InputNumber',
  },
];
