import React, { useContext } from 'react';
import Lottie from 'react-lottie-player';
import completed from '../lotties/completed.json';

import styles from '../styles/components/Countdown.module.css';
import { CountdownContext } from '../contexts/CountdownContext';
import { ChallengesContext } from '../contexts/ChallengesContext';


const Countdown: React.FC = () => {
    const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext);
    const { hasDoneChallenge } = useContext(ChallengesContext)

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

            { hasFinished && !hasDoneChallenge ? (
                <button
                    disabled
                    className={styles.countdownButton}
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
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar Ciclo
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um Ciclo
                        </button>
                    )}
                </>
            )}


        </div>
    );
}

export default Countdown;