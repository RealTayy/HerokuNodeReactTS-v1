import React, { createContext } from 'react';
import { TFriendStore, TFriendStoreProviderProps } from '../types';
import { useLocalStore } from 'mobx-react';
import { FriendStore } from '../stores';

export const friendStoreContext = createContext<TFriendStore | null>(null);

export const FriendStoreProvider = ({ children }: TFriendStoreProviderProps) => {
  const store = useLocalStore(FriendStore);
  return <friendStoreContext.Provider value={store}>
    {children}
  </friendStoreContext.Provider>
}