import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetAllRoleList = '/system/role/query',
  GetRoleList = '/system/role/query',
  GetRoleById = '/system/role/query/',
  SaveRole = '/system/role/save',
  UpdateRole = '/system/role/update',
  DeleteRole = '/system/role/delete',
  CheckCode = '/system/role/code/check',
  CheckName = '/system/role/name/check',
  Assign = '/system/role/assign',
}

export function getAllRoleList() {
  return defHttp.get({ url: Api.GetAllRoleList }, { errorMessageMode: 'message' });
}

export function getRoleList(params) {
  return defHttp.post({ url: Api.GetRoleList, params }, { errorMessageMode: 'message' });
}

export function getRoleById(id) {
  return defHttp.get({ url: Api.GetRoleById + id }, { errorMessageMode: 'message' });
}

export function saveRole(params) {
  return defHttp.post({ url: Api.SaveRole, params }, { errorMessageMode: 'message' });
}

export function updateRole(params) {
  return defHttp.post({ url: Api.UpdateRole, params }, { errorMessageMode: 'message' });
}

export function deleteRole(id) {
  return defHttp.delete(
    {
      url: Api.DeleteRole,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}

export function checkCode(id, code) {
  return defHttp.post(
    {
      url: Api.CheckCode,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id, code },
    },
    { errorMessageMode: 'message' },
  );
}

export function checkName(id, name) {
  return defHttp.post(
    {
      url: Api.CheckName,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id, name },
    },
    { errorMessageMode: 'message' },
  );
}

export function assign(params) {
  return defHttp.post({ url: Api.Assign, params }, { errorMessageMode: 'message' });
}
