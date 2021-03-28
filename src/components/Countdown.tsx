import React from 'react';
import Lottie from 'react-lottie-player';
import completed from '../lotties/completed.json';

import { useCountdown } from '../contexts/CountdownContext';

import { CountdownContainer, CountdownButton } from '../styles/components/Countdown'

const Countdown: React.FC = () => {
  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown, isInPauseTime } = useCountdown();

  const [minuteLeft, minutoRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minutoRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      { hasFinished && !isInPauseTime ? (
        <CountdownButton
          disabled
          whileHover={{
            scale: [1, 1.2, 1.1],
            rotate: [0, 2, -2, 0],
            transition: {
              duration: .2
            }
          }}
          whileTap={{ scale: 0.9 }}
        >
          Ciclo Encerrado
          <span>
            <Lottie
              loop={false}
              animationData={completed}
              play={true}
              style={{ width: 100, height: 100 }}
            />
          </span>
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton
              type="button"
              active={true}
              onClick={resetCountdown}
              whileHover={{
                scale: [1, 1.2, 1.1],
                rotate: [0, 2, -2, 0],
                transition: {
                  duration: .2
                }
              }}
              whileTap={{ scale: 0.9 }}
            >
              Abandonar Ciclo
            </CountdownButton>
          ) : (
            <CountdownButton
              onClick={startCountdown}
              whileHover={{
                scale: [1, 1.2, 1.1],
                rotate: [0, 2, -2, 0],
                transition: {
                  duration: .2
                }
              }}
              whileTap={{ scale: 0.9 }}
            >
              Iniciar um Ciclo
            </CountdownButton>
          )}
        </>
      )}


    </>
  );
}

export default Countdown;
