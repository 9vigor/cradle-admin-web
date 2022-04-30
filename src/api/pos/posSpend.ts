import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetPosSpendList = '/pos/spend/query',
  SavePosSpend = '/pos/spend/save',
  UpdatePosSpend = '/pos/spend/update',
  DeletePosSpend = '/pos/spend/delete',
}

export function getPosSpendList(params) {
  return defHttp.post({ url: Api.GetPosSpendList, params }, { errorMessageMode: 'message' });
}

export function savePosSpend(params) {
  return defHttp.post({ url: Api.SavePosSpend, params }, { errorMessageMode: 'message' });
}

export function updatePosSpend(params) {
  return defHttp.post({ url: Api.UpdatePosSpend, params }, { errorMessageMode: 'message' });
}

export function deletePosSpend(id) {
  return defHttp.delete(
    {
      url: Api.DeletePosSpend,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
