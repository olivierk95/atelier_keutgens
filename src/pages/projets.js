import React from "react";
import Layout from "../layouts/layout";
import { device } from "../styles/mediaqueries";
import { TweenMax, Power2 } from "gsap/TweenMax";
import Modal from "../components/projets-modal";

//Images
import construction from "../img/home-construction.jpg";
import renovation from "../img/home-renovation.jpg";
import amenagement from "../img/home-amenagement.jpg";
import mobilier from "../img/home-mobilier.jpg";
import ex1 from "../img/ex1.jpg";
import ex2 from "../img/ex2.jpg";
import ex3 from "../img/ex3.jpg";
import ex4 from "../img/ex4.jpg";
import ex5 from "../img/ex5.jpg";
import ex6 from "../img/ex6.jpg";
import ex7 from "../img/ex7.jpg";
import ex8 from "../img/ex8.jpg";
import ex9 from "../img/ex9.jpg";
import ex10 from "../img/ex10.jpg";

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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(100%);
    transition: 0.2s;
`

const Title = styled.h3`
    color: ${variables.colorWhite};
`

const Description = styled.p`
    color: ${variables.colorWhite};
`
    
export default class projets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.handleClose = this.handleClose.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
    }

    componentDidMount(){
        TweenMax.staggerFrom(".pictures", 3, {y: 200, opacity: 0, ease:Power2.easeOut}, 0.3);
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
        const projets = [
            {
                title: "Construction",
                img: construction,
                w: 3,
                h: 1
            },
            {
                title: "Rénovation",
                img: renovation,
                w: 3,
                h: 2
            },
            {
                title: "Aménagement intérieur",
                img: amenagement,
                w: 1,
                h: 1
            },
            {
                title: "Mobilier",
                img: mobilier,
                w: 3,
                h: 3
            },
            {
                title: "Ex1",
                img: ex1,
                w: 2,
                h: 1
            },
            {
                title: "Ex2",
                img: ex2,
                w: 2,
                h: 2
            },
            {
                title: "Ex3",
                img: ex3,
                w: 1,
                h: 1
            },
            {
                title: "Ex4",
                img: ex4,
                w: 2,
                h: 1
            },
            {
                title: "Ex5",
                img: ex5,
                w: 1,
                h: 2
            },
            {
                title: "Ex6",
                img: ex6,
                w: 2,
                h: 3
            },
            {
                title: "Ex7",
                img: ex7,
                w: 1,
                h: 3
            },
            {
                title: "Ex8",
                img: ex8,
                w: 3,
                h: 3
            },
            {
                title: "Ex9",
                img: ex9,
                w: 2,
                h: 1
            },
            {
                title: "Ex10",
                img: ex10,
                w: 3,
                h: 2
            },
        ];

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
                {focusedElt&&<Modal handleClose={this.handleClose} handlePrevious={this.handlePrevious} handleNext={this.handleNext} elt={focusedElt} img={focusedElt.img} title={focusedElt.title}/>}
            </Layout>
        )
    }
}