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
      <motion.img animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }} src={String(githubAvatar)} alt="Avatar" />
      <div>
        <strong>{githubName}</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
                    Level {level}
        </p>
      </div>
    </div>
  )
}

export default Profile;
