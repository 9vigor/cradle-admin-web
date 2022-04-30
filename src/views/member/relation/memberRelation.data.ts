import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('member.relation.ancestorId'),
    dataIndex: 'ancestorId',
    ellipsis: true,
  },
  {
    title: t('member.relation.ancestorUsername'),
    dataIndex: 'ancestorUsername',
    ellipsis: true,
  },
  {
    title: t('member.relation.ancestorMobile'),
    dataIndex: 'ancestorMobile',
    ellipsis: true,
  },
  {
    title: t('member.relation.descendantId'),
    dataIndex: 'descendantId',
    ellipsis: true,
  },
  {
    title: t('member.relation.descendantUsername'),
    dataIndex: 'descendantUsername',
    ellipsis: true,
  },
  {
    title: t('member.relation.descendantMobile'),
    dataIndex: 'descendantMobile',
    ellipsis: true,
  },
  {
    title: t('member.relation.depth'),
    dataIndex: 'depth',
    ellipsis: true,
  },
  {
    title: t('member.relation.createTime'),
    dataIndex: 'createTime',
    ellipsis: true,
  },
  {
    title: t('member.relation.updateTime'),
    dataIndex: 'updateTime',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'ancestorId',
    label: t('member.relation.ancestorId'),
    component: 'InputNumber',
    colProps: { span: 8 },
  },
  {
    field: 'ancestorUsername',
    label: t('member.relation.ancestorUsername'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'ancestorMobile',
    label: t('member.relation.ancestorMobile'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'descendantId',
    label: t('member.relation.descendantId'),
    component: 'InputNumber',
    colProps: { span: 8 },
  },
  {
    field: 'descendantUsername',
    label: t('member.relation.descendantUsername'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'descendantMobile',
    label: t('member.relation.descendantMobile'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'depth',
    label: t('member.relation.depth'),
    component: 'InputNumber',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'ancestorId',
    label: t('member.relation.ancestorId'),
    component: 'InputNumber',
  },
  {
    field: 'ancestorUsername',
    label: t('member.relation.ancestorUsername'),
    component: 'Input',
  },
  {
    field: 'ancestorMobile',
    label: t('member.relation.ancestorMobile'),
    component: 'Input',
  },
  {
    field: 'descendantId',
    label: t('member.relation.descendantId'),
    component: 'InputNumber',
  },
  {
    field: 'descendantUsername',
    label: t('member.relation.descendantUsername'),
    component: 'Input',
  },
  {
    field: 'descendantMobile',
    label: t('member.relation.descendantMobile'),
    component: 'Input',
  },
  {
    field: 'depth',
    label: t('member.relation.depth'),
    component: 'InputNumber',
  },
];
