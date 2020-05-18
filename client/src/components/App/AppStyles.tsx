import styled from "styled-components"
import { colors, fontFamilies, fontSizes, spacers, devices } from "../../assets/styles"
import { animated } from 'react-spring';
import { Route } from 'react-router-dom';

const _Base = styled.div`
  background-color: ${colors.background};
  color: ${colors.fontPrimary};
  font-family: ${fontFamilies.primary};
  font-size: ${fontSizes.normal};
  line-height: 1.5rem;
  _App_Content_Route: hidden;  
  a { text-decoration: none; }
  box-sizing: border-box;
  *, *:before, *:after {
    box-sizing: inherit;
  }
`
export const _App = styled(_Base)`
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;
`

export const _App_Navbar = styled.div`
  padding: ${spacers[2]} ${spacers[3]};
  @media ${devices.tablet} {
    padding: ${spacers[3]} ${spacers[4]};
  }
`

export const _App_Content = styled.div`
  padding: 0 ${spacers[3]};
  @media ${devices.tablet} {
    padding: ${spacers[3]} ${spacers[4]} 0;
  }
`

export const _App_Content_Routes = styled(animated.div)``;