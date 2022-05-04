import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard',
  meta: {
    orderNo: 1,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('/@/views/dashboard/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.dashboard'),
      },
    },
  ],
};

export default dashboard;
