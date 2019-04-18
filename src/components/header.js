import React, { useState } from "react";
import { Link } from "gatsby";
import anime from "../../node_modules/animejs/lib/anime.es.js";
import { TweenMax, Power0 } from "gsap/TweenMax";

import BurgerIcon from "../components/burger-icon";

//CSS
import variables from "../styles/variables";
import { parallelogramBottom } from '../styles/elements/parallelogram';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top:0;
  height: 4.6rem;
  z-index: 100;
  width: 100%;
`
const Background = styled.div`
  background-color: ${variables.colorLight};
  ${parallelogramBottom(100)};
  height: 4.6rem;
  padding: 0;
`
const Navigation = styled.div`
  position: fixed;
  top: .7rem;
  right: .7rem;
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
  font-size: .8rem;
  font-weight: bold;
  margin-right: .1rem;
`
const Menu = styled.div`
  flex-direction: column;
  display: none;
`
const Links = styled(Link)`
  font-size: 1.3rem;
  margin: 1rem 0;
  color: ${variables.colorDark};
  text-align: center;
`

export default function header() {
  const[toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
    if(!toggle) {
      anime({
          targets: '#bar1',
          points: [
            { value: '0 0, 6 0, 7 1, 1 1' },
            { value: '1 5, 4.5 0, 6 0, 2.5 5' }
          ],
          easing: 'linear',
          duration: 500,
          loop: false
      });
      anime({
          targets: '#bar2',
          opacity: 0,
          easing: 'linear',
          duration: 500,
          loop: false
      });
      anime({
          targets: '#bar3',
          points: [
              { value: '0 4, 6 4, 7 5, 1 5' },
              { value: '1 0, 6 3.5, 6 5, 1 1.5' }
          ],
          easing: 'linear',
          duration: 500,
          loop: false
      });
      TweenMax.to(".navigationMenu", .5, {backgroundColor: "white", ease:Power0.easeOut});
      TweenMax.to(".menuLinks", .5, {display: "flex", opacity: 1, ease:Power0.easeOut});
    } else {
      anime({
          targets: '#bar1',
          points: [
            { value: '1 5, 4.5 0, 6 0, 2.5 5' },
            { value: '0 0, 6 0, 7 1, 1 1' }
          ],
          easing: 'linear',
          duration: 500,
          loop: false
      });
      anime({
          targets: '#bar2',
          opacity: 1, 
          easing: 'linear',
          duration: 500,
          loop: false
      });
      anime({
          targets: '#bar3',
          points: [
              { value: '1 0, 6 3.5, 6 5, 1 1.5' },
              { value: '0 4, 6 4, 7 5, 1 5' }
          ],
          easing: 'linear',
          duration: 500,
          loop: false
      });
      TweenMax.to(".navigationMenu", .5, {backgroundColor: "transparent", ease:Power0.easeOut});
      TweenMax.to(".menuLinks", .5, {display: "none", opacity: 0, ease:Power0.easeOut});
    }
  }

  return (
    <Header>
      
      <Background />

      <Navigation className="navigationMenu">
        <Button onClick={toggleMenu}>
          <Title>Menu</Title>
          <BurgerIcon toggle={toggle} />
        </Button>

        <Menu className="menuLinks">
          <Links to="/">Accueil</Links>
          <Links to="/projets/">Projets</Links>
          <Links to="/atelier/">Atelier</Links>
          <Links to="/contact/">Contact</Links>
        </Menu> 
      </Navigation>

    </Header>
  );
}
