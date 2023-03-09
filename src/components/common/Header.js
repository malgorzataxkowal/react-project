import React from "react";
import { NavLink } from "react-router-dom";

const Header = React.memo(function Header() {
  return (
    <nav>
      <NavLink className="HOME" to="/" exact>
        Home
      </NavLink>
      <NavLink className="SHOES" to="/shoes">
        Shoes
      </NavLink>
      <NavLink className="AUTHORS" to="/authors">
        Authors
      </NavLink>
      <NavLink className="ABOUT" to="/about">
        About
      </NavLink>
    </nav>
  );
});

export default Header;
