import React from 'react';
import { useChallenges } from '../contexts/ChallengesContext';
import { useProfile } from '../contexts/ProfileContext';

import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = (props) => {
  const { level } = useChallenges();
  const { name, avatar } = useProfile();

  return (
    <div className={styles.profileContainer}>
      <img src={String(avatar)} alt=" Avatar" />
      <div>
        <strong>{name}</strong>
        <p>
          <img src="/icons/level.svg" alt="level" />
                    Level {level}
        </p>
      </div>
    </div>
  )
}

export default Profile;
