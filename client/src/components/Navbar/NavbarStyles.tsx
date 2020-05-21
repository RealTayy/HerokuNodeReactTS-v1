import styled from "styled-components"
import { colors, fontFamilies, fontSizes, spacers, fontWeights, devices } from "../../assets/styles"
import { lighten } from 'polished';
import { animated } from "react-spring";
import { Link } from 'react-router-dom';

// Navbar
export const _Navbar = styled.nav``

export const _Navbar_Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const _Navbar_Logo = styled(animated.div)`
  display: flex;
  align-items: center;
`

export const _Navbar_Logo_Image = styled.img`
  height: 30px;
  margin-right: ${spacers[3]};
  @media ${devices.laptop} {
    height: 40px;
  }
`

export const _Navbar_Logo_Text = styled.div`
  font-family: ${fontFamilies.heading};  
  font-size: ${fontSizes.large};
  line-height: 1;
  color: ${lighten(.3, colors.fontPrimary)};
  @media ${devices.laptop} {
    font-size: ${fontSizes.xlarge};
  }
`

export const _Navbar_List = styled.ul`
  display: none;
  grid-template-columns: repeat(3, auto);
  list-style: none;
  overflow: hidden;
  @media ${devices.tablet} {
    display: grid;
  }
`

export const _Navbar_SidenavToggle = styled(animated.div)`
  display: block; 
  @media ${devices.tablet} {
    display: none;
  }
`

// NavbarListItem
export const _NavbarListItem = styled(animated.li)`  
`

export const _NavbarListItemLink = styled(animated(Link))`
  display: block;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${fontWeights.medium};
  padding: ${spacers[2]} ${spacers[3]};
`

// NavbarSidenavToggle

export const _NavbarSidenavToggle = styled(animated.div)`
  position: relative;
  height: 30px;
  width: 30px;
  cursor: pointer;
`

export const _NavbarSidenavToggle_SVG = styled(animated.svg)`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  display: inline-block;
  stroke: currentColor;
`

export const _NavbarSidenavToggle_SVG_Line = styled(animated.line)`
  transform-origin: 50% 50%;
  &:first-child {
    transform-origin: 50% 20%;
  }
  &:last-child {
    transform-origin: 50% 80%;
  }
`