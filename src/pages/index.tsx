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
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { Context } from 'node:vm';
import { ProfileProvider } from '../contexts/ProfileContext';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;

  name: String;
  avatar: String;
  githubModalOpen: boolean;
}

export default function Home(props: HomeProps) {


  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | Pomo Up</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <ProfileProvider name={props.name} avatar={props.avatar} githubModalOpen={props.githubModalOpen}>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </ProfileProvider>
          </section>
        </CountdownProvider>
        <small>v2.2.2</small>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx: Context) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  const { name, avatar } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),

      name: String(name),
      avatar: String(avatar),
      githubModalOpen: Boolean(name)
    }
  }
}
