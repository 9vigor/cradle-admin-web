import { BasicPageParams } from '/@/api/model/baseModel';

export type CodegenSearchParams = BasicPageParams & {
  tableName: string;
};
