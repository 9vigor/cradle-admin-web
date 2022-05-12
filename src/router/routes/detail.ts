import { AppRouteRecordRaw } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const detailRoutes: AppRouteRecordRaw[] = [
  {
    path: '/sys/user_detail/:id',
    name: 'UserDetail',
    meta: {
      hideMenu: true,
      title: t('sys.user.detail'),
      ignoreKeepAlive: true,
      showMenu: false,
      currentActiveMenu: '/sys/user',
    },
    component: () => import('/@/views/sys/user/UserDetail.vue'),
  },
];

export default detailRoutes;
