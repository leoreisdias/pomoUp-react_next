import React, { useContext } from 'react';
import Lottie from 'react-lottie-player';

import styles from '../styles/components/ChallengeBox.module.css';

import levelUp from '../lotties/level-up.json';

import { ChallengesContext } from '../contexts/ChallengesContext';

const ChallengeBox: React.FC = () => {
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);


    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Corpo Desafio" />
                        <strong>Novo Desafio!</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={resetChallenge}
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
                </div>
            )}
        </div>
    );
}

export default ChallengeBox;