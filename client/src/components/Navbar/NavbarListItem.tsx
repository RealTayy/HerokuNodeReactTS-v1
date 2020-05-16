import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../hooks';
import { _NavbarListItem, _NavbarListItemLink } from './NavbarStyles';
import { TNavbarListItemProps } from './TNavbarProps';
import { useSpring } from "react-spring";
import { colors } from "../../assets/styles";
import { lighten } from 'polished';

const NavbarListItem: FunctionComponent<TNavbarListItemProps> =
  observer(({
    link,
    style
  }) => {
    const { locationStore } = useStore();
    const isActive = locationStore.getIsActive(link.to);
    const defaultColor = isActive ? lighten(.2, colors.fontSecondary) : colors.fontSecondary;
    const hoverColor = lighten(.4, colors.fontSecondary)

    const [{ color }, setLinkStyle] = useSpring(() => (
      { color: defaultColor }
    ))

    setLinkStyle({ color: defaultColor })

    return (
      <_NavbarListItem
        style={style}
        onMouseEnter={() => setLinkStyle({ color: hoverColor })}
        onMouseLeave={() => setLinkStyle({ color: defaultColor })}
      >
        <_NavbarListItemLink
          style={{ color }}
          to={link.to}
        >
          {link.text}
        </_NavbarListItemLink>
      </_NavbarListItem>
    )
  })

export default NavbarListItem
