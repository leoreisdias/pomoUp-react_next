import ExperienceBar from '../components/ExperienceBar';

import React from 'react';
import Profile from '../components/Profile';

import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };

  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Pomo Up</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}
