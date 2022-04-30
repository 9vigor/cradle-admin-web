import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetTenantList = '/system/tenant/query',
  SaveTenant = '/system/tenant/save',
  UpdateTenant = '/system/tenant/update',
  DeleteTenant = '/system/tenant/delete',
  GetLocaleList = '/system/tenant/locale/list',
}

export function getTenantList(params) {
  return defHttp.post({ url: Api.GetTenantList, params }, { errorMessageMode: 'message' });
}

export function saveTenant(params) {
  return defHttp.post({ url: Api.SaveTenant, params }, { errorMessageMode: 'message' });
}

export function updateTenant(params) {
  return defHttp.post({ url: Api.UpdateTenant, params }, { errorMessageMode: 'message' });
}

export function deleteTenant(id) {
  return defHttp.delete(
    {
      url: Api.DeleteTenant,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}

export function getLocaleList() {
  return defHttp.get({ url: Api.GetLocaleList }, { errorMessageMode: 'message' });
}
