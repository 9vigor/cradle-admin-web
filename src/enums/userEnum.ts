export enum UnlockTypeEnum {
  USERNAME = 'USERNAME',
  IP = 'IP',
}

export enum DataScopeEnum {
  ALL = 'ALL',
  SELF_DEPT = 'SELF_DEPT',
  SELF_DEPT_AND_BELOW = 'SELF_DEPT_AND_BELOW',
  SELF = 'SELF',
}

export enum BusinessModuleEnum {
  TENANT_MGT = 'TENANT_MGT',

  DEPT_MGT = 'DEPT_MGT',

  USER_MGT = 'USER_MGT',

  ROLE_MGT = 'ROLE_MGT',

  MENU_MGT = 'MENU_MGT',

  IP_WHITE_LIST_MGT = 'IP_WHITE_LIST_MGT',

  DICT_MGT = 'DICT_MGT',

  FILE_MGT = 'FILE_MGT',

  CODE_GEN = 'CODE_GEN',

  LOG_MGT = 'LOG_MGT',

  OTHER = 'OTHER',
}

export enum BusinessTypeEnum {
  /**
   * 新增
   */
  INSERT = 'INSERT',

  /**
   * 修改
   */
  UPDATE = 'UPDATE',

  /**
   * 删除
   */
  DELETE = 'DELETE',

  /**
   * 授权
   */
  GRANT = 'GRANT',

  /**
   * 解锁
   */
  UNLOCK = 'UNLOCK',

  /**
   * 导出
   */
  EXPORT = 'EXPORT',

  /**
   * 导入
   */
  IMPORT = 'IMPORT',
  /**
   * 生成代码
   */
  CODEGEN = 'CODEGEN',

  RESET_GOOGLE_SECRET = 'RESET_GOOGLE_SECRET',

  CLOSE_GOOGLE_VERIFY = 'CLOSE_GOOGLE_VERIFY',

  OPEN_GOOGLE_VERIFY = 'OPEN_GOOGLE_VERIFY',

  VIEW_GOOGLE_SECRET = 'VIEW_GOOGLE_SECRET',

  OTHER = 'OTHER',
}

export enum BusinessStatusEnum {
  FAIL = 'FAIL',
  SUCCESS = 'SUCCESS',
}

export enum LoginResultEnum {
  SUCCESS = 'SUCCESS',
  USERNAME_NOT_FOUND = 'USERNAME_NOT_FOUND',
  PASSWD_ERROR = 'PASSWD_ERROR',
  GOOGLE_CODE_ERROR = 'GOOGLE_CODE_ERROR',
  DISABLED = 'DISABLED',
  USERNAME_LOCKED = 'USERNAME_LOCKED',
  IP_LOCKED = 'IP_LOCKED',
  UNKNOWN = 'UNKNOWN',
}
