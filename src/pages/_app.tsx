import '../styles/global.css';
import MainLayout from '../components/MainLayout';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProfileProvider } from '../contexts/ProfileContext';

function MyApp({ Component, pageProps, router }) {
  return (
    <ProfileProvider >
      <MainLayout>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                opacity: 0.8,
                x: 1000,
              },
              pageAnimate: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1
                },
              },
              pageExit: {
                opacity: 0,
                x: 1000,
                transition: {
                  duration: 0.5
                },
              }
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </MainLayout>
    </ProfileProvider >

  )
}

export default MyApp
