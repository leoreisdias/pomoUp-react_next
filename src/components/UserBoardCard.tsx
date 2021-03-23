import React from 'react';

import styles from '../styles/components/UserBoardCard.module.css';
import Profile from './Profile';

const UserBoardCard = () => {
  return (
    <main className={styles.cardContainer}>
      <span>
        1
      </span>
      <div>
        <Profile />
        <strong><span>24</span> completados</strong>
        <strong><span>14000</span> xp</strong>
      </div>
    </main>
  );
}

export default UserBoardCard;
