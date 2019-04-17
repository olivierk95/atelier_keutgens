import React from "react";
import { Link } from "gatsby";

//Images
import construction from "../img/home-construction.jpg";
import renovation from "../img/home-renovation.jpg";
import amenagement from "../img/home-amenagement.jpg";
import mobilier from "../img/home-mobilier.jpg";

//CSS
import variables from "../styles/variables";
import parallelogram from '../styles/elements/parallelogram';
import styled from 'styled-components';

const Experiences = styled.div`
    background-color: ${variables.colorMichel};
    ${parallelogram(100)};
    flex-direction: column;
    display: flex;
    align-items: center;
    padding: 2rem 0;
`

const Content = styled.div`
    position: relative;
`

export default function homeExperience() {
    const experience = [
        {
            title: "Construction",
            img: construction,
            examples: [
                "Maison basse énergie",
                "Maison passive",
                "Logement résidentiel",
                "Edifice communaux",
                "..."
            ]
        },
        {
            title: "Rénovation",
            img: renovation,
            examples: [
                "Annexe",
                "Aménagement",
                "Mise aux normes",
                "Transformation",
                "..."
            ]
        },
        {
            title: "Aménagement intérieur",
            img: amenagement,
            examples: [
                "Cuisine",
                "Salle de bain",
                "Living",
                "Salle à manger",
                "..."
            ]
        },
        {
            title: "Mobilier",
            img: mobilier,
            examples: [ 
                "Table de jardin",
                "Lampe de salon",
                "Armoire",
                "Chaise",
                "..."
            ]
        },
    ]; 

    const experienceMap = experience.map((el, index) => {
        const Experience = styled.div`
            ${parallelogram(70)};
            position: relative;
            &:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%; 
                height: 100%;
                background-size: auto 80vw;
                background-position: center;
                background-image: url(${el.img});
                filter: grayscale(100%);
            }
        `

        let examplesMap = el.examples.map((ex, ind) => {
            return (
                <li key={ind}>{ex}</li>
            )
        });

        return (

                <Experience key={index}>
                    <Content>
                        <h1>{el.title}</h1>
                        <ul>
                            {examplesMap}
                        </ul>
                        <button className="primary-button">
                            <Link to="/projets">Découvrir</Link>
                        </button>
                    </Content>
                </Experience>

        );
    })
    

    return (
        <Experiences>
                <h3>De l'expérience</h3>

                {experienceMap}
        </Experiences>
    )
}