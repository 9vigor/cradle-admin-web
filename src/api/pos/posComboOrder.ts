import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetPosComboOrderList = '/pos/combo-order/query',
  SavePosComboOrder = '/pos/combo-order/save',
  UpdatePosComboOrder = '/pos/combo-order/update',
  DeletePosComboOrder = '/pos/combo-order/delete',
}

export function getPosComboOrderList(params) {
  return defHttp.post({ url: Api.GetPosComboOrderList, params }, { errorMessageMode: 'message' });
}

export function savePosComboOrder(params) {
  return defHttp.post({ url: Api.SavePosComboOrder, params }, { errorMessageMode: 'message' });
}

export function updatePosComboOrder(params) {
  return defHttp.post({ url: Api.UpdatePosComboOrder, params }, { errorMessageMode: 'message' });
}

export function deletePosComboOrder(id) {
  return defHttp.delete(
    {
      url: Api.DeletePosComboOrder,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
