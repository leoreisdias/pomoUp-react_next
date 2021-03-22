import axios from 'axios';
import Cookies from 'js-cookie';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Context } from 'node:vm';
import { useEffect, useState } from 'react';
import { useProfile } from '../contexts/ProfileContext';
import styles from '../styles/pages/Landing.module.css';

interface LandingProps {
  name: String;
  avatar: String;
  githubUsername: String
}

export default function Landing(props: LandingProps) {
  const { push } = useRouter();
  const { setUserGithubInfo } = useProfile();
  const [githubUsername, setGithubUsername] = useState('');
  const [isWrongUsername, setIsWrongUsername] = useState(false);

  // useEffect(() => {
  //   if (!!props.name) {
  //     const name = Cookies.get('name');
  //     const avatar_url = Cookies.get('avatar');
  //     setUserGithubInfo({ name, avatar_url });
  //     push(`/${githubUsername}`);
  //   }
  // }, []);


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.github.com/users/${githubUsername}`);
      setIsWrongUsername(false);
      setUserGithubInfo(response.data);

      Cookies.set('githubUsername', githubUsername);
      Cookies.set('name', response.data.name);
      Cookies.set('avatar', response.data.avatar_url);

      push(`/${githubUsername}`);
    } catch {
      setIsWrongUsername(true);
    }

  }

  return (
    (
      <div className={styles.overlay}>
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

// export const getServerSideProps: GetServerSideProps = async (ctx: Context) => {
//   const { name, avatar } = ctx.req.cookie;

//   return {
//     props: {
//       name: String(name),
//       avatar: String(avatar)
//     }
//   }
// }
