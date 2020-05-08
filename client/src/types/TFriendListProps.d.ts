import { TFriend } from '.';

type TFriendListProps = {
  title?: string,
  friends?: TFriend[],
  isSingle?: boolean,
  isFavorite?: boolean
}

export default TFriendListProps;