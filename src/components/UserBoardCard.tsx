import { motion } from 'framer-motion';
import React from 'react';
import { useChallenges } from '../contexts/ChallengesContext';
import { useProfile } from '../contexts/ProfileContext';

import styles from '../styles/components/UserBoardCard.module.css';

const cardVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
}

const UserBoardCard = () => {
  const { level } = useChallenges();
  const { githubName, githubAvatar } = useProfile();

  return (
    <motion.main className={styles.cardContainer} variants={cardVariants}>
      <span>
        1
      </span>
      <div className={styles.profileContainer}>
        <img src={String(githubAvatar)} alt=" Avatar" />
        <div>
          <strong>{githubName}</strong>
          <span>
            <img src="/icons/level.svg" alt="level" />
                    Level {level}
          </span>
        </div>
      </div>

      <strong><span>24 </span> completados</strong>
      <strong><span>14000</span> xp</strong>

    </motion.main>
  );
}

export default UserBoardCard;
