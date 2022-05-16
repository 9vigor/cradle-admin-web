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
  Login = '/sys/admin/login',
  Verify = '/sys/admin/verify',
  RefreshToken = '/sys/admin/token/refresh',
  Logout = '/sys/admin/logout',
  GetUserList = '/sys/user/query',
  GetUserById = '/sys/user/query/',
  SaveUser = '/sys/user/save',
  UpdateUser = '/sys/user/update',
  DeleteUser = '/sys/user/delete',
  UnlockUser = '/sys/user/unlock',
  GetGoogleSecret = '/sys/user/google-secret',
  ResetGoogleSecret = '/sys/user/google-secret/reset',
  CloseGoogleSecret = '/sys/user/google-verify/close',
  OpenGoogleSecret = '/sys/user/google-verify/open',
  CheckUsername = '/sys/user/username/check',
  CheckMobile = '/sys/user/mobile/check',
  GetLoginLogList = '/sys/login-log/query',
  DeleteLoginLog = '/sys/login-log/delete',
  GetOperationLogList = '/sys/operation-log/query',
  GetOperationLogById = '/sys/operation-log/query/',
  DeleteOperationLog = '/sys/operation-log/delete',
  GetUserInfo = '/sys/user/info',
  SaveUserInfo = '/sys/user/info/save',
  ChangePassword = '/sys/user/password/change',
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

export function getUserById(id) {
  return defHttp.get({ url: Api.GetUserById + id }, { errorMessageMode: 'message' });
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
