import React, { useState, useEffect } from 'react';
import { Tabs, List } from 'antd-mobile';
import { useObserverHook } from '@/hooks';
import { ShowLoading } from '@/components';
import { CommonEnum } from '@/enums';
import { Http } from '@/utils';
import { isEmpty } from 'project-libs';
import OrderItem, { OrdersType } from './orderItem';
import './index.less';

const Order: React.FC = (props) => {
  const [page, setPage] = useState(CommonEnum.PAGE);
  const [orders, setOrders] = useState<OrdersType[]>([]);
  const [showLoading, setShowLoading] = useState(true);
  const [type, setType] = useState(0);

  const invokeHttp = async (pageNum: number) => {
    const result: any = await Http({
      url: '/order/lists',
      body: {
        ...page,
        pageNum,
        type,
      },
    });
    return result.data;
  };

  const fetchOrders = async (pageNum: number) => {
    const result = await invokeHttp(pageNum);
    if (!isEmpty(result) && result.length <= page.pageSize) {
      setOrders(result);
      setShowLoading(true);
    } else {
      setShowLoading(false);
    }
  };

  useObserverHook(
    '#' + CommonEnum.LOADING_ID,
    async (entries: any) => {
      if (entries[0].isIntersecting) {
        const result = await invokeHttp(page.pageNum + 1);
        if (!isEmpty(result) && result.length === page.pageSize) {
          setOrders([...orders, ...result]);
          setPage({
            ...page,
            pageNum: page.pageNum + 1,
          });
          setShowLoading(true);
        } else {
          setShowLoading(false);
        }
      }
    },
    undefined,
  );

  const handleChange = (e: any) => {
    setType(e.sub);
    setPage(CommonEnum.PAGE);
    setOrders([]);
    setShowLoading(true);
  };

  useEffect(() => {
    fetchOrders(1);
  }, [type]);

  const tabs = [
    { title: '未支付', sub: 0 },
    { title: '已支付', sub: 1 },
  ];

  return (
    <div className="order-page">
      <Tabs tabs={tabs} onChange={handleChange}>
        <List className="tab">
          {orders.map((item: OrdersType) => {
            return (
              <List.Item>
                <OrderItem orders={item} type={0} />
              </List.Item>
            );
          })}
          <ShowLoading showLoading={showLoading} />
        </List>
        <List className="tab">
          {orders.map((item: OrdersType) => {
            return (
              <List.Item>
                <OrderItem orders={item} type={1} />
              </List.Item>
            );
          })}
          <ShowLoading showLoading={showLoading} />
        </List>
      </Tabs>
    </div>
  );
};

export default Order;
