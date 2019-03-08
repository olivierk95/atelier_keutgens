import React, { useState } from "react";
import { Link } from "gatsby";

import burgerIcon from "../img/menu-button.svg"

export default function Header() {
  const[menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  let show = {
    display: menu ? "block" : "none"
  }

  return (
    <header>
        <button onClick={toggleMenu}>
          <img src={burgerIcon} alt="menu"/>
        </button>
        <div style={ show }>
          <Link to="/" className="menu-item">Accueil</Link>
          <Link to="/projets/" className="menu-item">Projets</Link>
          <Link to="/atelier/" className="menu-item">Atelier</Link>
          <Link to="/contact/" className="menu-item">Contact</Link>
        </div>
    </header>
  );
}
