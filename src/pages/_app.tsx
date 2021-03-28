import '../styles/global.css';
import MainLayout from '../components/MainLayout';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProfileProvider } from '../contexts/ProfileContext';
import { useRouter } from 'next/router';
import stylesLogin from '../../styles/pages/Home.module.css';
import stylesProfile from '../styles/components/Profile.module.css';
import stylesRank from '../styles/pages/Ranking.module.css';
import stylesSidebar from '../styles/components/Siderbar.module.css';
import stylesBoard from '../styles/components/UserBoardCard.module.css';
import stylesMain from '../styles/components/MainLayout.module.css';
import stylesCount from '../styles/components/Countdown.module.css';
import stylesChallenge from '../styles/components/CompletedChallenges.module.css';
import stylesBox from '../styles/components/ChallengeBox.module.css';

const pageTransitionVariants = {
  pageInitial: {
    opacity: 0.8,
    x: 1000,
  },
  pageAnimate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    },
  },
  pageExit: {
    opacity: 0,
    x: 1000,
    transition: {
      duration: 1
    },
  }
}

function MyApp({ Component, pageProps, router }) {
  const { pathname } = useRouter();

  return (
    <ProfileProvider >
      <MainLayout>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial={pathname == '/' ? "pageAnimate" : "pageInitial"}
            animate="pageAnimate"
            exit="pageExit"
            variants={pageTransitionVariants}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </MainLayout>
    </ProfileProvider >

  )
}

export default MyApp
