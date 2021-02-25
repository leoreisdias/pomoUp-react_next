import ExperienceBar from '../components/ExperienceBar';
import Lottie from 'react-lottie';
import animationData from '../lotties/laptop-working.json';
import React from 'react';
import Profile from '../components/Profile';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };

  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}
