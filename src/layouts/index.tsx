import React from 'react';
import { MenuBar } from '@/components';
import { useLocation } from 'umi';
import { StoreProvider } from 'think-react-store';
import * as store from '../store';

const BasicLayout: React.FC = (props) => {
  const location = useLocation();
  const paths = ['/', '/order', '/user'];
  return (
    <StoreProvider store={store}>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      />
      {props.children}
    </StoreProvider>
  );
};

export default BasicLayout;
