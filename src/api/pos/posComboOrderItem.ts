import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetPosComboOrderItemList = '/pos/combo-order-item/query',
  SavePosComboOrderItem = '/pos/combo-order-item/save',
  UpdatePosComboOrderItem = '/pos/combo-order-item/update',
  DeletePosComboOrderItem = '/pos/combo-order-item/delete',
}

export function getPosComboOrderItemList(params) {
  return defHttp.post(
    { url: Api.GetPosComboOrderItemList, params },
    { errorMessageMode: 'message' },
  );
}

export function savePosComboOrderItem(params) {
  return defHttp.post({ url: Api.SavePosComboOrderItem, params }, { errorMessageMode: 'message' });
}

export function updatePosComboOrderItem(params) {
  return defHttp.post(
    { url: Api.UpdatePosComboOrderItem, params },
    { errorMessageMode: 'message' },
  );
}

export function deletePosComboOrderItem(id) {
  return defHttp.delete(
    {
      url: Api.DeletePosComboOrderItem,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
