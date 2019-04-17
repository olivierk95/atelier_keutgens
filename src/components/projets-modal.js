import React from "react";

//CSS
import variables from "../styles/variables";
import styled from 'styled-components';

const Modal = styled.div`
    position: fixed;
    background-color: rgba(50,50,50,0.5);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ModalImage = styled.img`
    width: 20rem; 
    height: auto;  
`
const CloseButton = styled.button`
    cursor: pointer;
`

const Arrow = styled.svg`
    cursor: pointer;
`

export default function projetsModal(props) {

    return (
        <Modal>
            <CloseButton onClick={props.handleClose}>
                <svg version="1.1" xlmns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 10 10">
                    <g fill={variables.colorWhite}>
                        <polygon points="0 0, 3 0, 10 10, 7 10" />
                        <polygon points="0 7, 0 10, 10 3, 10 0" />
                    </g>
                </svg>
            </CloseButton>
            <div>
                <Arrow version="1.1" xlmns="http://www.w3.org/2000/svg" width="4rem" viewBox="0 0 10 14" onClick={props.handlePrevious}>
                    <g fill={variables.colorWhite}>
                        <polygon points="10 0, 10 3, 6 7, 6 4" />
                        <polygon points="3 7, 5 5, 5 9">
                            <animate attributeName="points" attributeType="xml" values="3 7, 5 5, 5 9; 0 7, 2 5, 2 9; 3 7, 5 5, 5 9" dur="3s" repeatCount="indefinite" begin="1s" />
                        </polygon>
                        <polygon points="10 11, 10 14, 6 10, 6 7" />
                    </g>
                </Arrow>
                <ModalImage src={props.img} alt={props.title}></ModalImage>
                <Arrow version="1.1" xlmns="http://www.w3.org/2000/svg" width="4rem" viewBox="0 0 10 14" onClick={props.handleNext}>
                    <g fill={variables.colorWhite}>
                        <polygon points="0 0, 0 3, 4 7, 4 4" />
                        <polygon points="7 7, 5 5, 5 9">
                        <animate attributeName="points" attributeType="xml" values="7 7, 5 5, 5 9; 10 7, 8 5, 8 9; 7 7, 5 5, 5 9" dur="3s" repeatCount="indefinite" begin="1s" />
                        </polygon>
                        <polygon points="0 11, 0 14, 4 10, 4 7" />
                    </g>
                </Arrow>
            </div>
        </Modal> 
    )
};