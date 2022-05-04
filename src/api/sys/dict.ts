import { Dict, dict2Map } from '/@/api/model/baseModel';
import { useI18n } from '/@/hooks/web/useI18n';
import { ResourceScopeEnum, ResourceTargetEnum, ResourceTypeEnum } from '/@/enums/menuEnum';
import { StatusEnum } from '/@/enums/commonEnum';
import { CodeTemplateEnum } from '/@/enums/codegenEnum';
import {
  BusinessModuleEnum,
  BusinessStatusEnum,
  BusinessTypeEnum,
  DataScopeEnum,
  LoginResultEnum,
  UnlockTypeEnum,
} from '/@/enums/userEnum';

const { t } = useI18n();

export const resourceTypeDict: Dict[] = [
  { value: ResourceTypeEnum.DIRECTORY, label: t('dict.menu.type.directory') },
  { value: ResourceTypeEnum.MENU, label: t('dict.menu.type.menu') },
  { value: ResourceTypeEnum.BUTTON, label: t('dict.menu.type.button') },
];

export const resourceTypeDictMap = dict2Map(resourceTypeDict);

export const resourceScopeDict: Dict[] = [
  { value: ResourceScopeEnum.MASTER, label: t('dict.menu.scope.master') },
  { value: ResourceScopeEnum.ADMIN, label: t('dict.menu.scope.admin') },
  { value: ResourceScopeEnum.ANONYMOUS, label: t('dict.menu.scope.anonymous') },
];

export const resourceScopeDictMap = dict2Map(resourceScopeDict);

export const resourceTargetDict: Dict[] = [
  { value: ResourceTargetEnum.MAIN, label: t('dict.menu.target.main') },
  { value: ResourceTargetEnum.BLANK, label: t('dict.menu.target.blank') },
];

export const resourceTargetDictMap = dict2Map(resourceTargetDict);

export const statusDict: Dict[] = [
  { value: StatusEnum.NORMAL, label: t('common.enable') },
  { value: StatusEnum.INVALID, label: t('common.disable') },
];

export const statusDictMap = dict2Map(statusDict);

export const templateDict: Dict[] = [
  { value: CodeTemplateEnum.JAVA_CRUD, label: t('dict.codegen.javaTemplate') },
  { value: CodeTemplateEnum.GO_CRUD, label: t('dict.codegen.goTemplate') },
];

export const templateDictMap = dict2Map(templateDict);

export const queryTypeDict: Dict[] = [
  { value: 'NONE', label: 'none' },
  { value: 'EQUAL', label: '=' },
  { value: 'NOT_EQUAL', label: '!=' },
  { value: 'GREATER_EQUAL', label: '>=' },
  { value: 'GREATER', label: '>' },
  { value: 'LESS_EQUAL', label: '<=' },
  { value: 'LESS', label: '<' },
  { value: 'LIKE', label: 'like' },
  { value: 'LEFT_LIKE', label: 'left like' },
  { value: 'RIGHT_LIKE', label: 'right like' },
];

export const queryTypeDictMap = dict2Map(queryTypeDict);

export const inputTypeDict: Dict[] = [
  { label: 'none', value: 'NONE' },
  { label: '文本框', value: 'TEXT' },
  { label: '下拉框', value: 'SELECT' },
  { label: '下拉多选', value: 'SELECT_MULTIPLE' }, // 组件 tags 模式，分词多选
  { label: '隐藏域', value: 'HIDDEN' },
  { label: '整数', value: 'INTEGRAL_NUMBER' },
  { label: '小数', value: 'DECIMAL' },
  { label: '单选', value: 'RADIO' },
  { label: '复选框', value: 'CHECKBOX' },
  { label: '日期', value: 'DATE' },
  { label: '日期时间', value: 'DATETIME' },
  { label: '时间', value: 'TIME' },
  { label: '文本域', value: 'TEXTAREA' },
  { label: '富文本', value: 'RICH_TEXT' },
  { label: '图片', value: 'IMAGE' },
  { label: '文件', value: 'FILE' },
];

export const inputTypeDictMap = dict2Map(inputTypeDict);

export const unlockTypeDict: Dict[] = [
  { value: UnlockTypeEnum.USERNAME, label: t('sys.user.username') },
  { value: UnlockTypeEnum.IP, label: t('sys.user.ip') },
];

