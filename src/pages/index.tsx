import React from 'react';
import axios from 'axios';
import Head from 'next/head';

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Context } from 'node:vm';
import { useState } from 'react';
import { useProfile } from '../contexts/ProfileContext';
import Lottie from 'react-lottie-player'

import styles from '../styles/pages/Landing.module.css';
import loadingLottie from '../lotties/loading.json';

interface LandingProps {
  name: String;
  avatar_url: String;
  login: String
}

export default function Landing(props: LandingProps) {
  const { push } = useRouter();
  const { handleLoginAndUserInfo } = useProfile();
  const [login, setLogin] = useState('');
  const [isWrongUsername, setIsWrongUsername] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/${login}`);
      setIsWrongUsername(false);

      await handleLoginAndUserInfo(response.data);

      push(`/user/${login}`);

      setIsLoading(false);
    } catch {
      setIsWrongUsername(true);
      setLogin('');

      setIsLoading(false);
    }
  }

  return (
    (
      <div className={styles.overlay}>
        <Head>
          <title>Inicio | Pomo Up</title>
        </Head>
        <div className={styles.container}>
          {
            isLoading ? (
              <span>
                <Lottie
                  loop={true}
                  animationData={loadingLottie}
                  play={true}
                  style={{ width: 400, height: 400 }}
                  speed={1}
                />
              </span>
            ) :
              (<>
                <header>-</header>

                <input type="text" value={login} onChange={event => setLogin(event.target.value)} placeholder={isWrongUsername ? 'Username Inexistente' : 'Github Username'} />
                {isWrongUsername && <small>Username Inválido!</small>}

                <button type="button" onClick={handleSubmit}>
                  <img src="/favicon.png" alt="Fechar Modal" />
                  <strong>Iniciar</strong>
                </button>
              </>)}
        </div>
      </div >
    )
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: Context) => {
  const { login } = ctx.req.cookies;

  if (login) {
    return {
      redirect: {
        destination: `/user/${login}`,
        permanent: false
      }
    }
  }

  return {
    props: {
      login: String(login),
    }
  }
}
