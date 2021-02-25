import React from 'react';

import styles from '../styles/components/Countdown.module.css';

const Countdown: React.FC = () => {
    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>2</span>
                    <span>5</span>
                </div>
                <span>:</span>
                <div>
                    <span>0</span>
                    <span>0</span>
                </div>
            </div>

            <button type="button" className={styles.countdownButton}>
                Iniciar um clico
            </button>
        </div>
    );
}

export default Countdown;