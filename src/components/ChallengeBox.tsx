import React from 'react';
import Lottie from 'react-lottie-player';

import styles from '../styles/components/ChallengeBox.module.css';

import levelUp from '../lotties/level-up.json';

import { useChallenges } from '../contexts/ChallengesContext';
import { useCountdown } from '../contexts/CountdownContext';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenges();
  const { hasFinished, startPauseTime, isInPauseTime } = useCountdown();

  function handleChallengeSucceeded() {
    completeChallenge();
  }

  function handleChallengeFailed() {
    resetChallenge();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`/icons/${activeChallenge.type}.svg`} alt="Corpo Desafio" />
            <strong>Novo Desafio!</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei</button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei</button>
          </footer>

        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <span>
            <Lottie
              loop={false}
              animationData={levelUp}
              play={true}
              style={{ width: 200, height: 200 }}
              speed={0.5}
            />
          </span>
          <p>
            Avance de Level Completando Desafios
          </p>
          {
            hasFinished && !isInPauseTime ?
              <button
                type="button"
                className={styles.pauseTimeButton}
                onClick={startPauseTime}
              >
                Iniciar Pause Time
          </button> : ''
          }

        </div>
      )}
    </div>
  );
}

export default ChallengeBox;
