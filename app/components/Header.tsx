import React, { useRef, useState } from "react";
import { Link } from "remix";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import useOnClickOutside from "~/hooks/useOnClickOutside";

const Header = () => {
  const bRef = useRef(null);
  const [state, setState] = useState({ mobileMenuOpen: false });

  const closeMenu = (e?: any) => {
    setState((s) => ({ ...s, mobileMenuOpen: false }));
  };

  useOnClickOutside(bRef, closeMenu);

  return (
    <nav className="header_nav">
      <Link to="/">
        <img
          src={"chino-logo-straight.svg"}
          className="header_logo"
          alt="Chino Grande"
        />
      </Link>
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
            <BsChevronDoubleUp size={30} />
          ) : (
            <BsChevronDoubleDown size={30} />
          )}
          {/* <Menu>
        <MenuButton style={{ border: "none", backgroundColor: "transparent" }}>
          <GiHamburgerMenu size={24} />
        </MenuButton>
        <MenuList style={{ backgroundColor: "white" }}>
          <MenuItem onSelect={() => {}}>
            <Link to="/dinner">Dinner</Link>
          </MenuItem>
          <MenuItem onSelect={() => {}}>
            <Link to="/tonics">Tonics</Link>
          </MenuItem>
          <MenuItem onSelect={() => {}}>
            <Link to="/drinks">Drinks</Link>
          </MenuItem>
        </MenuList>
      </Menu> */}
        </button>
        <ul
          aria-expanded={state.mobileMenuOpen ? "true" : "false"}
          className={`header_nav_drop_down ${
            state.mobileMenuOpen ? "slide-in" : ""
          }`}
        >
          <li>
            <Link to="/dinner" className="nav_link">
              Dinner
            </Link>
          </li>
          <li>
            <Link to="/tonics" className="nav_link">
              Tonics
            </Link>
          </li>
          <li>
            <Link to="/drinks" className="nav_link">
              Drinks
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
