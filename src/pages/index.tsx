import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Context } from 'node:vm';
import React from 'react';
import { useState } from 'react';
import { useProfile } from '../contexts/ProfileContext';
import styles from '../styles/pages/Landing.module.css';

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

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/users/${login}`);
      setIsWrongUsername(false);

      await handleLoginAndUserInfo(response.data);
      push(`/user/${login}`);

    } catch {
      setIsWrongUsername(true);
    }
  }

  return (
    (
      <div className={styles.overlay}>
        <Head>
          <title>Inicio | Pomo Up</title>
        </Head>
        <div className={styles.container}>
          <header>-</header>

          <p>
            {isWrongUsername ? 'Username Inexistente, tente outro' : 'Digite seu Username do GitHub'}
          </p>
          <input type="text" value={login} onChange={event => setLogin(event.target.value)} />

          <button type="button" onClick={handleSubmit}>
            <img src="/favicon.png" alt="Fechar Modal" />
            <strong>Iniciar</strong>
          </button>
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
