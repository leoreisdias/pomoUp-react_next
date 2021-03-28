import React from 'react';
import { useChallenges } from '../contexts/ChallengesContext';

import { CurrentExperience, ExperienceBarContainer } from '../styles/components/ExperienceBar'

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useChallenges();

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

  return (
    <ExperienceBarContainer>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <CurrentExperience style={{ left: `${percentToNextLevel}%` }} >
          {currentExperience}xp
        </CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </ExperienceBarContainer>
  );
}

export default ExperienceBar;
