import React, { FunctionComponent, useState, useEffect } from 'react';
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
    const defaultColor = colors.fontSecondary;
    const activeColor = lighten(.2, colors.fontSecondary);
    const hoverColor = lighten(.4, colors.fontSecondary);
    const [isHovered, setIsHovered] = useState(false);

    const NLTLSpring = useSpring(
      {
        color: isHovered ? hoverColor
          : isActive ? activeColor
          : defaultColor
      }
    );

    return (
      <_NavbarListItem
        style={style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <_NavbarListItemLink
          style={NLTLSpring}
          to={link.to}
        >
          {link.text}
        </_NavbarListItemLink>
      </_NavbarListItem >
    )
  })

export default NavbarListItem
