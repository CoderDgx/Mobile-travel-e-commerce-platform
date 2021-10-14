import React, { FC, useEffect } from 'react';
import { Button } from 'antd-mobile';
import { timer } from '@/utils';

interface InfoProps {
  detail: any;
  order: any;
  btnClick: (id: any) => void;
}

const Info: FC<InfoProps> = (props) => {
  const { detail, order, btnClick } = props;
  const handleOrder = (id: any) => {
    btnClick(id);
  };
  const renderBtn = () => {
    // order里面没有id，说明订单一定不存在
    if (!order?.id) {
      return (
        <Button
          className="info-btn"
          type="warning"
          onClick={() => handleOrder(null)}
        >
          预定
        </Button>
      );
    }

    // 已经有订单了，处于未支付状态
    if (props.order?.isPayed === 0) {
      return (
        <Button
          className="info-btn"
          type="ghost"
          onClick={() => handleOrder(order.id)}
        >
          取消预定
        </Button>
      );
    }

    // 已经有订单了，处于已支付状态
    if (props.order?.isPayed === 1) {
      return (
        <Button className="info-btn" type="ghost">
          居住中
        </Button>
      );
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="info">
      <div className="info-title">{detail?.name}</div>
      <div className="info-msg">简介：{detail?.info}</div>
      <div className="info-price">价格：{'￥' + detail?.price}</div>
      <div className="info-time">发布时间：{timer(detail?.publishTime)}</div>
      <div className="info-time">开始出租：{timer(detail?.startTime, '')}</div>
      <div className="info-time">结束出租：{timer(detail?.endTime, '')}</div>
      {renderBtn()}
    </div>
  );
};

export default Info;
