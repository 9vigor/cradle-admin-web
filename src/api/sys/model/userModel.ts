/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  verifyToken: string;
  googleCode: string | null;
}

export interface VerifyParams {
  username: string;
  password: string;
}

export interface RefreshTokenParams {
  refreshToken: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  accessToken: string;
  refreshToken: string;
}

export interface VerifyResultModel {
  googleBind: boolean;
  googleVerify: boolean;
  verifyToken: string;
  googleSecret: string;
  googleQrUrl: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: string[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  name: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
}
