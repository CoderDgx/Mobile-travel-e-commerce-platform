import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Search, { PickerData } from './components/search';
import Hot from './components/hot';
import { useHttpHook } from '@/hooks';

import './index.less';

const Home: React.FC = (props) => {
  const [city, cityLoading] = useHttpHook({
    url: '/commons/city',
  });

  const [houses] = useHttpHook({
    url: '/house/hot',
  });

  return (
    <div className="home">
      <Header />
      {city && <Search city={city} cityLoading={cityLoading} />}
      {houses && <Hot houses={houses} />}
    </div>
  );
};

export default Home;
