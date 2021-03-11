import React from 'react';
import Head from 'next/head';

import Profile from '../components/Profile';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import CompletedChallenges from '../components/CompletedChallenges';
import ChallengeBox from '../components/ChallengeBox';


import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { GetServerSideProps } from 'next';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Pomo Up</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {

    }
  }
}
