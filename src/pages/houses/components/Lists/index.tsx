import React, { FC } from 'react';
import { ShowLoading } from '@/components';
import { timer } from '@/utils';

interface ListProps {
  lists: any;
  showLoading: boolean;
}

const Lists: FC<ListProps> = (props) => {
  const { lists, showLoading } = props;
  return (
    <div className="comment">
      <h1 className="comment-title">评论</h1>
      <div className="comment-lists">
        {lists?.map((item: any) => {
          return (
            <div className="comment-lists_item" key={item?.id}>
              <img alt="user" className="avatar" src={item?.avatar} />
              <div className="right">
                <div className="right-top">
                  <p>{item?.username}</p>
                  <p>{timer(item?.createTime)}</p>
                </div>
                <div className="right-bottom">{item?.info}</div>
              </div>
            </div>
          );
        })}
        <ShowLoading showLoading={showLoading} />
      </div>
    </div>
  );
};

export default Lists;
