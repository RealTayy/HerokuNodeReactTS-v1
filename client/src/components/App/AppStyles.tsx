import styled from "styled-components"
import { colors, fontFamilies, fontSizes } from "../../assets/styles"

const _Base = styled.div`
  background-color: ${colors.background};
  color: ${colors.fontPrimary};
  font-family: ${fontFamilies.primary};
  font-size: ${fontSizes.normal};
  line-height: 1.5rem;
  overflow: hidden;  
  a { text-decoration: none; }
  box-sizing: border-box;
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

export const _App = styled(_Base)`
  height: 100vh;  
  display: flex;
  flex-direction: column;  
`

export const _App_Content = styled.div`
  flex-grow: 1;
`