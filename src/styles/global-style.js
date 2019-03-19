import { createGlobalStyle } from 'styled-components';
import variables from "./variables";
import "./reset.scss"

export const GlobalStyle = createGlobalStyle`
  body {
        font-family: ${variables.fontSerif};
        min-height: 100vh;
        background-color: ${variables.colorWhite};
        max-width: 100%;
    }

    button {
        border-radius: 2rem;
    }

    a {
        color: ${variables.colorWhite};
        font-family: ${variables.fontSerif};
    }

    h1 {
        color: ${variables.colorAtelier};
        font-family: ${variables.fontSansSerif};
        font-size: 1.6rem;
        font-weight: 700;
    }

    h2 {
        color: black;
        font-size: 1.5rem;
        font-family: ${variables.fontSansSerif};
    }

    h3 {
        color: ${variables.colorDark};
        font-size: 1.5rem;
        font-family: ${variables.fontSansSerif};
    }

    h4 {
        color: ${variables.colorDark};
        font-size: 1.3rem;
        font-family: ${variables.fontSansSerif};
    }

    h5 {
        color: ${variables.colorDark};
        font-size: 1.5rem;
        font-family: ${variables.fontSansSerif};
    }

    h6 {
        color: ${variables.colorDark};
        font-size: 1.5rem;
        font-family: ${variables.fontSansSerif};
    }

    p {
        color: ${variables.colorDark};
        font-size: 0.9rem;
    }

    .primary-button {
        background-color: ${variables.colorAtelier};
        color: ${variables.colorWhite};
        padding: .2rem .6rem;
        font-size: 1.2rem;
    }

    .secondary-button {
        background-color: ${variables.colorWhite};
        padding: .2rem .6rem;
        font-size: 1.1rem;

        a {
            color: ${variables.colorDark};
        }
    }

    .atelier{
        background-color: ${variables.colorAtelier};
    }

    .michel{
        background-color: ${variables.colorMichel};
        h1 {
            color: ${variables.colorMichelTitle};
        }
    }

    .sabina{
        background-color: ${variables.colorSabina};
        h1 {
            color: ${variables.colorSabinaTitle};
        }
    }
`