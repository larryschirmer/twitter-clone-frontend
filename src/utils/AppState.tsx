import { createContext, useContext, ReactNode, useState } from 'react';

export const appState = {
  isLoggedIn: false,
  reloadTweets: false,
  setIsLoggedIn: (value: boolean) => {},
  setReloadTweets: (value: boolean) => {},
};

export const StateContext = createContext(appState);
StateContext.displayName = 'State';

export const Provider = StateContext.Provider;

const useAppState = () => {
  const state = useContext<typeof appState>(StateContext);
  if (!state) console.warn('context is undefined, pleace verify parent has implemented Provider');

  return state;
};

type Props = {
  children: ReactNode;
};

export const AppStateProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [reloadTweets, setReloadTweets] = useState(false);

  const value: typeof appState = {
    isLoggedIn,
    reloadTweets,
    setIsLoggedIn: (value: boolean) => setIsLoggedIn(value),
    setReloadTweets: (value: boolean) => setReloadTweets(value),
  };
  return <Provider {...{ value }}>{children}</Provider>;
};

export default useAppState;
