import React, { useState, useEffect, FC } from 'react';
import { Button, Toast } from 'antd-mobile';
import { Http, timer } from '@/utils';

interface OrderItemProps {
  orders: any;
  type: number;
}

const OrderItem: FC<OrderItemProps> = (props) => {
  const { orders, type } = props;

  const handleClick = async () => {
    const result = await Http({
      url: '/orders/pay',
      body: {
        id: orders.id,
      },
    });
    if (result) {
      Toast.success('支付成功');
      window.location.reload();
    }
  };
  const renderPay = () => {
    switch (type) {
      case 0:
        return (
          <Button type="warning" size="small" onClick={handleClick}>
            去支付
          </Button>
        );
        break;
      case 1:
        return <div>已完成</div>;
        break;
      default:
        break;
    }
  };

  return (
    <div className="order-item">
      <img alt="order" src={orders?.house?.imgs[0].url} />
      <div className="center">
        <div className="title">{orders?.house?.name}</div>
        <div className="price">￥{orders?.house?.price}</div>
        <div className="time">{timer(orders.createTime, 'day')}</div>
      </div>
      <div className="pay">{renderPay()}</div>
    </div>
  );
};

export default OrderItem;
