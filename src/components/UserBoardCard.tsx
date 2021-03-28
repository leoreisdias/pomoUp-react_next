import { motion } from 'framer-motion';
import React from 'react';

import stylesBoard from '../styles/components/UserBoardCard.module.css';

interface usersProps {
  name: string,
  level: number,
  avatar: string,
  exp: number,
  challenges: number,
  position: number
}

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

const UserBoardCard = (props: usersProps) => {
  return (
    <motion.main className={stylesBoard.cardContainer} variants={cardVariants}>
      <span>
        {props.position}
      </span>
      <div className={stylesBoard.profileContainer}>
        <img src={String(props.avatar)} alt=" Avatar" />
        <div>
          <strong>{props.name}</strong>
          <span>
            <img src="/icons/level.svg" alt="level" />
                    Level {props.level}
          </span>
        </div>
      </div>

      <strong><span>{props.challenges} </span> completados</strong>
      <strong><span>{props.exp}</span> xp</strong>

    </motion.main>
  );
}

export default UserBoardCard;
