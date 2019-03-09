import React, { useState } from "react";
import { Link } from "gatsby";

import BurgerIcon from "../components/burger-icon";

export default function Header() {
  const[toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }

  let show = {
    display: toggle ? "flex" : "none"
  }

  let navigationMenu;

  if (toggle) {
    navigationMenu = {
      backgroundColor: "white",
    };
  }

  return (
    <header>
      <svg width="100vw" viewBox="0 0 100 20">
        <polygon points="0,0 100,0 100,20 0,10" className="menu-background"/>
      </svg>
      
      <div className="navigation-menu" style={navigationMenu}>
        <button onClick={toggleMenu} className="menu-button">
          <h3 className="menu-title">Menu</h3>
          <BurgerIcon toggle={toggle} />
        </button>

        <div style={ show } className="menu">
          <Link to="/" className="menu-item">Accueil</Link>
          <Link to="/projets/" className="menu-item">Projets</Link>
          <Link to="/atelier/" className="menu-item">Atelier</Link>
          <Link to="/contact/" className="menu-item">Contact</Link>
        </div>
      </div>

    </header>
  );
}