export const unlockTypeDictMap = dict2Map(unlockTypeDict);

export const dataScopeDict: Dict[] = [
  { value: DataScopeEnum.ALL, label: '全部' },
  { value: DataScopeEnum.SELF_DEPT, label: '本部门' },
  { value: DataScopeEnum.SELF_DEPT_AND_BELOW, label: '本部门及以下' },
  { value: DataScopeEnum.SELF, label: '本人' },
];

export const dataScopeDictMap = dict2Map(dataScopeDict);

export const moduleDict: Dict[] = [
  { value: BusinessModuleEnum.TENANT_MGT, label: '租户管理' },
  { value: BusinessModuleEnum.DEPT_MGT, label: '部门管理' },
  { value: BusinessModuleEnum.USER_MGT, label: '用户管理' },
  { value: BusinessModuleEnum.ROLE_MGT, label: '角色管理' },
  { value: BusinessModuleEnum.MENU_MGT, label: '菜单管理' },
  { value: BusinessModuleEnum.IP_WHITE_LIST_MGT, label: 'IP白名单' },
  { value: BusinessModuleEnum.DICT_MGT, label: '字典管理' },
  { value: BusinessModuleEnum.FILE_MGT, label: '文件管理' },
  { value: BusinessModuleEnum.CODE_GEN, label: '代码生成' },
  { value: BusinessModuleEnum.LOG_MGT, label: '日志管理' },
  { value: BusinessModuleEnum.OTHER, label: '其它' },
];
export const moduleDictMap = dict2Map(moduleDict);

export const businessTypeDict: Dict[] = [
  { value: BusinessTypeEnum.INSERT, label: '新增' },
  { value: BusinessTypeEnum.UPDATE, label: '修改' },
  { value: BusinessTypeEnum.DELETE, label: '删除' },
  { value: BusinessTypeEnum.GRANT, label: '授权' },
  { value: BusinessTypeEnum.UNLOCK, label: '解锁' },
  { value: BusinessTypeEnum.EXPORT, label: '导出' },
  { value: BusinessTypeEnum.IMPORT, label: '导入' },
  { value: BusinessTypeEnum.CODEGEN, label: '生成代码' },
  { value: BusinessTypeEnum.RESET_GOOGLE_SECRET, label: '重置谷歌密钥' },
  { value: BusinessTypeEnum.CLOSE_GOOGLE_VERIFY, label: '关闭谷歌验证' },
  { value: BusinessTypeEnum.OPEN_GOOGLE_VERIFY, label: '开启谷歌验证' },
  { value: BusinessTypeEnum.VIEW_GOOGLE_SECRET, label: '查看谷歌密钥' },
  { value: BusinessTypeEnum.OTHER, label: '其它' },
];
export const businessTypeDictMap = dict2Map(businessTypeDict);

export const businessStatusDict: Dict[] = [
  { value: BusinessStatusEnum.SUCCESS, label: '成功' },
  { value: BusinessStatusEnum.FAIL, label: '失败' },
];
export const businessStatusDictMap = dict2Map(businessStatusDict);

export const loginResultsDict: Dict[] = [
  { value: LoginResultEnum.SUCCESS, label: '登录成功' },
  { value: LoginResultEnum.USERNAME_NOT_FOUND, label: '用户不存在' },
  { value: LoginResultEnum.PASSWD_ERROR, label: '密码错误' },
  { value: LoginResultEnum.GOOGLE_CODE_ERROR, label: '谷歌验证码错误' },
  { value: LoginResultEnum.DISABLED, label: '用户被禁用' },
  { value: LoginResultEnum.USERNAME_LOCKED, label: '账户被锁定' },
  { value: LoginResultEnum.IP_LOCKED, label: 'IP被锁定' },
  { value: LoginResultEnum.UNKNOWN, label: '未知错误' },
];
export const loginResultsDictMap = dict2Map(loginResultsDict);

export const localeDict: Dict[] = [
  { value: 'CHINA', label: '中国' },
  { value: 'AMERICA', label: '美国' },
];
export const localeDictMap = dict2Map(localeDict);

export const whetherDict: Dict[] = [
  { value: 'YES', label: '是' },
  { value: 'NO', label: '否' },
];
export const whetherDictMap = dict2Map(whetherDict);
