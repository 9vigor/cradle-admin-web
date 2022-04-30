import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetMemberWalletList = '/member/wallet/query',
  SaveMemberWallet = '/member/wallet/save',
  UpdateMemberWallet = '/member/wallet/update',
  DeleteMemberWallet = '/member/wallet/delete',
}

export function getMemberWalletList(params) {
  return defHttp.post({ url: Api.GetMemberWalletList, params }, { errorMessageMode: 'message' });
}

export function saveMemberWallet(params) {
  return defHttp.post({ url: Api.SaveMemberWallet, params }, { errorMessageMode: 'message' });
}

export function updateMemberWallet(params) {
  return defHttp.post({ url: Api.UpdateMemberWallet, params }, { errorMessageMode: 'message' });
}

export function deleteMemberWallet(id) {
  return defHttp.delete(
    {
      url: Api.DeleteMemberWallet,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
