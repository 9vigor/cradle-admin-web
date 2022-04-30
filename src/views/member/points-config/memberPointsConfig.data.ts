import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('member.pointsConfig.usuallyRechargeRatio'),
    dataIndex: 'usuallyRechargeRatio',
    ellipsis: true,
  },
  {
    title: t('member.pointsConfig.specialRechargeRatio'),
    dataIndex: 'specialRechargeRatio',
    ellipsis: true,
  },
  {
    title: t('member.pointsConfig.birthdayRechargeRatio'),
    dataIndex: 'birthdayRechargeRatio',
    ellipsis: true,
  },
  {
    title: t('member.pointsConfig.usuallyExchangeRatio'),
    dataIndex: 'usuallyExchangeRatio',
    ellipsis: true,
  },
  {
    title: t('member.pointsConfig.specialExchangeRatio'),
    dataIndex: 'specialExchangeRatio',
    ellipsis: true,
  },
  {
    title: t('member.pointsConfig.birthdayExchangeRatio'),
    dataIndex: 'birthdayExchangeRatio',
    ellipsis: true,
  },
  {
    title: t('member.pointsConfig.usuallyConsumeRatio'),
    dataIndex: 'usuallyConsumeRatio',
    ellipsis: true,
  },
  {
    title: t('member.pointsConfig.specialConsumeRatio'),
    dataIndex: 'specialConsumeRatio',
    ellipsis: true,
  },
  {
    title: t('member.pointsConfig.birthdayConsumeRatio'),
    dataIndex: 'birthdayConsumeRatio',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [];

export const formSchema: FormSchema[] = [
  {
    field: 'usuallyRechargeRatio',
    label: t('member.pointsConfig.usuallyRechargeRatio'),
    component: 'InputNumber',
  },
  {
    field: 'specialRechargeRatio',
    label: t('member.pointsConfig.specialRechargeRatio'),
    component: 'InputNumber',
  },
  {
    field: 'birthdayRechargeRatio',
    label: t('member.pointsConfig.birthdayRechargeRatio'),
    component: 'InputNumber',
  },
  {
    field: 'usuallyExchangeRatio',
    label: t('member.pointsConfig.usuallyExchangeRatio'),
    component: 'InputNumber',
  },
  {
    field: 'specialExchangeRatio',
    label: t('member.pointsConfig.specialExchangeRatio'),
    component: 'InputNumber',
  },
  {
    field: 'birthdayExchangeRatio',
    label: t('member.pointsConfig.birthdayExchangeRatio'),
    component: 'InputNumber',
  },
  {
    field: 'usuallyConsumeRatio',
    label: t('member.pointsConfig.usuallyConsumeRatio'),
    component: 'InputNumber',
  },
  {
    field: 'specialConsumeRatio',
    label: t('member.pointsConfig.specialConsumeRatio'),
    component: 'InputNumber',
  },
  {
    field: 'birthdayConsumeRatio',
    label: t('member.pointsConfig.birthdayConsumeRatio'),
    component: 'InputNumber',
  },
];
