import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

import "../styles/main.scss"

export default ({children}) => 
    <div>
        <Header />
        <Link to="/">
            <h1>Atelier d'architecture</h1>
            <h2>Keutgens</h2>
        </Link>
        {children}
    </div>
    