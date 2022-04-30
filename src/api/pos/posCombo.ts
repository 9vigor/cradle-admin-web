import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetPosComboList = '/pos/combo/query',
  SavePosCombo = '/pos/combo/save',
  UpdatePosCombo = '/pos/combo/update',
  DeletePosCombo = '/pos/combo/delete',
}

export function getPosComboList(params) {
  return defHttp.post({ url: Api.GetPosComboList, params }, { errorMessageMode: 'message' });
}

export function savePosCombo(params) {
  return defHttp.post({ url: Api.SavePosCombo, params }, { errorMessageMode: 'message' });
}

export function updatePosCombo(params) {
  return defHttp.post({ url: Api.UpdatePosCombo, params }, { errorMessageMode: 'message' });
}

export function deletePosCombo(id) {
  return defHttp.delete(
    {
      url: Api.DeletePosCombo,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
