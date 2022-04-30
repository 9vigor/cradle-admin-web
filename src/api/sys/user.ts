import { defHttp } from '/@/utils/http/axios';
import {
  GetUserInfoModel,
  LoginParams,
  LoginResultModel,
  RefreshTokenParams,
  VerifyParams,
  VerifyResultModel,
} from './model/userModel';

import { ErrorMessageMode } from '/#/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  Login = '/system/admin/login',
  Verify = '/system/admin/verify',
  RefreshToken = '/system/admin/token/refresh',
  Logout = '/system/admin/logout',
  GetUserList = '/system/user/query',
  SaveUser = '/system/user/save',
  UpdateUser = '/system/user/update',
  DeleteUser = '/system/user/delete',
  UnlockUser = '/system/user/unlock',
  GetGoogleSecret = '/system/user/google-secret',
  ResetGoogleSecret = '/system/user/google-secret/reset',
  CloseGoogleSecret = '/system/user/google-verify/close',
  OpenGoogleSecret = '/system/user/google-verify/open',
  CheckUsername = '/system/user/username/check',
  CheckMobile = '/system/user/mobile/check',
  GetLoginLogList = '/system/login-log/query',
  DeleteLoginLog = '/system/login-log/delete',
  GetOperationLogList = '/system/operation-log/query',
  GetOperationLogById = '/system/operation-log/query/',
  DeleteOperationLog = '/system/operation-log/delete',
  GetUserInfo = '/system/user/info',
  SaveUserInfo = '/system/user/info/save',
  ChangePassword = '/system/user/password/change',
}

export function verifyApi(params: VerifyParams, mode: ErrorMessageMode = 'message') {
  return defHttp.post<VerifyResultModel>(
    {
      url: Api.Verify,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'message') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getPersonalInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'message' });
}

/**
 * @description: refreshToken
 */
export function refreshToken(params: RefreshTokenParams) {
  return defHttp.post<LoginResultModel>(
    { url: Api.RefreshToken, params },
    { errorMessageMode: 'message' },
  );
}

export function doLogout() {
  return defHttp.post({ url: Api.Logout }, { errorMessageMode: 'message' });
}

export function getUserList(params) {
  return defHttp.post({ url: Api.GetUserList, params: params }, { errorMessageMode: 'message' });
}

export function saveUser(params) {
  return defHttp.post({ url: Api.SaveUser, params: params }, { errorMessageMode: 'message' });
}

export function updateUser(params) {
  return defHttp.post({ url: Api.UpdateUser, params: params }, { errorMessageMode: 'message' });
}

export function deleteUser(id) {
  return defHttp.delete(
    {
      url: Api.DeleteUser,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}

export function unlockUser(params) {
  return defHttp.post(
    {
      url: Api.UnlockUser,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params,
    },
    { errorMessageMode: 'message' },
  );
}

export function getGoogleSecret(id) {
  return defHttp.get(
    {
      url: Api.GetGoogleSecret,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}

export function resetGoogleSecret(id) {
  return defHttp.post(
    {
      url: Api.ResetGoogleSecret,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}

export function closeGoogleSecret(id) {
  return defHttp.post(
    {
      url: Api.CloseGoogleSecret,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}

export function openGoogleSecret(id) {
  return defHttp.post(
    {
      url: Api.OpenGoogleSecret,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}

export function checkUsername(id, username) {
  return defHttp.post(
    {
      url: Api.CheckUsername,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id, username },
    },
    { errorMessageMode: 'message' },
  );
}

export function checkMobile(id, mobile) {
  return defHttp.post(
    {
      url: Api.CheckMobile,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id, mobile },
    },
    { errorMessageMode: 'message' },
  );
}

export function getLoginLogList(params) {
  return defHttp.post(
    {
      url: Api.GetLoginLogList,
      params,
    },
    { errorMessageMode: 'message' },
  );
}

export function deleteLoginLog(id) {
  return defHttp.delete(
    {
      url: Api.DeleteLoginLog,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}

export function getOperationLogList(params) {
  return defHttp.post(
    {
      url: Api.GetOperationLogList,
      params,
    },
    { errorMessageMode: 'message' },
  );
}

export function getOperationLogById(id) {
  return defHttp.get(
    {
      url: Api.GetOperationLogById + id,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
    },
    { errorMessageMode: 'message' },
  );
}

export function deleteOperationLog(id) {
  return defHttp.delete(
    {
      url: Api.DeleteOperationLog,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}

export function saveUserInfo(params) {
  return defHttp.post(
    {
      url: Api.SaveUserInfo,
      params,
    },
    { errorMessageMode: 'message' },
  );
}

export function changePassword(params) {
  return defHttp.post(
    {
      url: Api.ChangePassword,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params,
    },
    { errorMessageMode: 'message' },
  );
}
