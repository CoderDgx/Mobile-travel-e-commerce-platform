import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: './home/index',
          title: '首页',
        },
        {
          path: '/order',
          component: './order/index',
          title: '订单',
          auth: true,
        },
        {
          path: '/user',
          component: './user/index',
          title: '我的',
          auth: true,
        },
      ],
    },
  ],
  fastRefresh: {},
});
