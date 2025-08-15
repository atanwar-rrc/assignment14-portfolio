
import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Navbar(){
  return (
    <div className="nav">
      <div className="nav-inner container">
        <div className="brand">Abhi Tanwar</div>
        <div className="menu">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/setup">Developer Setup</NavLink>
        </div>
      </div>
    </div>
  );
}
