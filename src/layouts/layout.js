import React from "react";

import Header from "../components/header";

import "../styles/main.scss"

export default ({children}) => 
    <>
        <head>
            <link href="https://fonts.googleapis.com/css?family=Amiri:400,400i,700,700i|Hind:300,400,500,600,700" rel="stylesheet" />
        </head>
        <body>
            <Header />
            <div className="container">
                {children}
            </div>
        </body>
    </>
    