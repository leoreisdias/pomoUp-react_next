import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

interface GithubResponseProps {
  name: string;
  avatar_url: string;
  login: string;
}

interface ProfileContextProps {
  name: string;
  avatar: string;
  login: string;
  handleLoginAndUserInfo: (GithubResponseProps) => void;
  handleAlreadyLoggedIn: (GithubResponseProps) => void;
  handleLoggout: () => void;
}

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextProps);

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const { push } = useRouter();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [login, setLogin] = useState('');

  function handleLoggout() {
    Cookies.remove('login');
    Cookies.remove('level');
    Cookies.remove('currentExperience');
    Cookies.remove('challengesCompleted');
    setLogin('');
  }

  function handleAlreadyLoggedIn(data: GithubResponseProps) {
    setName(data.name);
    setAvatar(data.avatar_url);
    setLogin(data.login);
  }

  async function handleLoginAndUserInfo(data: GithubResponseProps) {
    handleAlreadyLoggedIn(data);

    const response = await axios.post('/api/login', {
      login: data.login
    });

    const { user } = response.data;

    if (!user) {
      await axios.post('/api/subscribe', {
        login: data.login,
        name: data.name,
        avatar: data.avatar_url,
        level: 1,
        currentExperience: 0,
        challengesCompleted: 0
      })
    } else {
      Cookies.set('level', String(user.level));
      Cookies.set('currentExperience', String(user.currentExperience));
      Cookies.set('challengesCompleted', String(user.challengesCompleted));
    }

    Cookies.set('name', data.name);
    Cookies.set('avatar', data.avatar_url);
    Cookies.set('login', data.login);

  }

  return (
    <ProfileContext.Provider value={{
      name,
      avatar,
      login,
      handleLoginAndUserInfo,
      handleAlreadyLoggedIn,
      handleLoggout
    }}>
      {children}

    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const context = useContext(ProfileContext);

  return context;
}

