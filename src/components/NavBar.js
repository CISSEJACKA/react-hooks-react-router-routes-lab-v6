// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/actors">Actors</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/movie">Movie</NavLink>
  </div>
);

export default NavBar;



