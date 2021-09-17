import { Http } from '@/utils';
import { CommonEnum } from '@/enums';

async function handleOrder(url, dispatch, payload) {}

export default {
  state: {
    detail: {},
    comments: [],
    page: CommonEnum.PAGE,
    showLoading: true,
    reloadCommentsNum: 0,
    order: null,
  },
  reducers: {
    getDetail(state: any, payload: any) {
      return {
        ...state,
        detail: payload,
      };
    },
  },
  effects: {
    async getDetailAsync(dispatch: any, rootState: any, payload: any) {
      const detail = await Http({
        url: '/house/detail',
        body: payload,
      });
      dispatch({
        type: 'getDetail',
        payload: detail,
      });
    },
  },
};
