import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import {
  moduleDict,
  moduleDictMap,
  businessStatusDict,
  businessStatusDictMap,
  businessTypeDict,
  businessTypeDictMap,
} from '/@/api/sys/dict';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { BusinessStatusEnum, BusinessTypeEnum } from '/@/enums/userEnum';
import dayjs from 'dayjs';

export const columns: BasicColumn[] = [
  {
    title: '追踪ID',
    dataIndex: 'traceId',
    ellipsis: true,
  },
  {
    title: '系统模块',
    dataIndex: 'module',
    ellipsis: true,
    customRender: ({ text }) => {
      return h(Tag, { color: 'blue' }, () => moduleDictMap.get(text));
    },
  },
  {
    title: '操作类型',
    dataIndex: 'businessType',
    ellipsis: true,
    customRender: ({ record }) => {
      const businessType = record.businessType;
      const warning =
        businessType ===
        (BusinessTypeEnum.DELETE ||
          BusinessTypeEnum.UNLOCK ||
          BusinessTypeEnum.CLOSE_GOOGLE_VERIFY);
      const color = warning ? 'warning' : 'success';
      const text = businessTypeDictMap.get(businessType);
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '操作状态',
    dataIndex: 'businessStatus',
    ellipsis: true,
    customRender: ({ record }) => {
      const businessStatus = record.businessStatus;
      const success = businessStatus === BusinessStatusEnum.SUCCESS;
      const color = success ? 'success' : 'error';
      const text = businessStatusDictMap.get(businessStatus);
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '操作人员',
    dataIndex: 'createBy',
    ellipsis: true,
  },
  {
    title: '所属部门',
    dataIndex: 'depName',
    ellipsis: true,
  },
  {
    title: '操作IP',
    dataIndex: 'host',
    ellipsis: true,
  },
  {
    title: '操作地点',
    dataIndex: 'location',
    ellipsis: true,
  },
  {
    title: '操作时间',
    dataIndex: 'createTime',
    ellipsis: true,
    sorter: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'timeRange',
    label: '操作时间',
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
    label: '操作人员',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'module',
    label: '系统模块',
    component: 'Select',
    componentProps: {
      options: moduleDict,
    },
    colProps: { span: 8 },
  },
  {
    field: 'typeArray',
    label: '操作类型',
    component: 'Select',
    componentProps: {
      mode: 'multiple',
      options: businessTypeDict,
    },
    colProps: { span: 8 },
  },
  {
    field: 'businessStatus',
    label: '操作状态',
    component: 'Select',
    componentProps: {
      options: businessStatusDict,
    },
    colProps: { span: 8 },
  },
];
