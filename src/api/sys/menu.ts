import { defHttp } from '/@/utils/http/axios';
import { MenuParams, MenuResultModel, MenuTreeResultModel, UserResources } from './model/menuModel';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  GetUserResources = '/sys/user/resources',
  GetMenuList = '/sys/menu/query',
  GetMenuTree = '/sys/menu/tree',
  SaveMenu = '/sys/menu/save',
  UpdateMenu = '/sys/menu/update',
  DeleteMenu = '/sys/menu/delete',
}

/**
 * @description: getUserResources
 */
export function getUserResources() {
  return defHttp.get<UserResources>({ url: Api.GetUserResources }, { errorMessageMode: 'message' });
}

/**
 * @description: getMenuList
 */
export function getMenuList() {
  return defHttp.get<MenuResultModel>({ url: Api.GetMenuList }, { errorMessageMode: 'message' });
}

export function getMenuTree(parentId) {
  return defHttp.post<MenuTreeResultModel>(
    {
      url: Api.GetMenuTree,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { parentId },
    },
    { errorMessageMode: 'message' },
  );
}

export function saveMenu(params: MenuParams) {
  return defHttp.post({ url: Api.SaveMenu, params }, { errorMessageMode: 'message' });
}

export function updateMenu(params: MenuParams) {
  return defHttp.post({ url: Api.UpdateMenu, params }, { errorMessageMode: 'message' });
}

export function deleteMenu(id: number) {
  return defHttp.delete(
    {
      url: Api.DeleteMenu,
      headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
      params: { id },
    },
    { errorMessageMode: 'message' },
  );
}
