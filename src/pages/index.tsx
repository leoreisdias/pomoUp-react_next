import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Context } from 'node:vm';
import { useEffect, useState } from 'react';
import { useProfile } from '../contexts/ProfileContext';
import styles from '../styles/pages/Landing.module.css';

interface userProps {
  githubUsername: string;
  avatar: string;
  name: string;
}

interface LandingProps {
  user: userProps;
}

export default function Landing(props: LandingProps) {
  const { push } = useRouter();
  const { isWrongUsername } = useProfile();
  const [githubUsername, setGithubUsername] = useState('');

  function handleSubmit() {
    push(`/${githubUsername}`);
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
