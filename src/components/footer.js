import React from "react";

//CSS
import variables from "../styles/variables";
import { parallelogramTop } from '../styles/elements/parallelogram';
import styled from 'styled-components';

const Footer = styled.footer`
    ${parallelogramTop(100)};
    background-color: ${variables.colorLight};
    height: 10rem;
    padding-bottom: 0;
`

export default function footer(){
    return (
        <Footer>
            <h2>Atelier d'architecture Keutgens</h2>
            <h3>Voie Pirson 9A, 4877 OLNE</h3>
            <h3>0477.55.04.73</h3>
            <h3>keutgensmichel@gmail.com</h3>
            <p>Nous sommes soumis à l'<a href="https://www.archionweb.be/Public/Company/1590">Ordre des Architectes de Liège</a> et soumis à son code de déontlogie.</p>
            <p>@2019 - Olivier Keutgens</p>
        </Footer>
    )
}