import React, { useState } from "react";
import { Link } from "gatsby";

import BurgerIcon from "../components/burger-icon";

export default function Header() {
  const[toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }

  let show = {
    display: toggle ? "block" : "none"
  }

  return (
    <header>

        <button onClick={toggleMenu}>
          <BurgerIcon toggle={toggle} />
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
