import React, { useContext } from 'react';
import { motion } from "framer-motion"
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useProfile } from '../contexts/ProfileContext';

import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = (props) => {
  const { level } = useContext(ChallengesContext);
  const { githubName, githubAvatar } = useProfile();

  return (
    <motion.div
      className={styles.profileContainer}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: .8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        }
      }}
    >
      <img src={String(githubAvatar)} alt=" Avatar" />
      <div>
        <strong>{githubName}</strong>
        <p>
          <img src="/icons/level.svg" alt="level" />
                    Level {level}
        </p>
      </div>
    </motion.div>
  )
}

export default Profile;
