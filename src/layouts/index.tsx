import React from 'react';
import { MenuBar } from '@/components';
import { useLocation } from 'umi';

const BasicLayout: React.FC = props => {
  const location = useLocation()
  const paths = ['/', '/order', '/user'];
  return (
    <div>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      />
      {props.children}
    </div>
  );
};

export default BasicLayout;
