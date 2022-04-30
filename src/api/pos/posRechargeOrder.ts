import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetPosRechargeOrderList = '/pos/recharge-order/query',
  SavePosRechargeOrder = '/pos/recharge-order/save',
  UpdatePosRechargeOrder = '/pos/recharge-order/update',
  DeletePosRechargeOrder = '/pos/recharge-order/delete',
}

export function getPosRechargeOrderList(params) {
  return defHttp.post(
    { url: Api.GetPosRechargeOrderList, params },
    { errorMessageMode: 'message' },
  );
}

export function savePosRechargeOrder(params) {
  return defHttp.post({ url: Api.SavePosRechargeOrder, params }, { errorMessageMode: 'message' });
}

export function updatePosRechargeOrder(params) {
  return defHttp.post({ url: Api.UpdatePosRechargeOrder, params }, { errorMessageMode: 'message' });
}

export function deletePosRechargeOrder(id) {
  return defHttp.delete(
    {
      url: Api.DeletePosRechargeOrder,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
