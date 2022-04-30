import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetMemberFlowList = '/member/flow/query',
  SaveMemberFlow = '/member/flow/save',
  UpdateMemberFlow = '/member/flow/update',
  DeleteMemberFlow = '/member/flow/delete',
}

export function getMemberFlowList(params) {
  return defHttp.post({ url: Api.GetMemberFlowList, params }, { errorMessageMode: 'message' });
}

export function saveMemberFlow(params) {
  return defHttp.post({ url: Api.SaveMemberFlow, params }, { errorMessageMode: 'message' });
}

export function updateMemberFlow(params) {
  return defHttp.post({ url: Api.UpdateMemberFlow, params }, { errorMessageMode: 'message' });
}

export function deleteMemberFlow(id) {
  return defHttp.delete(
    {
      url: Api.DeleteMemberFlow,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
