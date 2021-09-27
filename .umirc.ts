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
        {
          path: '/user/edit',
          component: './user/edit',
          title: '设置',
          auth: true,
        },
        {
          path: 'search',
          component: './search/index',
          title: '搜索',
        },
        {
          path: '/house',
          component: './houses/index',
          title: '房屋详情',
        },
        {
          path: '/login',
          component: './login/index',
          title: '登录',
        },
        {
          path: '/register',
          component: './register/index',
          title: '注册',
        },
      ],
    },
  ],
  fastRefresh: {},
});
