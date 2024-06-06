import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active-link" exact>Home</NavLink>
      <NavLink to="/directors" activeClassName="active-link">Directors</NavLink>
      <NavLink to="/actors" activeClassName="active-link">Actors</NavLink>
    </nav>
  );
}

export default NavBar;

