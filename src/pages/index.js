import React from "react";
import Layout from "../layouts/layout";
import { Link } from "gatsby";

//Components
import HomeProfil from "../components/home-profil";
import HomeExperience from "../components/home-experience";
import HomeAddedValue from "../components/home-added-value";

//Images
import picture1 from "../img/home-picture1.jpg";
import picture2 from "../img/home-picture2.jpg";

//CSS
import parallelogram from '../styles/elements/parallelogram';
import styled from 'styled-components';

export default class index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPicture: 0,
      pictures: [ picture1 , picture2 ],
    }
  }

  componentDidMount() {
    let index = 0
    this.interval = setInterval(() => {
      if (this.state.currentPicture === (this.state.pictures.length -1)) {
        index = 0
      } else {
        index += 1
      }

      this.setState({
        currentPicture: index,
      })
    }, 3000)
  }

  componentWillMount() {
    clearInterval(this.interval)
  }

  render() {
    const Carousel = styled.div`
      ${parallelogram(100)};
      height: 30rem;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%; 
        height: 100%;
        background-size: 40rem auto;
        background-position: center;
        background-image: url(${this.state.pictures[this.state.currentPicture]});
        filter: grayscale(100%);
      }
    `

    const Content = styled.div`
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    `

    return (
      <Layout>
          <Carousel>
            <Content>
              <h1>Atelier d'Architecture Keutgens</h1>
              <p>Région liégeoise</p>
              <h2>Réalisons le projets de votre vie.</h2>
              <button className="primary-button">
                <Link to="/projets">Voir notre portfolio</Link>
              </button>
            </Content>
          </Carousel>

         <HomeProfil />

         <HomeExperience />

         <HomeAddedValue />
      </Layout>
    )
  }
}
