import { FormSchema } from '/@/components/Form';
import { useI18n } from '/@/hooks/web/useI18n';
import { checkMobile } from '/@/api/sys/user';

const { t } = useI18n();

export const userInfoFormSchema: FormSchema[] = [
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
];

export const changePasswordFormSchema: FormSchema[] = [
  {
    field: 'oldPassword',
    label: t('sys.user.oldPassword'),
    component: 'InputPassword',
    required: true,
  },
  {
    field: 'newPassword',
    label: t('sys.user.newPassword'),
    component: 'StrengthMeter',
  },
  {
    field: 'confirmPassword',
    label: t('sys.user.confirmPassword'),
    component: 'InputPassword',
  },
];
