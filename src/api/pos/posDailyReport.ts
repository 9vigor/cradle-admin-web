import { defHttp } from '/@/utils/http/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetPosDailyReportList = '/pos/daily-report/query',
  SavePosDailyReport = '/pos/daily-report/save',
  UpdatePosDailyReport = '/pos/daily-report/update',
  DeletePosDailyReport = '/pos/daily-report/delete',
}

export function getPosDailyReportList(params) {
  return defHttp.post({ url: Api.GetPosDailyReportList, params }, { errorMessageMode: 'message' });
}

export function savePosDailyReport(params) {
  return defHttp.post({ url: Api.SavePosDailyReport, params }, { errorMessageMode: 'message' });
}

export function updatePosDailyReport(params) {
  return defHttp.post({ url: Api.UpdatePosDailyReport, params }, { errorMessageMode: 'message' });
}

export function deletePosDailyReport(id) {
  return defHttp.delete(
    {
      url: Api.DeletePosDailyReport,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
