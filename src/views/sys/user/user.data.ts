import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { statusDict, unlockTypeDict } from '/@/api/sys/dict';
import { getAllRoleList } from '/@/api/sys/role';

import { UnlockTypeEnum } from '/@/enums/userEnum';
import { checkMobile, checkUsername } from '/@/api/sys/user';
import { StatusEnum } from '/@/enums/commonEnum';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('sys.user.username'),
    dataIndex: 'username',
    width: 120,
  },
  {
    title: t('sys.user.avatar'),
    dataIndex: 'avatarUrl',
    width: 120,
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
  {
    title: t('sys.user.googleSecret'),
    dataIndex: 'googleBind',
    width: 200,
  },
  {
    title: t('common.status'),
    dataIndex: 'status',
  },
  {
    title: t('common.createTime'),
    dataIndex: 'createTime',
  },
  {
    title: t('common.updateTime'),
    dataIndex: 'updateTime',
  },
];

export const searchFormSchema: FormSchema[] = [
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

export const drawerFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'id',
    component: 'Input',
    ifShow: false,
  },
  {
    field: 'avatar',
    label: t('sys.user.avatar'),
    component: 'FileUpload',
    componentProps: {
      accept: 'image/*',
      listType: 'picture-card',
    },
  },
  {
    field: 'username',
    label: t('sys.user.username'),
    component: 'Input',
    dynamicRules: ({ values }) => [
      { required: true, message: '用户名不能为空', whitespace: true },
      { min: 1, max: 50, message: '用户名长度1-50' },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            if (!(value && value.trim())) {
              resolve();
              return;
            }
            checkUsername(values.id === undefined ? null : values.id, value)
              .then((data) => {
                data ? resolve() : reject('用户名已存在');
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
    label: t('sys.user.name'),
    required: true,
    component: 'Input',
  },
  {
    field: 'mobile',
    label: t('sys.user.mobile'),
    required: true,
    component: 'Input',
    dynamicRules: ({ values }) => [
      { required: true, message: '手机号不能为空', whitespace: true },
      { len: 11, message: '手机号长度为11位' },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            if (!(value && value.trim())) {
              resolve();
              return;
            }
            checkMobile(values.id === undefined ? null : values.id, value)
              .then((data) => {
                data ? resolve() : reject('手机号已存在');
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
    field: 'email',
    label: t('sys.user.email'),
    required: true,
    component: 'Input',
  },
  {
    field: 'password',
    label: t('sys.user.password'),
    component: 'StrengthMeter',
  },
  {
    field: 'confirmPassword',
    label: t('sys.user.confirmPassword'),
    component: 'InputPassword',
  },
  {
    field: 'roleIds',
    label: t('sys.user.role'),
    component: 'ApiSelect',
    componentProps: {
      showSearch: true,
      optionFilterProp: 'label',
      api: getAllRoleList,
      labelField: 'name',
      valueField: 'id',
      mode: 'multiple',
      alwaysLoad: true,
    },
  },
  {
    field: 'deptId',
    label: t('sys.user.deptName'),
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'title',
        key: 'key',
        value: 'key',
      },
      getPopupContainer: () => document.body,
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
    field: 'remarks',
    label: t('common.remarks'),
    component: 'InputTextArea',
  },
];

const isUsernameType = (type: string) => type === UnlockTypeEnum.USERNAME;

export const unlockModalFormSchemas: FormSchema[] = [
  {
    field: 'type',
    label: t('sys.user.unlockMethod'),
    component: 'RadioButtonGroup',
    defaultValue: UnlockTypeEnum.USERNAME,
    required: true,
    componentProps: {
      options: unlockTypeDict,
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'lockKey',
    label: t('sys.user.username'),
    component: 'Input',
    required: true,
    ifShow: ({ values }) => isUsernameType(values.type),
  },
  {
    field: 'lockKey',
    label: t('sys.user.ip'),
    component: 'Input',
    required: true,
    ifShow: ({ values }) => !isUsernameType(values.type),
  },
];
