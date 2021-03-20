import React from 'react';
import SideBar from './SideBar';

import styles from '../styles/components/MainLayout.module.css';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <SideBar />
      <article className={styles.content}>
        {children}
      </article>
    </div>
  );
}

export default MainLayout;
