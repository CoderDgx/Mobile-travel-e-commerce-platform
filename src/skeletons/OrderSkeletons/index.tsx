import React, { useState, useEffect, FC } from 'react';

import './index.less';

const OrderSkeletons: FC = (props) => {
  const [state, setState] = useState(Array(5).fill(1));

  useEffect(() => {}, []);

  return (
    <div className="order-skeletons">
      <div className="order-item">
        <div className={'skeletons left'}></div>
        <div className="center">
          <div className={'skeletons title'}></div>
          <div className={'skeletons price'}></div>
          <div className={'skeletons time'}></div>
        </div>
        <div className={'skeletons pay'}></div>
      </div>
    </div>
  );
};

export default OrderSkeletons;
