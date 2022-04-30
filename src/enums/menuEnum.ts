/**
 * @description: menu type
 */
export enum MenuTypeEnum {
  // left menu
  SIDEBAR = 'sidebar',

  MIX_SIDEBAR = 'mix-sidebar',
  // mixin menu
  MIX = 'mix',
  // top menu
  TOP_MENU = 'top-menu',
}

// 折叠触发器位置
export enum TriggerEnum {
  // 不显示
  NONE = 'NONE',
  // 菜单底部
  FOOTER = 'FOOTER',
  // 头部
  HEADER = 'HEADER',
}

export type Mode = 'vertical' | 'vertical-right' | 'horizontal' | 'inline';

// menu mode
export enum MenuModeEnum {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
  VERTICAL_RIGHT = 'vertical-right',
  INLINE = 'inline',
}

export enum MenuSplitTyeEnum {
  NONE = 'NONE',
  TOP = 'TOP',
  LEFT = 'LEFT',
}

export enum TopMenuAlignEnum {
  CENTER = 'center',
  START = 'start',
  END = 'end',
}

export enum MixSidebarTriggerEnum {
  HOVER = 'hover',
  CLICK = 'click',
}

export enum ResourceScopeEnum {
  //总台
  MASTER = 'MASTER',
  //普通
  ADMIN = 'ADMIN',
  //匿名
  ANONYMOUS = 'ANONYMOUS',
}

export enum ResourceTargetEnum {
  MAIN = 'MAIN',
  BLANK = 'BLANK',
}

export enum ResourceTypeEnum {
  DIRECTORY = 'DIRECTORY',
  MENU = 'MENU',
  BUTTON = 'BUTTON',
}
