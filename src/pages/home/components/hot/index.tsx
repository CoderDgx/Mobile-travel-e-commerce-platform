import React, { FC, useState } from 'react';
import { history } from 'umi';

interface HotProps {
  houses: any;
}

const Hot: FC<HotProps> = (props) => {
  // const [houses, setHouses] = useState([
  //   {
  //     id: 1,
  //     img:
  //       'https://img.meituan.net/phoenix/5e0cc58f76f78f31a4c80ba3d9572ee2329641.jpg@732w_412h_80Q_1e_1c',
  //     title: '东城民宿',
  //     info: '东城区交通方便',
  //     price: '100',
  //   },
  //   {
  //     id: 2,
  //     img:
  //       'https://img.meituan.net/phoenix/5e0cc58f76f78f31a4c80ba3d9572ee2329641.jpg@732w_412h_80Q_1e_1c',
  //     title: '西城民宿',
  //     info: '西城区山水怡情',
  //     price: '120',
  //   },
  //   {
  //     id: 3,
  //     img:
  //       'https://img.meituan.net/phoenix/5e0cc58f76f78f31a4c80ba3d9572ee2329641.jpg@732w_412h_80Q_1e_1c',
  //     title: '新区民宿',
  //     info: '新区民宿位置优越',
  //     price: '200',
  //   },
  //   {
  //     id: 4,
  //     img:
  //       'https://img.meituan.net/phoenix/5e0cc58f76f78f31a4c80ba3d9572ee2329641.jpg@732w_412h_80Q_1e_1c',
  //     title: '老城民宿',
  //     info: '老城区风景秀美',
  //     price: '220',
  //   },
  // ]);
  const { houses } = props;
  const handleClick = (id: any) => {
    history.push({
      pathname: '/house',
      query: {
        id,
      },
    });
  };
  return (
    <div className="hot">
      <h1>最热民宿</h1>
      <div className="hot-lists">
        {houses.map((item: any) => {
          return (
            <div
              className="hot-lists-item"
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <img className="img" alt="img" src={item?.imgs[0]?.url} />
              <div className="info">{item.info}</div>
              <div className="title">{item.title}</div>
              <div className="price">{'￥' + item.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hot;
