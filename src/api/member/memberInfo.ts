import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetMemberInfoList = '/member/info/query',
  SaveMemberInfo = '/member/info/save',
  UpdateMemberInfo = '/member/info/update',
  DeleteMemberInfo = '/member/info/delete',
}

export function getMemberInfoList(params) {
  return defHttp.post({ url: Api.GetMemberInfoList, params }, { errorMessageMode: 'message' });
}

export function saveMemberInfo(params) {
  return defHttp.post({ url: Api.SaveMemberInfo, params }, { errorMessageMode: 'message' });
}

export function updateMemberInfo(params) {
  return defHttp.post({ url: Api.UpdateMemberInfo, params }, { errorMessageMode: 'message' });
}

export function deleteMemberInfo(id) {
  return defHttp.delete(
    {
      url: Api.DeleteMemberInfo,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
