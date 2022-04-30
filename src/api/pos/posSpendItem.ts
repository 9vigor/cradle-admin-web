import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetPosSpendItemList = '/pos/spend-item/query',
  SavePosSpendItem = '/pos/spend-item/save',
  UpdatePosSpendItem = '/pos/spend-item/update',
  DeletePosSpendItem = '/pos/spend-item/delete',
}

export function getPosSpendItemList(params) {
  return defHttp.post({ url: Api.GetPosSpendItemList, params }, { errorMessageMode: 'message' });
}

export function savePosSpendItem(params) {
  return defHttp.post({ url: Api.SavePosSpendItem, params }, { errorMessageMode: 'message' });
}

export function updatePosSpendItem(params) {
  return defHttp.post({ url: Api.UpdatePosSpendItem, params }, { errorMessageMode: 'message' });
}

export function deletePosSpendItem(id) {
  return defHttp.delete(
    {
      url: Api.DeletePosSpendItem,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
