import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaHome } from 'react-icons/fa';
import { GiTrophy } from 'react-icons/gi';

import { motion } from 'framer-motion';
import { useProfile } from '../contexts/ProfileContext';

import stylesSidebar from '../styles/components/Siderbar.module.css';

const SideBar = () => {
  const { pathname } = useRouter();
  const { login } = useProfile();

  return (
    <aside className={stylesSidebar.container}>
      <div>
        <img src="/favicon.png" alt="" />
      </div>
      <div className={stylesSidebar.menu}>
        <Link href={`/user/${login}`}>
          <span>
            {pathname.includes('/user') &&
              <div className={stylesSidebar.selectedOption}></div>
            }
            <motion.div whileHover={{ scale: 1.1 }}>
              <FaHome size={30} />
              Home
            </motion.div>
          </span>
        </Link>
        <Link href="/ranking">
          <span>
            {pathname == '/ranking' &&
              <div className={stylesSidebar.selectedOption}></div>
            }
            <motion.div whileHover={{ scale: 1.1 }} >
              <GiTrophy size={30} />
                    Rank
            </motion.div>
          </span>
        </Link>
      </div>
    </aside>
  );
}

export default SideBar;
