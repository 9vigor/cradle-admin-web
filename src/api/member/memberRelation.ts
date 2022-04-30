import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetMemberRelationList = '/member/relation/query',
  SaveMemberRelation = '/member/relation/save',
  UpdateMemberRelation = '/member/relation/update',
  DeleteMemberRelation = '/member/relation/delete',
}

export function getMemberRelationList(params) {
  return defHttp.post({ url: Api.GetMemberRelationList, params }, { errorMessageMode: 'message' });
}

export function saveMemberRelation(params) {
  return defHttp.post({ url: Api.SaveMemberRelation, params }, { errorMessageMode: 'message' });
}

export function updateMemberRelation(params) {
  return defHttp.post({ url: Api.UpdateMemberRelation, params }, { errorMessageMode: 'message' });
}

export function deleteMemberRelation(id) {
  return defHttp.delete(
    {
      url: Api.DeleteMemberRelation,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
