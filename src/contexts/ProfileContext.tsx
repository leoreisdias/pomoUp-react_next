import { createContext, ReactNode, useContext, useState } from "react";

interface GithubResponseProps {
  name: string;
  avatar_url: string;
  username: string;
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
  const [githubName, setGithubName] = useState('');
  const [githubAvatar, setGithubAvatar] = useState('');
  const [githubUsername, setGithubUsername] = useState('');

  function setUserGithubInfo(data: GithubResponseProps) {
    setGithubName(data.name);
    setGithubAvatar(data.avatar_url);
    setGithubUsername(data.username)
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

