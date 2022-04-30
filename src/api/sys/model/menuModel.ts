import type { RouteMeta } from 'vue-router';
import { ResourceScopeEnum, ResourceTargetEnum, ResourceTypeEnum } from '/@/enums/menuEnum';
import { StatusEnum } from '/@/enums/commonEnum';
export interface RouteItem {
  path: string;
  component: any;
  meta: RouteMeta;
  name?: string;
  alias?: string | string[];
  redirect?: string;
  caseSensitive?: boolean;
  children?: RouteItem[];
}

export interface UserResources {
  roles: string[];
  permissions: string[];
  routes: RouteItem[];
}

export interface MenuParams {
  id: string;
  parentId: number;
  name: string;
  sort: number;
  routePath: string;
  apiUrl: string;
  scope: ResourceScopeEnum;
  target: ResourceTargetEnum;
  type: ResourceTypeEnum;
  icon: string;
  permission: string;
  status: StatusEnum;
}

export interface MenuResultModel {
  id: string;
  parentId: number;
  parentIds: string;
  name: string;
  sort: number;
  routePath: string;
  apiUrl: string;
  scope: ResourceScopeEnum;
  target: ResourceTargetEnum;
  type: ResourceTypeEnum;
  icon: string;
  permission: string;
  children: MenuResultModel[];
  status: StatusEnum;
  createTime: string;
  updateTime: string;
}

export interface MenuTreeResultModel {
  key: string | number;
  title: string;
  children: MenuTreeResultModel[];
  disabled: boolean;
  selectable: boolean;
  checkable: boolean;
  isLeaf: boolean;
  value: string | number;
}
