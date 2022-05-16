import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetDeptTree = '/sys/dept/tree',
  GetDeptList = '/sys/dept/query',
  SaveDept = '/sys/dept/save',
  UpdateDept = '/sys/dept/update',
  DeleteDept = '/sys/dept/delete',
  CheckName = '/sys/dept/name/check',
}

export function getDeptTree(parentId = 0) {
  return defHttp.post(
    {
      url: Api.GetDeptTree,
      params: { parentId },
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
    },
    { errorMessageMode: 'message' },
  );
}

export function getDeptList(params) {
  return defHttp.post({ url: Api.GetDeptList, params }, { errorMessageMode: 'message' });
}
export function saveDept(params) {
  return defHttp.post({ url: Api.SaveDept, params }, { errorMessageMode: 'message' });
}

export function updateDept(params) {
  return defHttp.post({ url: Api.UpdateDept, params }, { errorMessageMode: 'message' });
}

export function deleteDept(id) {
  return defHttp.delete(
    {
      url: Api.DeleteDept,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
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
