import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Link } from "react-router-dom";
import placeholderImgRect from '../../assets/images/placeholderRect.png';
import { Container } from '../Container';
import { useStore } from '../../hooks';
import { NavbarListItem } from '.';
import {
  _Navbar,
  _Navbar_Container,
  _Navbar_Logo,
  _Navbar_Logo_Image,
  _Navbar_Logo_Text,
  _Navbar_List,
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
    return (
      <_Navbar>
        <Container>
          <_Navbar_Container>
            <_Navbar_Logo >
              <_Navbar_Logo_Image src={placeholderImgRect} />
              <_Navbar_Logo_Text >
                Boiler Plate
              </_Navbar_Logo_Text>
            </_Navbar_Logo>
            <_Navbar_List>
              {links.map((link, i) =>
                <NavbarListItem key={i} link={link} />
              )}
            </_Navbar_List>
          </_Navbar_Container>
        </Container>
      </_Navbar>
    )
  }

export default Navbar
