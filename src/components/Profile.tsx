import React from 'react';
import { useChallenges } from '../contexts/ChallengesContext';
import { useProfile } from '../contexts/ProfileContext';

import { ProfileContainer } from '../styles/components/Profile';

const Profile: React.FC = (props) => {
  const { level } = useChallenges();
  const { name, avatar } = useProfile();

  return (
    <ProfileContainer>
      <img src={String(avatar)} alt=" Avatar" />
      <div>
        <strong>{name}</strong>
        <p>
          <img src="/icons/level.svg" alt="level" />
                    Level {level}
        </p>
      </div>
    </ProfileContainer>
  )
}

export default Profile;
