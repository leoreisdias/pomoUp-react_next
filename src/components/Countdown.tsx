import React from 'react';
import Lottie from 'react-lottie-player';
import completed from '../lotties/completed.json';

import stylesCount from '../styles/components/Countdown.module.css';
import { useCountdown } from '../contexts/CountdownContext';
import { motion } from 'framer-motion';


const Countdown: React.FC = () => {
  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown, isInPauseTime } = useCountdown();

  const [minuteLeft, minutoRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={stylesCount.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minutoRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished && !isInPauseTime ? (
        <motion.button
          disabled
          className={stylesCount.countdownButton}
          whileHover={{
            scale: [1, 1.5, 1.2],
            rotate: [0, 10, -10, 0],
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
        </motion.button>
      ) : (
        <>
          {isActive ? (
            <motion.button
              type="button"
              className={`${stylesCount.countdownButton} ${stylesCount.countdownButtonActive}`}
              onClick={resetCountdown}
              whileHover={{
                scale: [1, 1.5, 1.2],
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: .2
                }
              }}
              whileTap={{ scale: 0.9 }}
            >
              Abandonar Ciclo
            </motion.button>
          ) : (
            <motion.button
              type="button"
              className={stylesCount.countdownButton}
              onClick={startCountdown}
              whileHover={{
                scale: [1, 1.5, 1.2],
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: .2
                }
              }}
              whileTap={{ scale: 0.9 }}
            >
              Iniciar um Ciclo
            </motion.button>
          )}
        </>
      )}


    </div>
  );
}

export default Countdown;
