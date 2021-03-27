import { motion } from 'framer-motion';
import React from 'react';
import UserBoardCard from '../components/UserBoardCard';

import styles from '../styles/pages/Ranking.module.css';

const Ranking = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>Rank Pomo-Up</h2>
        </header>
        <motion.section initial="initial" animate="enter" exit="exit" variants={{
          enter: {
            transition: {
              staggerChildren: 0.4
            }
          },
          exit: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}>
          <div>
            <strong>POSIÇÃO</strong>
            <strong>USUÁRIO</strong>
            <strong>DESAFIOS</strong>
            <strong>EXPERIÊNCIA</strong>
          </div>
          <UserBoardCard />
          <UserBoardCard />
          <UserBoardCard />
          <UserBoardCard />
          <UserBoardCard />
          <UserBoardCard />
          <UserBoardCard />
          <UserBoardCard />
          <UserBoardCard />
          <UserBoardCard />

        </motion.section>
      </div>
    </main>

  );
}

export default Ranking;
