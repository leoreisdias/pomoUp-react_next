import { useState } from 'react';
import { useProfile } from '../contexts/ProfileContext';
import styles from '../styles/components/GithubUsernameModal.module.css';

export function GithubUsernameModal() {
  const { getUserDataFromGithubAPI, isWrongUsername } = useProfile();
  const [githubUsername, setGithubUsername] = useState('');

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>-</header>

        <p>
          {isWrongUsername ? 'Username Inexistente, tente outro' : 'Digite seu Username do GitHub'}
        </p>
        <input type="text" value={githubUsername} onChange={event => setGithubUsername(event.target.value)} />

        <button type="button" onClick={() => getUserDataFromGithubAPI(githubUsername)}>
          <img src="/favicon.png" alt="Fechar Modal" />
          <strong>Iniciar</strong>
        </button>
      </div>
    </div >
  )
}
