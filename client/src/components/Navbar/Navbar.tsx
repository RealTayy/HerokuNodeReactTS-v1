import React, { FunctionComponent, HTMLAttributes } from 'react';
import placeholderImgRect from '../../assets/images/placeholderRect.png';
import { Container } from '../Container';
import { NavbarListItem, NavbarSidenavToggle } from '.';
import { useSpring, useTrail } from 'react-spring';
import {
  _Navbar,
  _Navbar_Container,
  _Navbar_Logo,
  _Navbar_Logo_Image,
  _Navbar_Logo_Text,
  _Navbar_List,
  _Navbar_SidenavToggle,
} from './NavbarStyles';

const links = [
  {
    to: '/',
    text: "Home",
  },
  {
    to: '/friends',
    text: "Friend List",
  },
  {
    to: '/add-friend',
    text: "Add Friend",
  },
]

const Navbar: FunctionComponent<HTMLAttributes<HTMLElement>> =
  () => {

    const navbarLogoSpring = useSpring({
      from: { transform: 'translateY(200%)' },
      to: { transform: 'translateY(0%)' }
    });

    const navbarListItemTrail = useTrail(links.length, {
      from: { transform: 'translateY(200%)' },
      to: { transform: 'translateY(0%)' }
    });

    const navbarSidenavToggleSpring = useSpring({
      from: { transform: 'translateY(200%)' },
      to: { transform: 'translateY(0%)' },
      delay: 300,
    })

    return (
      <_Navbar>
        <Container>
          <_Navbar_Container>
            <_Navbar_Logo style={navbarLogoSpring}>
              <_Navbar_Logo_Image src={placeholderImgRect} />
              <_Navbar_Logo_Text >
                Boiler Plate App
              </_Navbar_Logo_Text>
            </_Navbar_Logo>
            <_Navbar_List>
              {navbarListItemTrail.map((style, i) =>
                <NavbarListItem
                  style={style}
                  key={links[i].to}
                  link={links[i]}
                />
              )}
            </_Navbar_List>
            <_Navbar_SidenavToggle style={navbarSidenavToggleSpring}>
              <NavbarSidenavToggle />
            </_Navbar_SidenavToggle>
          </_Navbar_Container>
        </Container>
      </_Navbar>
    )
  }

export default Navbar
