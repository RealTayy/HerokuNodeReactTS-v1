import { TFriend } from '.';
import { HTMLAttributes } from 'react';

export type TFriendListProps = {
  title?: string,
  friends?: TFriend[],
  isSingle?: boolean,
  isFavorite?: boolean
} & HTMLAttributes<HTMLDivElement>

export type TFriendListItemProps = {
  friend: TFriend
} & HTMLAttributes<HTMLDivElement>