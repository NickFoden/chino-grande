import React from "react";
import { Link } from "remix";

const Header = () => (
  <nav className="header_nav">
    <Link to="/">
      <img src={"chino-logo-straight.svg"} className="header_logo" />
    </Link>
  </nav>
);

export default Header;
