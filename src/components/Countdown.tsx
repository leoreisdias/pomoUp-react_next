import React, { useContext } from 'react';
import Lottie from 'react-lottie-player';
import completed from '../lotties/completed.json';

import styles from '../styles/components/Countdown.module.css';
import { CountdownContext } from '../contexts/CountdownContext';
import { motion } from 'framer-motion';


const Countdown: React.FC = () => {
  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown, isInPauseTime } = useContext(CountdownContext);

  const [minuteLeft, minutoRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
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
          className={styles.countdownButton}
          whileHover={{ scale: 1.1 }}
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
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Abandonar Ciclo
            </motion.button>
          ) : (
            <motion.button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
              whileHover={{ scale: 1.1 }}
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
