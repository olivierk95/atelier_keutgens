import React from "react";

//CSS
import variables from "../styles/variables";
import styled from 'styled-components';

const Burger = styled.div`
    width: 3rem;
    cursor: pointer;
    transition: 0.5s;
    padding-top: .15rem;
`

export default function BurgerIcon() {
    
    return (
        <Burger>
            <svg viewBox="0 0 7 5" version="1.1" xlmns="http://www.w3.org/2000/svg">
                <g fill={variables.colorDark}>
                    <polygon points="0 0, 6 0, 7 1, 1 1" id="bar1" />
                    <polygon points="0 2, 6 2, 7 3, 1 3" id="bar2" />
                    <polygon points="0 4, 6 4, 7 5, 1 5" id="bar3" />
                </g>
            </svg>
        </Burger>
    );
}   