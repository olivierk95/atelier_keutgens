import React from "react";

//CSS
import variables from "../styles/variables";
import styled from 'styled-components';
import projets from "../data/projets-data";

const Modal = styled.div`
    position: fixed;
    background-color: rgba(50,50,50,0.5);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr minmax(5rem, 30rem) 1fr;
    grid-template-rows: minmax(7rem, 20vh) minmax(5rem, 30rem) 1fr;
`

const ModalImage = styled.img`
    max-width: 100%; 
    max-height: 100%;
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    justify-self: center;
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
    width: 4rem;
    grid-column: 1 / span 1;
    grid-row: 2;
    align-self: center;
    justify-self: right;
    margin-right: 2rem;
`

const RightArrow = styled.svg`
    cursor: pointer;
    width: 4rem;
    grid-column: 3 / span 1;
    grid-row: 2;
    align-self: center;
    justify-self: left;
    margin-left: 2rem;
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
            <ModalImage src={props.img} alt={props.title}></ModalImage>
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