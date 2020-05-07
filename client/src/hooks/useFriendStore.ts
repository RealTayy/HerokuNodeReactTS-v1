import { createContext, useContext } from 'react';
import { TFriendStore } from '../types';
import { friendStoreContext } from '../providers'

const useFriendStore = () => {
  const store = useContext(friendStoreContext);
  if (!store) throw new Error('useFriendStore must be used in a child of its Provider.')
  return store;
}

export default useFriendStore