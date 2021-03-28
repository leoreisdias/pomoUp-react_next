import React from 'react';
import { useChallenges } from '../contexts/ChallengesContext';

import { CompletedChallengesContainer } from '../styles/components/CompletedChallenges'

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useChallenges();

  return (
    <CompletedChallengesContainer>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </CompletedChallengesContainer>
  );
}

export default CompletedChallenges;
