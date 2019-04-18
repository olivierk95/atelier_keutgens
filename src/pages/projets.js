import React from "react";
import Layout from "../layouts/layout";
import { device } from "../styles/mediaqueries";
import { TweenMax, Power0 } from "gsap/TweenMax";
import Modal from "../components/projets-modal";

import projets from "../data/projets-data";

//CSS
import variables from "../styles/variables";
import parallelogram from '../styles/elements/parallelogram';
import styled from 'styled-components';

const Projets = styled.div`
    display: grid;
    max-width: 96vw;
    margin: 0 auto;
    justify-content: center;
    grid-auto-flow: dense;

    @media ${device.phone} {
        grid-template-columns: repeat(auto-fill, ${variables.gridPicturePhone}vw);
        grid-auto-rows: ${variables.gridPicturePhone}vw;
        grid-gap: 0 ${variables.gridGapPicturePhone}vw;
        max-width: 100vw;
    }

    @media ${device.tablet} {
        grid-template-columns: repeat(auto-fill, ${variables.gridPictureTablet}vw);
        grid-auto-rows: ${variables.gridPictureTablet}vw;
        grid-gap: 0 ${variables.gridGapPictureTablet}vw;
        max-width: 95vw;
    }

    @media ${device.desktop} {
        grid-template-columns: repeat(auto-fill, ${variables.gridPictureDesktop}vw);
        grid-auto-rows: ${variables.gridPictureDesktop}vw;
        grid-gap: 0 ${variables.gridGapPictureDesktop}vw;
        max-width: 95vw;
    }
`

const Content = styled.div`
    background-color: rgba(170, 123, 53,0.5);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 0.2s;
`

const Title = styled.h3`
    color: ${variables.colorWhite};
`

const Description = styled.p`
    color: ${variables.colorWhite};
`
    
export default class projetsGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.handleClose = this.handleClose.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
    }

    componentDidMount(){
        TweenMax.staggerFrom(".pictures", 3, {y: 200, opacity: 0, ease:Power0.easeOut}, 0.3);
    }

    handleClick(index) {
        this.setState({
            showModal: index
        });
    }

    handleClose() {
        this.setState({
            showModal: false
        });
    }

    handleNext() {
        let index = this.state.showModal + 1
        this.setState({
            showModal: index
        });
    }

    handlePrevious() {
        let index = this.state.showModal - 1
        this.setState({
            showModal: index
        });
    }

    render() {

        const projetsMap = projets.map((el, index) => {

            const Projet = styled.div`
                background-image: url(${el.img});
                background-size: cover;
                background-position: center;
                grid-row: span ${el.h};
                grid-column: span ${el.w};
                cursor: pointer;
                &:hover .content{
                    transform: translateY(0);
                }

                @media ${device.phone} {
                    ${parallelogram(el.w * variables.gridPicturePhone + (el.w -1) * variables.gridGapPicturePhone)};
                }

                @media ${device.tablet} {
                    ${parallelogram(el.w * variables.gridPictureTablet + (el.w -1) * variables.gridGapPictureTablet)};
                }

                @media ${device.desktop} {
                    ${parallelogram(el.w * variables.gridPictureDesktop + (el.w -1) * variables.gridGapPictureDesktop)};
                }
            `

            return (
                <Projet 
                    key={index}
                    className="pictures"
                    >
                    <Content className="content" onClick={this.handleClick.bind(this, index)}>
                        <Title>{el.title}</Title>
                        <Description>Voir</Description>
                    </Content>
                </Projet>
            );
        })
        
        let focusedElt;

        if (this.state.showModal >= 0) {
            focusedElt=projets[this.state.showModal];
        };

        return (
            <Layout>
                <Projets>
                    {projetsMap}
                </Projets>
                {focusedElt&&<Modal modal={this.state.showModal} handleClose={this.handleClose} handlePrevious={this.handlePrevious} handleNext={this.handleNext} elt={focusedElt} img={focusedElt.img} title={focusedElt.title}/>}
            </Layout>
        )
    }
}