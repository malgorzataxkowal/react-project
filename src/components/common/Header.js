import React from "react";
import { NavLink } from "react-router-dom";

const Header = React.memo(function Header() {
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/shoes">Shoes</NavLink>
      {" | "}
      <NavLink to="/authors">Authors</NavLink>
      {" | "}
      <NavLink to="/about">About</NavLink>
    </nav>
  );
});

export default Header;
