import { createContext, useContext } from 'react';

class AppState {
  isLoggedIn: boolean;
  constructor() {
    this.isLoggedIn = false;
    this.setIsLoggedIn = this.setIsLoggedIn.bind(this);
  }
  setIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
}

export const appState = new AppState();

export const StateContext = createContext(appState);
StateContext.displayName = 'State';

export const Provider = StateContext.Provider;

export type State = typeof AppState;

const useAppState = () => {
  const state = useContext<AppState>(StateContext);

  if (!state) console.warn('context is undefined, pleace verify parent has implemented Provider');

  return state;
};

export default useAppState;
