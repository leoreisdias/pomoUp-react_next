import { useChallenges } from '../contexts/ChallengesContext';

import { LevelUpModalWrapper, LevelUpModalContainer } from '../styles/components/LevelUpModel'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallenges();

  return (
    <LevelUpModalWrapper>
      <LevelUpModalContainer>
        <header>{level}</header>

        <strong>Parabéns!</strong>
        <p>Você alcançou um novo level</p>


        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </LevelUpModalContainer>
    </LevelUpModalWrapper>
  )
}
