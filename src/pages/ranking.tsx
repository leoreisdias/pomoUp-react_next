import React from 'react';
import SideBar from '../components/SideBar';

import styles from '../styles/pages/Ranking.module.css';

const Ranking = () => {
    return (
        <>
            <main className={styles.wrapper}>
                <SideBar />
                <div className={styles.container}></div>
            </main>
        </>

    );
}

export default Ranking;