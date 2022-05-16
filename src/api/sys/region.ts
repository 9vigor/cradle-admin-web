import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetRegionTree = '/sys/region/tree/',
  SyncRegionData = '/sys/region/sync',
}

export function getRegionTree(id) {
  return defHttp.get({ url: Api.GetRegionTree + id }, { errorMessageMode: 'message' });
}

export function syncRegionData() {
  return defHttp.post({ url: Api.SyncRegionData }, { errorMessageMode: 'message' });
}
