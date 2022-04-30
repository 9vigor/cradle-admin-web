import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import dayjs from 'dayjs';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('pos.spend.name'),
    dataIndex: 'name',
    ellipsis: true,
  },
  {
    title: t('pos.spend.amount'),
    dataIndex: 'amount',
    ellipsis: true,
  },
  {
    title: t('pos.spend.remarks'),
    dataIndex: 'remarks',
    ellipsis: true,
  },
  {
    title: t('pos.spend.createTime'),
    dataIndex: 'createTime',
    ellipsis: true,
  },
  {
    title: t('pos.spend.createBy'),
    dataIndex: 'createBy',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'createTimeRange',
    label: t('pos.spend.createTime'),
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
    label: t('pos.spend.createBy'),
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: t('pos.spend.name'),
    component: 'Input',
  },
  {
    field: 'amount',
    label: t('pos.spend.amount'),
    component: 'InputNumber',
  },
  {
    field: 'remarks',
    label: t('pos.spend.remarks'),
    component: 'Input',
  },
];
