import { createContext, ReactNode, useContext, useState } from "react";

interface GithubResponseProps {
  name: string;
  avatar_url: string;
}

interface ProfileContextProps {
  githubName: String;
  githubAvatar: String;
  setUserGithubInfo: (GithubResponseProps) => void;
}

interface ProfileProviderProps {
  children: ReactNode;
  name?: String;
  avatar?: String;
}

export const ProfileContext = createContext({} as ProfileContextProps);

export const ProfileProvider = ({ children, ...rest }: ProfileProviderProps) => {
  const [githubName, setGithubName] = useState(rest.name ?? '');
  const [githubAvatar, setGithubAvatar] = useState(rest.avatar ?? '');

  function setUserGithubInfo(data: GithubResponseProps) {
    setGithubName(data.name);
    setGithubAvatar(data.avatar_url);
  }

  return (
    <ProfileContext.Provider value={{
      githubName,
      githubAvatar,
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

