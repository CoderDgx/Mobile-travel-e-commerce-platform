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
    house: { detail, getDetailAsync },
  } = useStoreHook();
  const { query } = useLocation();

  useEffect(() => {
    getDetailAsync({
      id: query?.id,
    });
  }, []);

  return (
    <div className="house-page">
      <Banner banner={detail?.data?.banner} />
      <Info />
      <Lists />
      <Footer />
    </div>
  );
};

export default House;
