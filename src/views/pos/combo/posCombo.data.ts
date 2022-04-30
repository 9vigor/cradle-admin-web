import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { statusDictMap } from '/@/api/sys/dict';
const { t } = useI18n();
export const columns: BasicColumn[] = [
  {
    title: t('pos.combo.comboName'),
    dataIndex: 'comboName',
    ellipsis: true,
  },
  {
    title: t('pos.combo.comboImage'),
    dataIndex: 'comboImage',
    ellipsis: true,
  },
  {
    title: t('pos.combo.comboDescription'),
    dataIndex: 'comboDescription',
    ellipsis: true,
  },
  {
    title: t('pos.combo.comboPrice'),
    dataIndex: 'comboPrice',
    ellipsis: true,
    sorter: true,
  },
  {
    title: t('pos.combo.createTime'),
    dataIndex: 'createTime',
    ellipsis: true,
  },
  {
    title: t('pos.combo.updateTime'),
    dataIndex: 'updateTime',
    ellipsis: true,
  },
  {
    title: t('pos.combo.createBy'),
    dataIndex: 'createBy',
    ellipsis: true,
  },
  {
    title: t('pos.combo.updateBy'),
    dataIndex: 'updateBy',
    ellipsis: true,
  },
  {
    title: t('pos.combo.status'),
    dataIndex: 'status',
    ellipsis: true,
    customRender: ({ record }) => {
      const text = record.status;
      return statusDictMap.get(text);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'comboName',
    label: t('pos.combo.comboName'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: t('pos.combo.status'),
    component: 'Select',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'comboName',
    label: t('pos.combo.comboName'),
    component: 'Input',
  },
  {
    field: 'comboImage',
    label: t('pos.combo.comboImage'),
    component: 'Input',
  },
  {
    field: 'comboDescription',
    label: t('pos.combo.comboDescription'),
    component: 'Input',
  },
  {
    field: 'comboPrice',
    label: t('pos.combo.comboPrice'),
    component: 'InputNumber',
  },
];
