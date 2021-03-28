import React from 'react';
import Lottie from 'react-lottie-player';

import { useChallenges } from '../contexts/ChallengesContext';
import { useCountdown } from '../contexts/CountdownContext';

import levelUp from '../lotties/level-up.json';

import { ChallengeActive, ChallengeNotActive, ChallengeButton, ChallengeBoxContainer } from '../styles/components/ChallengeBox'

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
    <ChallengeBoxContainer>
      { activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`/icons/${activeChallenge.type}.svg`} alt="Corpo Desafio" />
            <strong>Novo Desafio!</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <ChallengeButton
              color="fail"
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei</ChallengeButton>
            <ChallengeButton
              color="succeed"
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei</ChallengeButton>
          </footer>

        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
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
              <ChallengeButton
                color="succeed"
                type="button"
                onClick={startPauseTime}
              >
                Iniciar Pause Time
          </ChallengeButton> : ''
          }

        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  );
}

export default ChallengeBox;
