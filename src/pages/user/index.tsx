import React, { FC, useState, useEffect } from 'react';
import { List, Button } from 'antd-mobile';
import { history } from 'umi';
import { useStoreHook } from 'think-react-store';

import './index.less';

const User: FC = (props) => {
  const {
    user: { username, avatar, phone, sign, getUserAsync },
  } = useStoreHook();

  useEffect(() => {
    getUserAsync({
      id: 10,
    });
  }, []);

  const handleEditClick = () => {
    history.push({
      pathname: '/user/edit',
      query: {
        id: '10',
      },
    });
  };

  const handleOutClick = () => {
    history.push({
      pathname: '/login',
    });
  };

  return (
    <div className="user-page">
      <div className="info">
        <div className="set" onClick={handleEditClick}>
          设置
        </div>
        <div className="user">
          <img alt="user" src={avatar || require('../../assets/yay.jpg')} />
          <div className="tel">{phone}</div>
          <div className="sign">{sign}</div>
        </div>
      </div>
      <div className="lists">
        <List>
          <List.Item arrow="horizontal">用户协议</List.Item>
          <List.Item arrow="horizontal">常见问题</List.Item>
          <List.Item arrow="horizontal">联系客服</List.Item>
        </List>
      </div>
      <Button style={{ marginTop: '100px' }} onClick={handleOutClick}>
        退出登录
      </Button>
    </div>
  );
};

export default User;
