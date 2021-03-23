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
        <section>
          <div>
            <strong>POSIÇÃO</strong>
            <strong>USUÁRIO</strong>
            <strong>DESAFIOS</strong>
            <strong>EXPERIÊNCIA</strong>
          </div>
          <UserBoardCard />
        </section>
      </div>
    </main>

  );
}

export default Ranking;
