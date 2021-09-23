import React, { FC } from 'react';
import { Button } from 'antd-mobile';
import { timer } from '@/utils';

interface InfoProps {
  detail: any;
}

const Info: FC<InfoProps> = (props) => {
  const { detail } = props;
  return (
    <div className="info">
      <div className="info-title">{detail?.title}</div>
      <div className="info-msg">简介：{detail?.msg}</div>
      <div className="info-price">价格：{'￥' + detail?.price}</div>
      <div className="info-time">发布时间：{timer(detail?.publishTime)}</div>
      <div className="info-time">开始出租：{timer(detail?.startTime, '')}</div>
      <div className="info-time">结束出租：{timer(detail?.endTime, '')}</div>
      <Button className="info-btn" type="warning">
        预订
      </Button>
    </div>
  );
};

export default Info;
