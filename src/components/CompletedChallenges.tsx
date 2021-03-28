import React from 'react';
import { useChallenges } from '../contexts/ChallengesContext';

import stylesChallenge from '../styles/components/CompletedChallenges.module.css';

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useChallenges();

  return (
    <div className={stylesChallenge.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}

export default CompletedChallenges;
