import { UploadApiResult } from './model/uploadModel';
import { defHttp } from '/@/utils/http/axios';
import { UploadFileParams } from '/#/axios';
import { useGlobSetting } from '/@/hooks/setting';
import { ContentTypeEnum } from '/@/enums/httpEnum';

const { uploadUrl = '' } = useGlobSetting();

enum Api {
  GetFileInfoApi = '/system/file/info',
  GetFileList = '/system/file/query',
  DownloadFile = '/system/file/download',
  DeleteFile = '/system/file/delete',
}

/**
 * @description: Upload interface
 */
export function uploadApi(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void,
) {
  return defHttp.uploadFile<UploadApiResult>(
    {
      url: uploadUrl,
      onUploadProgress,
    },
    params,
  );
}

/**
 * @description: Upload interface
 */
export function nonProgressUploadApi(params: UploadFileParams) {
  return defHttp.uploadFile<UploadApiResult>(
    {
      url: uploadUrl,
    },
    params,
  );
}

export function queryFileInfoApi(params) {
  return defHttp.post(
    {
      url: Api.GetFileInfoApi,
      params,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
    },
    { errorMessageMode: 'message' },
  );
}

export function getFileList(params) {
  return defHttp.post(
    {
      url: Api.GetFileList,
      params,
    },
    { errorMessageMode: 'message' },
  );
}
export function downloadFile(id) {
  return defHttp.get(
    {
      url: Api.DownloadFile,
      responseType: 'blob',
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message', isReturnNativeResponse: true },
  );
}

export function deleteFile(id) {
  return defHttp.delete(
    {
      url: Api.DeleteFile,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
