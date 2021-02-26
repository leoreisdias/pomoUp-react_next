import React, { useContext } from 'react';
import Lottie from 'react-lottie-player';

import styles from '../styles/components/ChallengeBox.module.css';

import levelUp from '../lotties/level-up.json';

import { ChallengesContext } from '../contexts/ChallengesContext';

const ChallengeBox: React.FC = () => {
    const contextData = useContext(ChallengesContext);

    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { !hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt="Corpo Desafio" />
                        <strong>Novo Desafio!</strong>
                        <p>Arrume uma corda e pule como coelho durante 1 minuto</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Falhei</button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completei</button>
                    </footer>

                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <span>
                                <Lottie
                                    loop={true}
                                    animationData={levelUp}
                                    play={true}
                                    style={{ width: 100, height: 100 }}
                                    speed={1}
                                />
                            </span>
                            Avance de Level Completando Desafios
                        </p>
                    </div>
                )}
        </div>
    );
}

export default ChallengeBox;