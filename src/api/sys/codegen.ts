import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';
import { CodegenSearchParams } from '/@/api/sys/model/codegenModel';

enum Api {
  GetCodegenList = '/codegen/query',
  GetTableList = '/codegen/tables',
  GetDefaultCase = '/codegen/query',
  GetCustomCase = '/codegen/query/',
  CodeGenerate = '/codegen/generate',
  SaveCodegen = '/codegen/save',
  UpdateCodegen = '/codegen/update/',
  DeleteCodegen = '/codegen/delete',
}

/**
 * @description: getCodegenList
 */
export function getCodegenList(params: CodegenSearchParams) {
  return defHttp.post({ url: Api.GetCodegenList, params }, { errorMessageMode: 'message' });
}

/**
 * @description: getTableList
 */
export function getTableList() {
  return defHttp.get({ url: Api.GetTableList }, { errorMessageMode: 'message' });
}

/**
 * @description: getDefaultCase
 */
export function getDefaultCase(tableName: string) {
  return defHttp.get(
    {
      url: Api.GetDefaultCase,
      //headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { tableName },
    },
    { errorMessageMode: 'message' },
  );
}

/**
 * @description: getCustomCase
 */
export function getCustomCase(id: number) {
  return defHttp.get(
    {
      url: Api.GetCustomCase + id,
    },
    { errorMessageMode: 'message' },
  );
}

/**
 * @description: codeGenerate
 */
export function codeGenerate(ids) {
  return defHttp.post(
    {
      url: Api.CodeGenerate,
      params: ids,
      responseType: 'blob',
    },
    { errorMessageMode: 'message', isReturnNativeResponse: true },
  );
}

/**
 * @description: saveCodegen
 */
export function saveCodegen(params: any) {
  return defHttp.post(
    {
      url: Api.SaveCodegen,
      params,
    },
    { errorMessageMode: 'message' },
  );
}

/**
 * @description: updateCodegen
 */
export function updateCodegen(id, params) {
  return defHttp.post(
    {
      url: Api.UpdateCodegen + id,
      params,
    },
    { errorMessageMode: 'message' },
  );
}

/**
 * @description: deleteCodegen
 */
export function deleteCodegen(id: number) {
  return defHttp.delete(
    {
      url: Api.DeleteCodegen,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
