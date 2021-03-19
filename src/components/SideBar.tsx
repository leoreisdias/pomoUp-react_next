import React from 'react';
import Link from 'next/link'
import { FaHome } from 'react-icons/fa';
import { GiTrophy } from 'react-icons/gi';

import styles from '../styles/components/Siderbar.module.css';

const SideBar = () => {
    return (
        <aside className={styles.container}>
            <div>
                <img src="/favicon.png" alt="" />
            </div>
            <div className={styles.menu}>
                <Link href="/">
                    <div>
                        <FaHome size={30} />
                            Home
                    </div>
                </Link>
                <Link href="/ranking">
                    <div>
                        <GiTrophy size={30} />
                    Rank
                </div>
                </Link>
            </div>
        </aside>
    );
}

export default SideBar;