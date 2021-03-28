import React, { useEffect } from 'react';
import Head from 'next/head';

import Profile from '../../components/Profile';
import Countdown from '../../components/Countdown';
import ExperienceBar from '../../components/ExperienceBar';
import CompletedChallenges from '../../components/CompletedChallenges';
import ChallengeBox from '../../components/ChallengeBox';
import { CountdownProvider } from '../../contexts/CountdownContext';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../../contexts/ChallengesContext';
import { Context } from 'node:vm';
import { useProfile } from '../../contexts/ProfileContext';

import { HomeWrapper, HomeContainer } from '../../styles/pages/Home'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;

  login: String;
  name: String;
  avatar: String;
}



export default function Home(props: HomeProps) {
  const { handleAlreadyLoggedIn } = useProfile();

  useEffect(() => {
    handleAlreadyLoggedIn(props);
  }, [])

  return (

    <HomeWrapper>
      <Head>
        <title>Inicio | Pomo Up</title>
      </Head>

      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <HomeContainer>

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
              <small>v2.5</small>
            </section>
          </CountdownProvider>

        </HomeContainer>
      </ChallengesProvider>
    </HomeWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx: Context) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  const { login, name, avatar } = ctx.req.cookies;

  if (!login) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),

      login: String(login),
      name: String(name),
      avatar_url: String(avatar)
    }
  }
}
