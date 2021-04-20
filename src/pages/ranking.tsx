import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player'

import UserBoardCard from '../components/UserBoardCard';

import { RankingWrapper, LoadingContainer, RankingContainer, TopRankContainer } from '../styles/pages/Ranking'

import loadingLottie from '../lotties/loading.json';
import TopRankCard from '../components/TopRankCard';

interface usersProps {
  _id: string,
  login: string,
  name: string,
  avatar: string,
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

const Ranking = (props: usersProps) => {
  const [users, setUsers] = useState<usersProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get('/api/list');
      setUsers(response.data.users);
      setLoading(false);
    }

    loadUsers();
  }, [])

  if (loading) {
    return (
      <LoadingContainer>
      <Lottie
      loop={true}
      animationData={loadingLottie}
      play={true}
      style={{ width: 400, height: 400 }}
      speed={1}
      />
      </LoadingContainer>
      )
    }

    return (

      <RankingWrapper>
      <Head>
      <title>Inicio | Pomo Up</title>
      </Head>
      <RankingContainer>
      {users &&
        <TopRankContainer initial="initial" animate="enter" exit="exit" variants={{
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
        <TopRankCard  name={users[0].name}
        avatar_url={users[0].avatar}
        github_url={`https://github.com/${users[0].login}`}
        position={1} />

        <TopRankCard  name={users[1].name}
        avatar_url={users[1].avatar}
        github_url={`https://github.com/${users[1].login}`}
        position={2} />

        <TopRankCard  name={users[2].name}
        avatar_url={users[2].avatar}
        github_url={`https://github.com/${users[2].login}`}
        position={3} />
        </TopRankContainer>
      }
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
      {users &&
        users.map((user, index) => {
          return (
            <UserBoardCard key={user._id} name={user.name} exp={user.currentExperience} challenges={user.challengesCompleted} avatar={user.avatar} position={index + 1} level={user.level} />
            )
          })
        }

        </motion.section>
        </RankingContainer>
        </RankingWrapper>

        );
      }

      export default Ranking;
