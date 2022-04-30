import React, { useRef, useState } from "react";
import { Link } from "remix";
import { NavLink } from "@remix-run/react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import useOnClickOutside from "~/hooks/useOnClickOutside";

const Header = () => {
  const bRef = useRef(null);
  const [state, setState] = useState({ mobileMenuOpen: false });

  const closeMenu = (e?: any) => {
    setState((s) => ({ ...s, mobileMenuOpen: false }));
  };

  useOnClickOutside(bRef, closeMenu);

  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className="header_nav">
      <div className="header_desktop_nav">
        <Link to="/">
          <img
            src={"chino-logo-straight.svg"}
            className="header_logo"
            alt="Chino Grande"
          />
        </Link>
        <ul className="menu_ul_desktop">
          <li>
            <NavLink
              to="/dinner"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              className="nav_link_desktop"
            >
              Food
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/drinks"
              className="nav_link_desktop"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              Drinks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tonics"
              className="nav_link_desktop"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              Tonics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/karaoke"
              className="nav_link_desktop"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              Karaoke
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservations"
              className="nav_link_desktop"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              Reservations
            </NavLink>
          </li>
        </ul>
      </div>
      <div ref={bRef} className="menu_container">
        <button
          aria-expanded={state.mobileMenuOpen ? "true" : "false"}
          aria-label="Toggle Navigation Menu"
          className="burger"
          onClick={() =>
            setState((s) => ({ ...s, mobileMenuOpen: !s.mobileMenuOpen }))
          }
        >
          {state.mobileMenuOpen ? (
            <BsChevronDoubleUp size={30} color="black" />
          ) : (
            <BsChevronDoubleDown size={30} color="black" />
          )}
        </button>
        <ul
          aria-expanded={state.mobileMenuOpen ? "true" : "false"}
          className={`header_nav_drop_down ${
            state.mobileMenuOpen ? "slide-in" : ""
          }`}
        >
          <li>
            <Link to="/dinner" className="nav_link">
              Food
            </Link>
          </li>
          <li>
            <Link to="/drinks" className="nav_link">
              Drinks
            </Link>
          </li>
          <li>
            <Link to="/tonics" className="nav_link">
              Tonics
            </Link>
          </li>
          <li>
            <Link to="/karaoke" className="nav_link">
              Karaoke
            </Link>
          </li>
          <li>
            <Link to="/reservations" className="nav_link">
              Reservations
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
