import React, { useState } from "react";
import { Link } from "gatsby";

import BurgerIcon from "../components/burger-icon";

//CSS
import variables from '../styles/abstracts/variables.scss';
import { parallelogramBottom } from '../styles/elements/parallelogram';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top:0;
  height: 4.6rem;
  z-index: 100;
`
const Background = styled.div`
  background-color: ${variables.colorLight};
  ${parallelogramBottom(100)};
  height: 4.6rem;
`
const Navigation = styled.div`
  position: fixed;
  top: .5rem;
  right: .5rem;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
`
const Title = styled.h3`
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  text-transform: uppercase;
  color: ${variables.colorDark};
  font-size: .75rem;
  font-weight: bold;
  margin-right: .2rem;
`
const Menu = styled.div`
  flex-direction: column;
`
const Links = styled(Link)`
  font-size: 1.3rem;
  margin: 1rem;
  color: ${variables.colorDark};
  text-align: center;
`

export default function header() {
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
    <Header>
      
      <Background />

      <Navigation style={navigationMenu}>
        <Button onClick={toggleMenu}>
          <Title>Menu</Title>
          <BurgerIcon toggle={toggle} />
        </Button>

        <Menu style={ show }>
          <Links to="/">Accueil</Links>
          <Links to="/projets/">Projets</Links>
          <Links to="/atelier/">Atelier</Links>
          <Links to="/contact/">Contact</Links>
        </Menu>
      </Navigation>

    </Header>
  );
}
