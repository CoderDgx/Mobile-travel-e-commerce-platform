import React, { FC, useEffect } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Info from './components/Info';
import Lists from './components/Lists';
import { useStoreHook } from 'think-react-store';
import { useObserverHook } from '@/hooks';
import { CommonEnum } from '@/enums';
import { useLocation } from 'umi';

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
    },
  } = useStoreHook();
  const { query } = useLocation();

  useObserverHook(
    '#' + CommonEnum.LOADING_ID,
    (entries: any) => {
      // console.log(entries)
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

  return (
    <div className="house-page">
      <Banner banner={detail?.data?.banner} />
      <Info detail={detail?.data?.info} />
      <Lists lists={comments} showLoading={showLoading} />
      <Footer />
    </div>
  );
};

export default House;
