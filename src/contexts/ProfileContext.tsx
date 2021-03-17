import axios from "axios";
import Cookies from "js-cookie";
import { createContext, ReactNode, useContext, useState } from "react";
import { GithubUsernameModal } from "../components/GithubUsernameModal";

interface ProfileContextProps {
  isGithubModalOpen: Boolean;
  githubName: String;
  githubAvatar: String;
  isWrongUsername: Boolean;
  getUserDataFromGithubAPI: (string) => void;
}

interface ProfileProviderProps {
  children: ReactNode;
  name: String;
  avatar: String;
  githubModalOpen: boolean;
}

export const ProfileContext = createContext({} as ProfileContextProps);

export const ProfileProvider = ({ children, ...rest }: ProfileProviderProps) => {
  const [isGithubModalOpen, setIsGithubModalOpen] = useState(!rest.githubModalOpen);
  const [githubName, setGithubName] = useState(rest.name ?? '');
  const [githubAvatar, setGithubAvatar] = useState(rest.avatar ?? '');
  const [isWrongUsername, setIsWrongUsername] = useState(false);

  async function getUserDataFromGithubAPI(githubUsername: string) {
    try {
      const response = await axios.get(`https://api.github.com/users/${githubUsername}`);
      setIsWrongUsername(false);
      setGithubName(response.data.name);
      setGithubAvatar(response.data.avatar_url);

      Cookies.set('name', response.data.name);
      Cookies.set('avatar', response.data.avatar_url);

      handleGithubModal();
    } catch {
      setIsWrongUsername(true);
    }
  }

  function handleGithubModal() {
    setIsGithubModalOpen(false);
  }

  return (
    <ProfileContext.Provider value={{
      githubName,
      githubAvatar,
      isGithubModalOpen,
      getUserDataFromGithubAPI,
      isWrongUsername
    }}>
      {children}

      {isGithubModalOpen && <GithubUsernameModal />}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const context = useContext(ProfileContext);

  return context;
}
