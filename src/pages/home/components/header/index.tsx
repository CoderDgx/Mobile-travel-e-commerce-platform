import React, { FC, useState, memo } from 'react';
import { Link } from 'umi';

const Header: FC = (props) => {
  const [username, setUsername] = useState(localStorage.getItem('username'));
  console.log(username);
  return (
    <div className="header">
      <div className="header-title">民宿</div>
      <div className="header-login">
        {username ? (
          username
        ) : (
          <>
            <Link to="/login">登录</Link> | <Link to="/register">注册</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(Header);
