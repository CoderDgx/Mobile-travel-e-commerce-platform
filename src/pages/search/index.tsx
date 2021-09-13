import React, { FC, useState } from 'react';
import { ActivityIndicator, SearchBar } from 'antd-mobile';
import { useHttpHook } from '@/hooks';

import './index.less';

const Search: FC = (props) => {
  const [houseName, setHouseName] = useState('');

  const [houses, loading] = useHttpHook({
    url: '/house/search',
    body: {},
  });

  const handleChange = (value) => {
    setHouseName(value);
  };

  const handleCancel = () => {};

  const handleSubmit = (value) => {};

  return (
    <div className="search-page">
      <SearchBar
        placeholder="搜索民宿"
        value={houseName}
        onChange={handleChange}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
      {loading ? (
        <ActivityIndicator toast />
      ) : (
        <div className="result">
          {houses.map((item: any) => (
            <div className="item" key={item.id}>
              <img alt="img" src={item.img} />
              <div className="item-right">
                <div className="title">{item.title}</div>
                <div className="price">{'￥' + item.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
