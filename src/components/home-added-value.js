import React from "react";

//CSS
import variables from "../styles/variables";
import parallelogram from '../styles/elements/parallelogram';
import styled from 'styled-components';

const AddedValues = styled.div`
    background-color: ${variables.colorSabinaTitle};
    ${parallelogram(100)};
    flex-direction: column;
    display: flex;
    align-items: center;
    padding: 2rem 0;
`

const AddedValue = styled.div`
    background-color: ${variables.colorSabina};
    ${parallelogram(70)};
`

export default function homeAddedValue() {
    const addedValues = [
        {
            title: "Expertise",
            text: "L’expert avant achat immobilier consiste en la visite d’un imeuble avant l’achat, afin de mettre en évidence certains problèmes techniques détectables et de chiffrer le coût des travaux de réparation ou transformation à prévoir.",
        },
        {
            title: "Rénovation",
            text: "Eh ouais",
        },
        {
            title: "Aménagement intérieur",
            text: "Eh ouais",
        },
        {
            title: "Mobilier",
            text: "Eh ouais",
        },
    ]; 

    const addedValuesMap = addedValues.map(el => {

        return (

                <AddedValue>
                    <h1 style={{transform: "rotate(5deg)"}}>{el.title}</h1>
                    <p style={{transform: "rotate(5deg)"}}>{el.text}</p>
                </AddedValue>

        );
    })
    

    return (
        <AddedValues>
                <h3>Nos services</h3>

                {addedValuesMap}
        </AddedValues>
    )
}