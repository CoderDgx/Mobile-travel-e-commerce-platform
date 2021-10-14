import React, { FC, useEffect } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Info from './components/Info';
import Lists from './components/Lists';
import { NavBar, Icon } from 'antd-mobile';
import { useStoreHook } from 'think-react-store';
import { useObserverHook } from '@/hooks';
import { CommonEnum } from '@/enums';
import { useLocation, history } from 'umi';

import './index.less';

const House: FC = (props) => {
  const {
    house: {
      detail,
      getDetailAsync,
      getCommentsAsync,
      comments,
      reloadComments,
      reloadCommentsNum,
      showLoading,
      resetData,
      order,
      hasOrderAsync,
      addOrderAsync,
      delOrderAsync,
    },
  } = useStoreHook();
  const { query } = useLocation();

  /**
   * 1，监听loading是否展示出来
   * 2，出发reload，修改分页
   * 3，监听reload变化，重新请求接口
   * 4，拼装数据
   */
  useObserverHook(
    '#' + CommonEnum.LOADING_ID,
    (entries: any) => {
      if (
        comments &&
        comments.length &&
        showLoading &&
        entries[0].isIntersecting
      ) {
        reloadComments();
      }
    },
    [comments, showLoading],
  );

  useEffect(() => {
    getDetailAsync({
      id: query?.id,
    });
  }, []);

  useEffect(() => {
    getCommentsAsync({
      id: query?.id,
    });
  }, [reloadCommentsNum]);

  useEffect(() => {
    hasOrderAsync({
      id: query?.id,
    });
  }, []);

  useEffect(() => {
    return () => {
      resetData({
        detail: {},
      });
    };
  }, []);

  const handleBtnClick = (id: any) => {
    if (!id) {
      addOrderAsync({
        id: query?.id,
      });
    } else {
      delOrderAsync({
        id: query?.id,
      });
    }
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="house-page">
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={handleBack}>
        房屋详情
      </NavBar>
      {/**banner */}
      <Banner banner={detail?.data?.banner} />
      {/**房屋信息 */}
      <Info
        detail={detail?.data?.info}
        order={order?.data}
        btnClick={handleBtnClick}
      />
      {/**评论列表 */}
      <Lists lists={comments} showLoading={showLoading} />
      {/**footer */}
      <Footer />
    </div>
  );
};

export default House;
