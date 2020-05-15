import styled from "styled-components"
import { colors, fontFamilies, fontSizes, spacers } from "../../assets/styles"
import { lighten } from 'polished';

export const _Navbar = styled.nav`  
  background-color: ${colors.primary};  
`

export const _Navbar_Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacers[3]} ${spacers[4]};
`

export const _Navbar_Logo = styled.div`
  display: flex;
  align-items: center;
`

export const _Navbar_Logo_Image = styled.img`
  height: 40px;
  margin-right: ${spacers[3]};
`

export const _Navbar_Logo_Text = styled.div`
  font-family: ${fontFamilies.heading};  
  font-size: ${fontSizes.xlarge};
  line-height: 1;
  color: ${lighten(.3, colors.fontPrimary)};
`

export const _Navbar_List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  list-style: none;
`

export const _Navbar_List_Item = styled.li`
  text-transform: uppercase;
  text-decoration: none;
  padding: ${spacers[2]} ${spacers[3]};
  a { color: ${colors.fontSecondary}; }
`