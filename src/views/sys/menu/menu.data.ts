import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import Icon from '@/components/Icon/Icon.vue';
import { useI18n } from '/@/hooks/web/useI18n';
import { StatusEnum } from '/@/enums/commonEnum';
import { ResourceScopeEnum, ResourceTargetEnum, ResourceTypeEnum } from '/@/enums/menuEnum';
import {
  resourceScopeDict,
  resourceTargetDict,
  resourceTypeDict,
  resourceTypeDictMap,
  statusDict,
} from '/@/api/sys/dict';

const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('sys.menu.name'),
    dataIndex: 'name',
    width: 200,
    align: 'left',
    customRender: ({ record }) => {
      return record.icon
        ? h('span', {}, [h(Icon, { icon: record.icon }), ' ' + record.name])
        : record.name;
    },
  },
  {
    title: t('sys.menu.routePath'),
    dataIndex: 'routePath',
    width: 180,
  },
  {
    title: t('sys.menu.type'),
    dataIndex: 'type',
    width: 100,
    customRender: ({ record }) => {
      const text = record.type;
      let color;
      switch (text) {
        case ResourceTypeEnum.DIRECTORY:
          color = 'blue';
          break;
        case ResourceTypeEnum.MENU:
          color = 'cyan';
          break;
        default:
          color = 'green';
          break;
      }
      return h(Tag, { color: color }, () => resourceTypeDictMap.get(text));
    },
  },
  {
    title: t('sys.menu.sort'),
    dataIndex: 'sort',
    width: 100,
  },
  {
    title: t('sys.menu.permission'),
    dataIndex: 'permission',
    width: 180,
  },
  {
    title: t('common.status'),
    dataIndex: 'status',
    width: 100,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = status === StatusEnum.NORMAL;
      const color = enable ? 'green' : 'red';
      const text = enable ? t('common.enable') : t('common.disable');
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: t('common.createTime'),
    dataIndex: 'createTime',
    ellipsis: true,
  },
  {
    title: t('common.updateTime'),
    dataIndex: 'updateTime',
    ellipsis: true,
  },
];

const isDir = (type: string) => type === ResourceTypeEnum.DIRECTORY;
const isMenu = (type: string) => type === ResourceTypeEnum.MENU;
const isButton = (type: string) => type === ResourceTypeEnum.BUTTON;

export const searchFormSchema: FormSchema[] = [];

export const formSchema: FormSchema[] = [
  {
    field: 'type',
    label: t('sys.menu.type'),
    component: 'RadioButtonGroup',
    required: true,
    defaultValue: ResourceTypeEnum.DIRECTORY,
    componentProps: {
      options: resourceTypeDict,
    },
  },
  {
    field: 'scope',
    label: t('sys.menu.scope'),
    component: 'RadioButtonGroup',
    defaultValue: ResourceScopeEnum.ADMIN,
    required: true,
    componentProps: {
      options: resourceScopeDict,
      mode: 'multiple',
    },
  },
  {
    field: 'name',
    label: t('sys.menu.name'),
    component: 'Input',
    required: true,
  },

  {
    field: 'parentId',
    label: t('sys.menu.parent'),
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'icon',
    label: t('sys.menu.icon'),
    component: 'IconPicker',
    required: true,
    ifShow: ({ values }) => !isButton(values.type),
  },
  {
    field: 'routePath',
    label: t('sys.menu.routePath'),
    component: 'Input',
    required: true,
    ifShow: ({ values }) => isMenu(values.type),
  },
  {
    field: 'target',
    label: t('sys.menu.target'),
    component: 'RadioButtonGroup',
    required: true,
    defaultValue: ResourceTargetEnum.MAIN,
    componentProps: {
      options: resourceTargetDict,
    },
    ifShow: ({ values }) => isMenu(values.type),
  },
  {
    field: 'apiUrl',
    label: '接口地址',
    component: 'Input',
    required: ({ values }) => isButton(values.type),
    ifShow: ({ values }) => !isDir(values.type),
  },
  {
    field: 'permission',
    label: t('sys.menu.permission'),
    component: 'Input',
  },
  {
    field: 'sort',
    label: t('sys.menu.sort'),
    component: 'InputNumber',
    required: true,
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
    componentProps: {
      rows: 3,
    },
    required: false,
  },
];
