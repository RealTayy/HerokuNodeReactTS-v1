import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Link } from "react-router-dom";
import placeholderImgRect from '../../assets/images/placeholderRect.png';

import './Navbar.scss';
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

const Navbar: FunctionComponent<HTMLAttributes<HTMLElement>> = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar__logo">
        <img className="Navbar__logo__image" src={placeholderImgRect} />
        <div className="Navbar__logo__text">
          Boiler Plate friend app
        </div>
      </div>
      <ul className="Navbar__list">
        {links.map(link =>
          <li className="Navbar__list_item">
            <Link to={link.to}>{link.text}</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
