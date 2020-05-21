import { HTMLAttributes } from 'react';

export type TNavbarListItemProps = {
  link: {
    to: string,
    text: string
  }
} & HTMLAttributes<HTMLLIElement>