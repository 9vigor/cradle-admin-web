import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { loginResultsDict, loginResultsDictMap } from '/@/api/sys/dict';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import dayjs from 'dayjs';
import { LoginResultEnum } from '/@/enums/userEnum';

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'userName',
    ellipsis: true,
  },
  {
    title: '登录结果',
    dataIndex: 'result',
    ellipsis: true,
    customRender: ({ record }) => {
      const result = record.result;
      const success = result === LoginResultEnum.SUCCESS;
      const color = success ? 'success' : 'error';
      const text = loginResultsDictMap.get(result);
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '登录时间',
    dataIndex: 'loginTime',
    ellipsis: true,
  },
  {
    title: 'IP地址',
    dataIndex: 'ip',
    ellipsis: true,
  },
  {
    title: '地区',
    dataIndex: 'area',
    ellipsis: true,
  },
  {
    title: '用户代理',
    dataIndex: 'userAgent',
    ellipsis: true,
  },
  {
    title: '设备名称',
    dataIndex: 'deviceName',
    ellipsis: true,
  },
  {
    title: '浏览器名称',
    dataIndex: 'browserName',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'loginTimeRange',
    label: '登录时间',
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
    field: 'userName',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'result',
    label: '登录结果',
    component: 'Select',
    componentProps: {
      options: loginResultsDict,
    },
    colProps: { span: 8 },
  },
  {
    field: 'ip',
    label: 'IP地址',
    component: 'Input',
    colProps: { span: 8 },
  },
];
