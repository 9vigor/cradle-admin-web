import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import dayjs from 'dayjs';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('member.info.id'),
    dataIndex: 'id',
    ellipsis: true,
  },
  {
    title: t('member.info.username'),
    dataIndex: 'username',
    ellipsis: true,
  },
  {
    title: t('member.info.mobile'),
    dataIndex: 'mobile',
    ellipsis: true,
  },
  {
    title: t('member.info.nickName'),
    dataIndex: 'nickName',
    ellipsis: true,
  },
  {
    title: t('member.info.avatar'),
    dataIndex: 'avatar',
    ellipsis: true,
  },
  {
    title: t('member.info.gender'),
    dataIndex: 'gender',
    ellipsis: true,
  },
  {
    title: t('member.info.birthday'),
    dataIndex: 'birthday',
    ellipsis: true,
  },
  {
    title: t('member.info.level'),
    dataIndex: 'level',
    ellipsis: true,
  },
  {
    title: t('member.info.regInvitationCode'),
    dataIndex: 'regInvitationCode',
    ellipsis: true,
  },
  {
    title: t('member.info.parentId'),
    dataIndex: 'parentId',
    ellipsis: true,
  },
  {
    title: t('member.info.parentUsername'),
    dataIndex: 'parentUsername',
    ellipsis: true,
  },
  {
    title: t('member.info.parentMobile'),
    dataIndex: 'parentMobile',
    ellipsis: true,
  },
  {
    title: t('member.info.createTime'),
    dataIndex: 'createTime',
    ellipsis: true,
  },
  {
    title: t('member.info.updateTime'),
    dataIndex: 'updateTime',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: t('member.info.id'),
    component: 'InputNumber',
    colProps: { span: 8 },
  },
  {
    field: 'username',
    label: t('member.info.username'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'mobile',
    label: t('member.info.mobile'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'birthdayRange',
    label: t('member.info.birthday'),
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
  {
    field: 'parentId',
    label: t('member.info.parentId'),
    component: 'InputNumber',
    colProps: { span: 8 },
  },
  {
    field: 'parentUsername',
    label: t('member.info.parentUsername'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'parentMobile',
    label: t('member.info.parentMobile'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'createTimeRange',
    label: t('member.info.createTime'),
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
    label: t('member.info.username'),
    component: 'Input',
  },
  {
    field: 'mobile',
    label: t('member.info.mobile'),
    component: 'Input',
  },
  {
    field: 'nickName',
    label: t('member.info.nickName'),
    component: 'Input',
  },
  {
    field: 'avatar',
    label: t('member.info.avatar'),
    component: 'Input',
  },
  {
    field: 'gender',
    label: t('member.info.gender'),
    component: 'InputNumber',
  },
  {
    field: 'birthday',
    label: t('member.info.birthday'),
    component: 'DatePicker',
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
    },
  },
  {
    field: 'level',
    label: t('member.info.level'),
    component: 'InputNumber',
  },
  {
    field: 'password',
    label: t('member.info.password'),
    component: 'Input',
  },
  {
    field: 'regInvitationCode',
    label: t('member.info.regInvitationCode'),
    component: 'Input',
  },
  {
    field: 'parentId',
    label: t('member.info.parentId'),
    component: 'InputNumber',
  },
  {
    field: 'parentUsername',
    label: t('member.info.parentUsername'),
    component: 'Input',
  },
  {
    field: 'parentMobile',
    label: t('member.info.parentMobile'),
    component: 'Input',
  },
];
