import React from 'react';
import { NavLink } from 'react-router-dom';

const isActiveFunc = (match, location) => {
  console.log(match);
  console.log(location)

  return match;
};

const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default">
      <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
      {" | "}
      <NavLink isActive={isActiveFunc} activeClassName="active-link" to="/library">Library</NavLink>
    </nav>
  </div>
);

export default Header;
