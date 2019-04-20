import React from "react";
import { device } from "../styles/mediaqueries";

//CSS
import variables from "../styles/variables";
import styled from 'styled-components';
import { parallelogramBottom } from '../styles/elements/parallelogram';

import projets from "../data/projets-data";

const Modal = styled.div`
    position: fixed;
    background-color: rgba(46,53,50,0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;

    @media ${device.phone} {
        grid-template-columns: 1fr 60vw 1fr;
        grid-template-rows: 8rem minmax(5rem, 50vh) 10rem auto;
    }

    @media ${device.desktop && device.tablet} {
        grid-template-columns: 1fr 45vw 1fr;
        grid-template-rows: 6rem minmax(5rem, 30rem) minmax(20vh, auto);
    }
`

const Image = styled.img`
    justify-self: center;
    object-fit: contain;
    @media ${device.phone} {
        max-width: 100%; 
        max-height: 45vh;
    }
    @media ${device.desktop && device.tablet} {
        max-width: 100%; 
        max-height: 65vh;
    }
`

const ProjetInfo = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.phone} {
        grid-column: 1 / span 3;
        grid-row: 2/ span 2;
    }
    @media ${device.desktop && device.tablet} {
        grid-column: 2 / span 1;
        grid-row: 2/ span 2;
    }
`

const Information = styled.div`
    background-color: ${variables.colorAtelier};
    overflow-y: auto;
    
    @media ${device.phone} {
        ${parallelogramBottom(100)}
       max-height: 100%;
    }
    @media ${device.desktop && device.tablet} {
        ${parallelogramBottom(45)};
        max-height: 100%;
    }
`

const CloseButton = styled.div`
    cursor: pointer;
    display: grid;
    grid-template-columns: 1.8rem .7rem;
    grid-template-rows: .5rem 1.8rem;
    grid-gap: .1rem;
    grid-column: 3;
    grid-row: 1;
    align-self: end;
    @media ${device.phone} {
        margin-bottom: .5rem;
    }
`

const Fer = styled.h3`
    color: ${variables.colorWhite};
    font-size: .7rem;
    font-weight: bold;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    letter-spacing: .1rem;
    display: flex;
    justify-content: space-between;
`

const Cross = styled.svg` 
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    width: auto;
    height: auto;
`

const Mer = styled.h3`
    color: ${variables.colorWhite};
    font-size: .7rem;
    font-weight: bold;
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const LeftArrow = styled.svg`
    cursor: pointer;
    justify-self: right;
    @media ${device.phone} {
        grid-column: 1 / span 1;
        grid-row: 4;
        width: 2rem;
        align-self: end;
        margin-bottom: 2rem;
    }
    @media ${device.desktop && device.tablet} {
        grid-column: 1 / span 1;
        grid-row: 2;
        width: 4rem;
        margin-right: 2rem;
        align-self: center;
    }
`

const RightArrow = styled.svg`
    cursor: pointer;
    justify-self: left;
    @media ${device.phone} {
        grid-column: 3 / span 1;
        grid-row: 4;
        width: 2rem;
        align-self: end;
        margin-bottom: 2rem;
    }
    @media ${device.desktop && device.tablet} {
        grid-column: 3 / span 1;
        grid-row: 2;
        width: 4rem;
        margin-left: 2rem;
        align-self: center;
    }
`

export default function projetsModal(props) {

    return (
        <Modal>
            <CloseButton onClick={props.handleClose}>
                <Fer>
                    <span>F</span>
                    <span>E</span>
                    <span>R</span>
                </Fer>
                <Cross version="1.1" xlmns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                    <g fill={variables.colorWhite}>
                        <polygon points="0 0, 3 0, 10 10, 7 10" />
                        <polygon points="0 7, 0 10, 10 3, 10 0" />
                    </g>
                </Cross>
                <Mer>
                    <span>M</span>
                    <span>E</span>
                    <span>R</span>
                </Mer>
            </CloseButton>
            {props.modal > 0? 
                <LeftArrow version="1.1" xlmns="http://www.w3.org/2000/svg" viewBox="0 0 10 14" onClick={props.handlePrevious}>
                    <g fill={variables.colorWhite}>
                        <polygon points="10 0, 10 3, 6 7, 6 4" />
                        <polygon points="3 7, 5 5, 5 9">
                            <animate attributeName="points" attributeType="xml" values="3 7, 5 5, 5 9; 0 7, 2 5, 2 9; 3 7, 5 5, 5 9" dur="3s" repeatCount="indefinite" begin="1s" />
                        </polygon>
                        <polygon points="10 11, 10 14, 6 10, 6 7" />
                    </g>
                </LeftArrow> 
                : "" }
            <ProjetInfo>
                <Image src={props.img} alt={props.title}></Image>
                <Information>
                    <p>jdlqjljwkljElle permet de projeter une ombre depuis un élément. Si une border-radius est définie sur l'élément avec l'ombre, la boîte de l'ombre prendra les mêmes arrondis. L'ordre des couches (z order) pour plusieurs ombres sera le même que pour les ombres texte (la première ombre est sur le dessus).

Le générateur de box-shadow est un outil interactif qui permet de générer des valeurs pour box-shadow.Elle permet de projeter une ombre depuis un élément. Si une border-radius est définie sur l'élément avec l'ombre, la boîte de l'ombre prendra les mêmes arrondis. L'ordre des couches (z order) pour plusieurs ombres sera le même que pour les ombres texte (la première ombre est sur le dessus).

Le générateur de box-shadow est un outil interactif qui permet de générer des valeurs pour box-shadow.</p>
                </Information>
            </ProjetInfo>
            {props.modal < projets.length-1 ? 
                <RightArrow version="1.1" xlmns="http://www.w3.org/2000/svg" viewBox="0 0 10 14" onClick={props.handleNext}>
                    <g fill={variables.colorWhite}>
                        <polygon points="0 0, 0 3, 4 7, 4 4" />
                        <polygon points="7 7, 5 5, 5 9">
                        <animate attributeName="points" attributeType="xml" values="7 7, 5 5, 5 9; 10 7, 8 5, 8 9; 7 7, 5 5, 5 9" dur="3s" repeatCount="indefinite" begin="1s" />
                        </polygon>
                        <polygon points="0 11, 0 14, 4 10, 4 7" />
                    </g>
                </RightArrow> 
                : ""}
        </Modal> 
    )
};