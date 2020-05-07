import React, { createContext, ReactNode } from 'react';
import { TFriendStore } from '../types';
import { useLocalStore } from 'mobx-react';
import { createFriendStore } from '../stores';


// TODO: Export to types folder..?
type TFriendStoreProviderProps = {
  children: ReactNode
}

export const friendStoreContext = createContext<TFriendStore | null>(null);

export const FriendStoreProvider = ({ children }: TFriendStoreProviderProps) => {
  const store = useLocalStore(createFriendStore);
  return <friendStoreContext.Provider value={store}>
    {children}
  </friendStoreContext.Provider>
}