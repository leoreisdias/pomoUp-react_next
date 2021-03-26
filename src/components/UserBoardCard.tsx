import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useProfile } from '../contexts/ProfileContext';

import styles from '../styles/components/UserBoardCard.module.css';
import Profile from './Profile';

const UserBoardCard = () => {
  const { level } = useContext(ChallengesContext);
  const { githubName, githubAvatar } = useProfile();

  return (
    <main className={styles.cardContainer}>
      <span>
        1
      </span>
      <div className={styles.profileContainer}>
        <img src={String(githubAvatar)} alt=" Avatar" />
        <div>
          <strong>{githubName}</strong>
          <p>
            <img src="/icons/level.svg" alt="level" />
                    Level {level}
          </p>
        </div>
      </div>
      <strong><span>24</span> completados</strong>
      <strong><span>14000</span> xp</strong>
    </main>
  );
}

export default UserBoardCard;
