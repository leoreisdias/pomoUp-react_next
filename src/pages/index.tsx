import axios from 'axios';
import Cookies from 'js-cookie';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Context } from 'node:vm';
import React from 'react';
import { useEffect, useState } from 'react';
import { useProfile } from '../contexts/ProfileContext';
import styles from '../styles/pages/Landing.module.css';

interface LandingProps {


  name: String;
  avatar_url: String;
  login: String
}

export default function Landing(props: LandingProps) {
  const { push } = useRouter();
  const { setUserGithubInfo } = useProfile();
  const [githubUsername, setGithubUsername] = useState('');
  const [isWrongUsername, setIsWrongUsername] = useState(false);

  useEffect(() => {
    console.log(props);

    if (props.login != 'undefined') {
      setUserGithubInfo(props);
      push(`/user/${props.login}`);
    }
  }, []);


  async function handleSubmit(e) {
    e.preventDefault();
    try {

      const response = await axios.get(`https://api.github.com/users/${githubUsername}`);
      setIsWrongUsername(false);
      setUserGithubInfo(response.data);

      Cookies.set('name', response.data.name);
      Cookies.set('avatar', response.data.avatar_url);
      Cookies.set('username', githubUsername);

      push(`/user/${githubUsername}`);
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
          <input type="text" value={githubUsername} onChange={event => setGithubUsername(event.target.value)} />

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
  const { username, name, avatar } = ctx.req.cookies;

  return {
    props: {
      login: String(username),
      name: String(name),
      avatar_url: String(avatar)
    }
  }
}
