import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Lottie from 'react-lottie-player'
import { motion } from 'framer-motion';
import UserBoardCard from '../components/UserBoardCard';

import stylesRank from '../styles/pages/Ranking.module.css';

import loadingLottie from '../lotties/loading.json';

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
      <div className={stylesRank.loadingContainer}>
        <Lottie
          loop={true}
          animationData={loadingLottie}
          play={true}
          style={{ width: 400, height: 400 }}
          speed={1}
        />
      </div>
    )
  }

  return (

    <main className={stylesRank.wrapper}>
      <Head>
        <title>Inicio | Pomo Up</title>
      </Head>
      <div className={stylesRank.container}>
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
      </div>
    </main>

  );
}

export default Ranking;
