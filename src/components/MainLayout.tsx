import React from 'react';
import SideBar from './SideBar';

import { MainContainer } from '../styles/components/MainLayout';

const MainLayout: React.FC = ({ children }) => {

  return (
    <MainContainer>
      <SideBar />

      <article>
        {children}
      </article>
    </MainContainer>
  );
}

export default MainLayout;
