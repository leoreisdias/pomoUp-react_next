import React from 'react';
import SideBar from './SideBar';

import stylesMain from '../styles/components/MainLayout.module.css';

const MainLayout: React.FC = ({ children }) => {

  return (
    <div className={stylesMain.mainContainer}>
      <SideBar />

      <article className={stylesMain.content}>
        {children}
      </article>
    </div>
  );
}

export default MainLayout;
