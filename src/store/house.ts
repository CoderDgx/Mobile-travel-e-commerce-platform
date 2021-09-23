import { Http } from '@/utils';
import { CommonEnum } from '@/enums';

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
    getComments(state: any, payload: any) {
      return {
        ...state,
        comments: payload,
      };
    },
    setShowLoading(state: any, payload: any) {
      return {
        ...state,
        showLoading: payload,
      };
    },
    reloadComments(state: any, payload: any) {
      return {
        ...state,
        reloadCommentsNum: state.reloadComments + 1,
        page: {
          ...CommonEnum.PAGE,
          pageNum: state.page.pageNum + 1,
        },
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
    async getCommentsAsync(dispatch: any, rootState: any, payload: any) {
      const { comments, page } = rootState.house;
      const lists: any = await Http({
        url: '/comments/lists',
        body: {
          ...payload,
          pageSzie: page.pageSzie,
          pageNum: page.pageNum,
        },
      });
      dispatch({
        type: 'getComments',
        payload: [...comments, ...lists.data],
      });
      dispatch({
        type: 'setShowLoading',
        payload: (lists as []).length ? true : false,
      });
    },
  },
};
