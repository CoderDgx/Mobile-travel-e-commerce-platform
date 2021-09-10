import React, { FC } from 'react';
import { TabBar } from 'antd-mobile';
import {
  HomeOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { history } from 'umi';
import './index.less';

interface MenuBarProps {
  show?: boolean;
  pathname?: string;
}

const MenuBar: FC<MenuBarProps> = props => {
  const { show, pathname } = props;
  const items = [
    {
      title: '首页',
      selectedIcon: <HomeOutlined />,
      icon: <HomeOutlined />,
      link: '/',
    },
    {
      title: '订单',
      selectedIcon: <ShoppingOutlined />,
      icon: <ShoppingOutlined />,
      link: '/order',
    },
    {
      title: '我的',
      selectedIcon: <UserOutlined />,
      icon: <UserOutlined />,
      link: '/user',
    },
  ];

  return (
    <div className="menu-bar">
      <TabBar hidden={!show}>
        {items.map(item => {
          return (
            <TabBar.Item
              key={item.link}
              title={item.title}
              icon={item.icon}
              selectedIcon={item.selectedIcon}
              selected={pathname === item.link}
              onPress={() => history.push(item.link)}
            />
          );
        })}
      </TabBar>
    </div>
  );
};

MenuBar.defaultProps = {
  show: false,
  pathname: '',
};

export default MenuBar;
