import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Link } from "react-router-dom";
import placeholderImgRect from '../../assets/images/placeholderRect.png';
import { Container } from '../Container';
import {
  _Navbar,
  _Navbar_Container,
  _Navbar_Logo,
  _Navbar_Logo_Image,
  _Navbar_Logo_Text,
  _Navbar_List,
  _Navbar_List_Item
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

const Navbar: FunctionComponent<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <_Navbar>
      <Container>
        <_Navbar_Container>
          <_Navbar_Logo >
            <_Navbar_Logo_Image src={placeholderImgRect} />
            <_Navbar_Logo_Text >
              Boiler Plate friend app
            </_Navbar_Logo_Text>
          </_Navbar_Logo>
          <_Navbar_List>
            {links.map((link, i) =>
              <_Navbar_List_Item key={i}>
                <Link to={link.to}>{link.text}</Link>
              </_Navbar_List_Item>
            )}
          </_Navbar_List>
        </_Navbar_Container>
      </Container>
    </_Navbar>
  )
}

export default Navbar
