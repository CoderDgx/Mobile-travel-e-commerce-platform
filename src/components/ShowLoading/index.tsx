import React, { FC } from 'react';
import { CommonEnum } from '@/enums';
import { Icon } from 'antd-mobile';

import './index.less';

interface ShowLoadingProps {
  showLoading: boolean;
}

const ShowLoading: FC<ShowLoadingProps> = (props) => {
  const { showLoading } = props;
  return (
    <div>
      {showLoading ? (
        <div id={CommonEnum.LOADING_ID} className="loading-info">
          <Icon type="loading" size="lg" />
        </div>
      ) : (
        <div className="loading-info">到底啦~</div>
      )}
    </div>
  );
};

ShowLoading.defaultProps = {
  showLoading: true,
};

export default ShowLoading;
