import React from "react";

//CSS
import variables from '../styles/abstracts/variables.scss';
import styled from 'styled-components';

const Burger = styled.div`
    width: 2.5rem;
    cursor: pointer;
    transition: 0.5s;
`

const Bar = styled.div`
    width: 2.5rem;
    height: .4rem;
    background-color: ${variables.colorDark};
    margin: .4rem 0;
    transition: 0.5s;
`

export default function BurgerIcon(props) {
    let burger;
    let bar1;
    let bar2;
    let bar3;

    if (props.toggle) {
        burger = {
            transform: "translate(-.5rem, 0)",
        };
        bar1 = {
            transform: "rotate(-45deg)",
            transformOrigin: "top right",
        };
        bar2 = {
            opacity: "0",
        };
        bar3 = {
            transform: "rotate(45deg)",
            transformOrigin: "bottom right",
        };
    }

    return (
        <Burger style={burger}>
            <Bar className="burger-bar" style={bar1}/>
            <Bar className="burger-bar" style={bar2}/>
            <Bar className="burger-bar" style={bar3}/>
        </Burger>
    );
}   