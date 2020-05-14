import styled from "styled-components"
import { colors, fontFamilies, fontSizes, spacers } from "../../assets/styles"
import { lighten } from 'polished';

export const _Navbar = styled.nav`
  color: ${lighten(.3, colors.fontPrimary)};
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
  font-size: ${fontSizes.xlarge};
  line-height: 1;
`

export const _Navbar_List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  list-style: none;
`

export const _Navbar_List_Item = styled.li`
  font-family: ${fontFamilies.raleway};
  text-transform: uppercase;
  line-height: 1;
  text-decoration: none;
  padding: ${spacers[2]} ${spacers[3]};

`