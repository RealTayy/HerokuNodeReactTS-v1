import { useContext, createContext } from 'react';
import { FriendStore } from '../stores';

export const storeContext = createContext({
  friendStore: new FriendStore()
})

const useStore = () => useContext(storeContext);

export default useStore;