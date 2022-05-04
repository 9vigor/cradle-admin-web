import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

import { StatusEnum } from '/@/enums/commonEnum';
import { useI18n } from '/@/hooks/web/useI18n';
import { dataScopeDict, dataScopeDictMap, statusDict } from '/@/api/sys/dict';
import { checkCode, checkName } from '/@/api/sys/role';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: '编码',
    dataIndex: 'code',
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '数据范围',
    dataIndex: 'dataScope',
    customRender: ({ text }) => {
      return dataScopeDictMap.get(text);
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    customRender: ({ record }) => {
      const status = record.status;
      const enable = status === StatusEnum.NORMAL;
      const color = enable ? 'green' : 'red';
      const text = enable ? t('common.enable') : t('common.disable');
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '修改时间',
    dataIndex: 'updateTime',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'code',
    label: '编码',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'dataScope',
    label: '数据范围',
    component: 'Select',
    componentProps: {
      options: dataScopeDict,
    },
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: t('common.status'),
    component: 'Select',
    componentProps: {
      options: statusDict,
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'id',
    component: 'Input',
    ifShow: false,
  },
  {
    field: 'code',
    label: '编码',
    component: 'Input',
    dynamicRules: ({ values }) => [
      { required: true, message: '编码不能为空', whitespace: true },
      { min: 1, max: 50, message: '编码长度1-50' },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            if (!(value && value.trim())) {
              resolve();
              return;
            }
            checkCode(values.id === undefined ? null : values.id, value)
              .then((data) => {
                data ? resolve() : reject('编码已存在');
              })
              .catch((err) => {
                reject(err.message || '验证失败');
              });
          });
        },
        trigger: 'blur',
      },
    ],
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    dynamicRules: ({ values }) => [
      { required: true, message: '名称不能为空', whitespace: true },
      { min: 1, max: 50, message: '名称长度1-50' },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            if (!(value && value.trim())) {
              resolve();
              return;
            }
            checkName(values.id === undefined ? null : values.id, value)
              .then((data) => {
                data ? resolve() : reject('名称已存在');
              })
              .catch((err) => {
                reject(err.message || '验证失败');
              });
          });
        },
        trigger: 'blur',
      },
    ],
  },
  {
    field: 'dataScope',
    label: '数据范围',
    component: 'Select',
    required: true,
    componentProps: {
      options: dataScopeDict,
    },
  },
  {
    field: 'status',
    label: t('common.status'),
    component: 'RadioButtonGroup',
    required: true,
    defaultValue: StatusEnum.NORMAL,
    componentProps: {
      options: statusDict,
    },
  },
  {
    label: '分配菜单',
    field: 'menuIds',
    slot: 'menu',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remarks',
    component: 'InputTextArea',
  },
];

export const userSearchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: t('sys.user.username'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'name',
    label: t('sys.user.name'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'mobile',
    label: t('sys.user.mobile'),
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const userTableColumns: BasicColumn[] = [
  {
    title: t('sys.user.username'),
    dataIndex: 'username',
    width: 120,
  },
  {
    title: t('sys.user.avatar'),
    dataIndex: 'avatarUrl',
    width: 120,
    slots: { customRender: 'avatarUrl' },
  },
  {
    title: t('sys.user.name'),
    dataIndex: 'name',
    width: 120,
  },
  {
    title: t('sys.user.deptName'),
    dataIndex: 'deptName',
    width: 180,
  },
];
