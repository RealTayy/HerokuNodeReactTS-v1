import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Link } from "react-router-dom";
import placeholderImgRect from '../../assets/images/placeholderRect.png';
import classnames from 'classnames';
import {
  _Navbar,
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
    <_Navbar className={classnames(['Navbar', className])}>
      <_Navbar_Logo >
        <_Navbar_Logo_Image src={placeholderImgRect} />
        <_Navbar_Logo_Text >
          Boiler Plate friend app
        </_Navbar_Logo_Text>
      </_Navbar_Logo>
      <_Navbar_List className="Navbar__list">
        {links.map((link, i) =>
          <_Navbar_List_Item key={i} className="Navbar__list-item">
            <Link to={link.to}>{link.text}</Link>
          </_Navbar_List_Item>
        )}
      </_Navbar_List>
    </_Navbar>
  )
}

export default Navbar
