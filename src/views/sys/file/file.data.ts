import { BasicColumn, FormSchema } from '/@/components/Table';
import dayjs from 'dayjs';

export const columns: BasicColumn[] = [
  {
    title: '文件名',
    dataIndex: 'name',
    ellipsis: true,
  },
  {
    title: '文件类型',
    dataIndex: 'contentType',
    ellipsis: true,
  },
  {
    title: '文件大小(Bytes)',
    dataIndex: 'fileSize',
    ellipsis: true,
  },
  {
    title: '上传时间',
    dataIndex: 'createTime',
    ellipsis: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '文件名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'createDateRange',
    label: '上传日期',
    component: 'RangePicker',
    defaultValue: [
      dayjs().startOf('month').format('YYYY-MM-DD'),
      dayjs().endOf('month').format('YYYY-MM-DD'),
    ],
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
      showTime: false,
    },
    colProps: { span: 8 },
  },
];
