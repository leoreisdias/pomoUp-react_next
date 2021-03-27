import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: Number;
  seconds: Number;
  hasFinished: Boolean;
  isActive: Boolean;
  isInPauseTime: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
  startPauseTime: () => void;
}


interface CountdownProviderProps {
  children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge, resetChallenge, activeChallenge } = useContext(ChallengesContext);


  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [isInPauseTime, setIsInPauseTime] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = (time % 60);

  function startCountdown() {
    if (activeChallenge)
      return;
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
    setHasFinished(false);
    setIsInPauseTime(false);
  }

  function startPauseTime() {
    setIsInPauseTime(true);
    clearTimeout(countdownTimeout);
    setIsActive(true);
    setTime(0.15 * 60);
    startNewChallenge();
  }

  useEffect(() => {

    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);

      if (isInPauseTime) {
        resetCountdown();
      }
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        isInPauseTime,
        startCountdown,
        resetCountdown,
        startPauseTime
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

export function useCountdown() {
  const context = useContext(CountdownContext);

  return context;
}
