import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetTenantList = '/sys/tenant/query',
  SaveTenant = '/sys/tenant/save',
  UpdateTenant = '/sys/tenant/update',
  DeleteTenant = '/sys/tenant/delete',
  GetLocaleList = '/sys/tenant/locale/list',
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
