import { BasicColumn, FormSchema } from '/@/components/Table';
import { checkName } from '/@/api/sys/dept';

export const columns: BasicColumn[] = [
  {
    title: '部门名称',
    dataIndex: 'name',
    fixed: 'left',
    width: 180,
  },
  {
    title: '上级部门',
    dataIndex: 'parentName',
    ellipsis: true,
  },
  {
    title: '联系人',
    dataIndex: 'contactUser',
    width: 120,
  },
  {
    title: '联系电话',
    dataIndex: 'telephone',
    width: 180,
  },
  {
    title: '排序',
    dataIndex: 'sort',
    width: 80,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    ellipsis: true,
  },
  {
    title: '修改时间',
    dataIndex: 'updateTime',
    ellipsis: true,
  },
  {
    title: '备注',
    dataIndex: 'remarks',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '部门名称',
    component: 'Input',
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
    field: 'name',
    label: '部门名称',
    component: 'Input',
    dynamicRules: ({ values }) => [
      { required: true, message: '部门名称不能为空', whitespace: true },
      { min: 1, max: 50, message: '部门名称长度1-50' },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            if (!(value && value.trim())) {
              resolve();
              return;
            }
            checkName(values.id === undefined ? null : values.id, value)
              .then((data) => {
                data ? resolve() : reject('部门名称已存在');
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
    field: 'parentId',
    label: '上级部门',
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
    field: 'contactUser',
    label: '联系人',
    component: 'Input',
  },
  {
    field: 'telephone',
    label: '联系电话',
    component: 'Input',
  },
  {
    field: 'sort',
    label: '排序',
    component: 'InputNumber',
    required: true,
  },
  {
    label: '备注',
    field: 'remarks',
    component: 'InputTextArea',
  },
];
