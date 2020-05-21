import React, { FunctionComponent, HTMLAttributes, MouseEvent, useState } from 'react';
import { useStore } from '../../hooks';
import { observer } from 'mobx-react';
import { useSpring } from 'react-spring';
import { colors } from "../../assets/styles";
import { lighten } from 'polished';

import {
  _NavbarSidenavToggle,
  _NavbarSidenavToggle_SVG,
  _NavbarSidenavToggle_SVG_Line,
} from './NavbarStyles';


const NavbarSidenavToggle: FunctionComponent<HTMLAttributes<HTMLDivElement>> =
  observer(() => {
    const { sidenavStore } = useStore();
    const isVisible = sidenavStore.isVisible;
    const [isHovered, setIsHovered] = useState(false);

    const onClickHandler = (e: MouseEvent) => {
      sidenavStore.toggleIsVisible();
    }

    const { sr, sColor } = useSpring({
      sr: isVisible ? 135 : 0,
      sColor: isHovered ? lighten(.4, colors.fontSecondary)
        : isVisible ? lighten(.2, colors.fontSecondary)
          : colors.fontSecondary
    })

    const { lineX1, lineX2, lineR } = useSpring({
      lineX1: isVisible ? 60 : 40,
      lineX2: isVisible ? 100 : 120,
      lineR: isVisible ? -270 : 0,
    })

    return (
      <_NavbarSidenavToggle
        onClick={onClickHandler}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <_NavbarSidenavToggle_SVG
          viewBox="0 0 160 160"
          width="80"
          height="80"
          stroke-width="20"
          style={{ color: sColor }}
          transform={sr.interpolate(sr => `rotate(${sr})`)}
        >
          <_NavbarSidenavToggle_SVG_Line
            x1={lineX1}
            x2={lineX2}
            y1="32"
            y2="32"
            transform={lineR.interpolate(lineR => `rotate(${lineR})`)}
          />
          <_NavbarSidenavToggle_SVG_Line
            x1="10"
            x2="150"
            y1="80"
            y2="80"            
          />
          <_NavbarSidenavToggle_SVG_Line
            x1={lineX1}
            x2={lineX2}
            y1="128"
            y2="128"
            transform={lineR.interpolate(lineR => `rotate(${lineR})`)}
          />
          

        </_NavbarSidenavToggle_SVG>
      </_NavbarSidenavToggle >
    )
  })

export default NavbarSidenavToggle
