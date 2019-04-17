//CSS
import styled from 'styled-components';
import { GlobalStyle } from "../styles/global-style";

import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";



const Container = styled.div`
    margin-top: 4.6rem;
    justify-content: center;
`

export default ({children}) => 
    <>
        <link href="https://fonts.googleapis.com/css?family=Amiri:400,400i,700,700i|Hind:300,400,500,600,700" rel="stylesheet" />
        <GlobalStyle />
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
    </>
    