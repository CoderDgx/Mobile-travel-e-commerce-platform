import { Http } from '@/utils';
import { Toast } from 'antd-mobile';
import { history } from 'umi';
import { urlGet } from 'project-libs';

export default {
  state: {
    id: undefined,
    username: undefined,
    avatar: undefined,
    phone: undefined,
    sign: undefined,
  },
  reducers: {
    getUser(state: any, payload: any) {
      return {
        ...state,
        ...payload,
      };
    },
    editUser(state: any, payload: any) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    async getUserAsync(dispatch: any, rootState: any, payload: any) {
      const user: any = await Http({
        url: '/user/detail',
        body: payload,
      });
      if (user) {
        dispatch({
          type: 'getUser',
          payload: user.data,
        });
      }
    },
    async editUserAsync(dispatch: any, rootState: any, payload: any) {
      const result = await Http({
        url: '/user/edit',
        body: payload,
      });
      if (result) {
        Toast.success('编辑成功');
        history.push('/user');
      }
    },
    async loginAsync(dispatch: any, rootState: any, payload: any) {
      const result: any = await Http({
        url: '/user/login',
        body: payload,
      });
      if (result) {
        localStorage.setItem('username', result.data.username);
        console.log(urlGet('from'));
        urlGet('from') &&
          history.push({
            pathname: urlGet('from') as string,
          });
        Toast.success('登录成功');
      }
    },
    async registerAsync(dispatch: any, rootState: any, payload: any) {
      const result: any = await Http({
        url: '/user/register',
        body: payload,
      });
      if (result) {
        history.push('/login');
        Toast.success('注册成功');
      }
    },
    async logoutAsync(dispatch: any, rootState: any, payload: any) {
      const result: any = await Http({
        url: '/user/logout',
        body: payload,
      });
      if (result) {
        localStorage.clear();
        Toast.success('退出成功');
        location.hash = '#//login?from=' + location.pathname;
      }
    },
  },
};
