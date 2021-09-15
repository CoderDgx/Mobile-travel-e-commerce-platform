import React, { FC } from 'react';
import { CommonEnum } from '@/enums';

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
          loading
        </div>
      ) : (
        <div className="loading-info">没有数据了~</div>
      )}
    </div>
  );
};

ShowLoading.defaultProps = {
  showLoading: true,
};

export default ShowLoading;
