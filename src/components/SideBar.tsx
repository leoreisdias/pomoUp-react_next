import React from 'react';
import Link from 'next/link'
import { FaHome } from 'react-icons/fa';
import { GiTrophy } from 'react-icons/gi';

import styles from '../styles/components/Siderbar.module.css';
import { motion } from 'framer-motion';

const SideBar = () => {
  return (
    <aside className={styles.container}>
      <div>
        <img src="/favicon.png" alt="" />
      </div>
      <div className={styles.menu}>
        <Link href="/">
          <motion.div whileHover={{ scale: 1.1 }}>
            <FaHome size={30} />
                            Home
                    </motion.div>
        </Link>
        <Link href="/ranking">
          <motion.div whileHover={{ scale: 1.1 }}>
            <GiTrophy size={30} />
                    Rank
                </motion.div>
        </Link>
      </div>
    </aside>
  );
}

export default SideBar;
