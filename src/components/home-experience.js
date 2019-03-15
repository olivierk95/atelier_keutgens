import React from "react";
import { Link } from "gatsby";

//CSS
import variables from '../styles/abstracts/variables.scss';
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

const Experience = styled.div`
    background-color: ${variables.colorLight};
    ${parallelogram(70)};
`

export default function homeExperience() {
    const experience = [
        {
            title: "Construction",
            img: "home-mobilier",
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
            img: "home-mobilier",
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
            img: "home-mobilier",
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
            img: "home-mobilier",
            examples: [ 
                "Table de jardin",
                "Lampe de salon",
                "Armoire",
                "Chaise",
                "..."
            ]
        },
    ]; 

    const experienceMap = experience.map(el => {
        
        var examplesMap = el.examples.map(ex => {
            return (
                <li>{ex}</li>
            )
        });

        return (

                <Experience>
                    <h1>{el.title}</h1>
                    <ul>
                        {examplesMap}
                    </ul>
                    <button className="primary-button">
                        <Link to="/projets">Découvrir</Link>
                    </button>
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