import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

//CSS
import "../styles/main.scss"
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 20vw;
`

export default ({children}) => 
    <>
        <link href="https://fonts.googleapis.com/css?family=Amiri:400,400i,700,700i|Hind:300,400,500,600,700" rel="stylesheet" />
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
    </>
    