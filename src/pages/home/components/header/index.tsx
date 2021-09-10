import React, { FC } from 'react';
import { Link } from 'umi';

const Header: FC = props => {
  return (
    <div className="header">
      <div className="header-title">民宿</div>
      <div className="header-login">
        <Link to="/login">登录</Link> | <Link to="/register">注册</Link>
      </div>
    </div>
  );
};

export default Header;
