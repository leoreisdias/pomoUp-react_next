import React, { useContext } from 'react';
import { motion } from "framer-motion"
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useProfile } from '../contexts/ProfileContext';

import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = (props) => {
  const { level } = useContext(ChallengesContext);
  const { githubName, githubAvatar } = useProfile();

  return (
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
  )
}

export default Profile;
