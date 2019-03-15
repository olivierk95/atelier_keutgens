import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/main.scss"

export default ({children}) => 
    <>
        <link href="https://fonts.googleapis.com/css?family=Amiri:400,400i,700,700i|Hind:300,400,500,600,700" rel="stylesheet" />
        <Header />
        <div className="container">
            {children}
        </div>
        <Footer />
    </>
    