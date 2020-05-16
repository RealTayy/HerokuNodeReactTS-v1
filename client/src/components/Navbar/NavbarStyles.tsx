import styled from "styled-components"
import { colors, fontFamilies, fontSizes, spacers, fontWeights, devices } from "../../assets/styles"
import { lighten } from 'polished';
import { animated } from "react-spring";
import { Link } from 'react-router-dom';

// Navbar
export const _Navbar = styled.nav`  
  /* background-color: ${colors.primary};   */
`

export const _Navbar_Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacers[2]} ${spacers[3]};
  overflow: hidden;
  @media ${devices.tablet} {
    padding: ${spacers[3]} ${spacers[4]};
  }
`

export const _Navbar_Logo = styled(animated.div)`
  display: flex;
  align-items: center;
`

export const _Navbar_Logo_Image = styled.img`
  height: 20px;
  margin-right: ${spacers[3]};
  @media ${devices.tablet} {
    height: 30px;
  }
  @media ${devices.laptop} {
    height: 40px;
  }
`

export const _Navbar_Logo_Text = styled.div`
  font-family: ${fontFamilies.heading};  
  font-size: ${fontSizes.normal};
  line-height: 1;
  color: ${lighten(.3, colors.fontPrimary)};
  @media ${devices.tablet} {
    font-size: ${fontSizes.large};
  }
  @media ${devices.laptop} {
    font-size: ${fontSizes.xlarge};
  }
`

export const _Navbar_List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  list-style: none;
  overflow: hidden;
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