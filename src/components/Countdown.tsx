import React, { useEffect, useState } from 'react';

import styles from '../styles/components/Countdown.module.css';

const Countdown: React.FC = () => {
    const [time, setTime] = useState(30 * 60);
    const [active, setActive] = useState(false);

    const minutos = Math.floor(time / 60);
    const seconds = (time % 60);

    const [minuteLeft, minutoRight] = String(minutos).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setActive(true);
    }

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
    }, [active, time])

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

            <button
                type="button"
                className={styles.countdownButton}
                onClick={startCountdown}
            >
                Iniciar um clico
            </button>
        </div>
    );
}

export default Countdown;