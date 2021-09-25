import React, { useState, useEffect, FC } from 'react';
import { Button, Toast } from 'antd-mobile';
import { Http, timer } from '@/utils';

export interface OrdersType {
  id: number;
  img: string;
  title: string;
  info: string;
  price: string;
  createTime: string;
}

interface OrderItemProps {
  orders: OrdersType;
  type: number;
}

const OrderItem: FC<OrderItemProps> = (props) => {
  const { orders, type } = props;

  const renderPay = () => {
    switch (type) {
      case 0:
        return (
          <Button type="warning" size="small">
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
      <img alt="order" src={orders.img} />
      <div className="center">
        <div className="title">{orders.title}</div>
        <div className="price">￥{orders.price}</div>
        <div className="time">{timer(orders.createTime, 'day')}</div>
      </div>
      <div className="pay">{renderPay()}</div>
    </div>
  );
};

export default OrderItem;
