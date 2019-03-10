import React from "react";
import Layout from "../layouts/layout";

//Images
import picture1 from "../img/home-picture1.jpg";
import picture2 from "../img/home-picture2.jpg"

export default function index() {
    
    return (
        <Layout>
            <div className="carousel">
                <div className="carousel-container">
                    <div className="picture-container">
                        <img src={picture1} alt="maison" className="carousel-picture"/>
                    </div>
                    <div className="picture-container">
                        <img src={picture2} alt="maison" className="carousel-picture"/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}