import React from 'react';

import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = (props) => {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/leoreisdias.png" alt="Avatar" />
            <div>
                <strong>Leonardo R. Dias</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}

export default Profile;