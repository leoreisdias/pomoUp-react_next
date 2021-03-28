import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { GiTrophy } from 'react-icons/gi';

import { motion } from 'framer-motion';
import { useProfile } from '../contexts/ProfileContext';

import { Menu, SelectedOption, SidebarContainer } from '../styles/components/Sidebar'

const SideBar = () => {
  const { pathname, push } = useRouter();
  const { login, handleLoggout } = useProfile();

  function handleGoOut() {
    handleLoggout();
    push('/');
  }

  return (
    <SidebarContainer>
      <div>
        <img src="/favicon.png" alt="" />
      </div>
      <Menu>
        <Link href={`/user/${login}`}>
          <span>
            {pathname.includes('/user') &&
              <SelectedOption></SelectedOption>
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
              <SelectedOption></SelectedOption>
            }
            <motion.div whileHover={{ scale: 1.1 }} >
              <GiTrophy size={30} />
                    Rank
            </motion.div>
          </span>
        </Link>

      </Menu>
      <motion.div whileHover={{ scale: 1.1 }} onClick={handleGoOut}>
        <FaSignOutAlt size={30} />
                    Sair
        </motion.div>
    </SidebarContainer>
  );
}

export default SideBar;
