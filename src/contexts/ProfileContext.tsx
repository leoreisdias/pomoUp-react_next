import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface GithubResponseProps {
  name: string;
  avatar_url: string;
  login: string;
}

interface ProfileContextProps {
  githubName: String;
  githubAvatar: String;
  githubUsername: String;
  setUserGithubInfo: (GithubResponseProps) => void;
}

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextProps);

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const { push } = useRouter();
  const [githubName, setGithubName] = useState('');
  const [githubAvatar, setGithubAvatar] = useState('');
  const [githubUsername, setGithubUsername] = useState('');

  useEffect(() => {
    if (!githubUsername) {
      push('/')
    }
  }, [githubUsername])

  function setUserGithubInfo(data: GithubResponseProps) {
    setGithubName(data.name);
    setGithubAvatar(data.avatar_url);
    setGithubUsername(data.login)
  }

  return (
    <ProfileContext.Provider value={{
      githubName,
      githubAvatar,
      githubUsername,
      setUserGithubInfo
    }}>
      {children}

    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const context = useContext(ProfileContext);

  return context;
}

