import axios from 'axios';
import { motion } from 'framer-motion';
import { GetServerSideProps } from 'next';
import { Context } from 'node:vm';
import React, { useEffect, useState } from 'react';
import UserBoardCard from '../components/UserBoardCard';

import styles from '../styles/pages/Ranking.module.css';

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
      <h1>carregando...</h1>
    )
  }

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
