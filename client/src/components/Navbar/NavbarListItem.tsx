import React, { FunctionComponent, HTMLAttributes } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../hooks';
import { Link } from 'react-router-dom';
import { _NavbarListItem } from './NavbarStyles';
import { TNavbarListItemProps } from './TNavbarProps';

const NavbarListItem: FunctionComponent<TNavbarListItemProps> =
  observer(({
    link
  }) => {
    const { locationStore } = useStore();
    return (
      <_NavbarListItem>
        <Link to={link.to}>{link.text} {link.to === locationStore.pathname && '*'}</Link>
      </_NavbarListItem>
    )
  })

export default NavbarListItem
