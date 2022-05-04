import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('member.pointsConfig.usuallyRechargeRatio'),
    dataIndex: 'usuallyRechargeRatio',
    width: 200,
  },
  {
    title: t('member.pointsConfig.specialRechargeRatio'),
    dataIndex: 'specialRechargeRatio',
    width: 200,
  },
  {
    title: t('member.pointsConfig.birthdayRechargeRatio'),
    dataIndex: 'birthdayRechargeRatio',
    width: 220,
  },
  {
    title: t('member.pointsConfig.usuallyExchangeRatio'),
    dataIndex: 'usuallyExchangeRatio',
    width: 200,
  },
  {
    title: t('member.pointsConfig.specialExchangeRatio'),
    dataIndex: 'specialExchangeRatio',
    width: 200,
  },
  {
    title: t('member.pointsConfig.birthdayExchangeRatio'),
    dataIndex: 'birthdayExchangeRatio',
    width: 200,
  },
  {
    title: t('member.pointsConfig.usuallyConsumeRatio'),
    dataIndex: 'usuallyConsumeRatio',
    width: 230,
  },
  {
    title: t('member.pointsConfig.specialConsumeRatio'),
    dataIndex: 'specialConsumeRatio',
    width: 230,
  },
  {
    title: t('member.pointsConfig.birthdayConsumeRatio'),
    dataIndex: 'birthdayConsumeRatio',
    width: 230,
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
