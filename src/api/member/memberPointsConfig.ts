import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetMemberPointsConfigList = '/member/points-config/query',
  SaveMemberPointsConfig = '/member/points-config/save',
  UpdateMemberPointsConfig = '/member/points-config/update',
  DeleteMemberPointsConfig = '/member/points-config/delete',
}

export function getMemberPointsConfigList(params) {
  return defHttp.post(
    { url: Api.GetMemberPointsConfigList, params },
    { errorMessageMode: 'message' },
  );
}

export function saveMemberPointsConfig(params) {
  return defHttp.post({ url: Api.SaveMemberPointsConfig, params }, { errorMessageMode: 'message' });
}

export function updateMemberPointsConfig(params) {
  return defHttp.post(
    { url: Api.UpdateMemberPointsConfig, params },
    { errorMessageMode: 'message' },
  );
}

export function deleteMemberPointsConfig(id) {
  return defHttp.delete(
    {
      url: Api.DeleteMemberPointsConfig,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
