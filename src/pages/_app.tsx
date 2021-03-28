import React from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

import MainLayout from '../components/MainLayout';

import { ProfileProvider } from '../contexts/ProfileContext';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

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
      <ThemeProvider theme={theme}>
        <MainLayout>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={router.route}
              initial={pathname == '/' ? "pageAnimate" : "pageInitial"}
              animate="pageAnimate"
              exit={pathname == '/' ? "pageAnimate" : "pageExit"}
              variants={pageTransitionVariants}
            >
              <Component {...pageProps} />
              <GlobalStyle />
            </motion.div>
          </AnimatePresence>
        </MainLayout>
      </ThemeProvider>
    </ProfileProvider >

  )
}

export default MyApp
