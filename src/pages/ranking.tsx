import React from 'react';
import Countdown from '../components/Countdown';
import SideBar from '../components/SideBar';

import styles from '../styles/pages/Ranking.module.css';

const Ranking = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>Rank Pomo-Up</h2>
        </header>
      </div>
    </section>

  );
}

export default Ranking;
