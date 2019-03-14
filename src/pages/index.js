import React from "react";
import Layout from "../layouts/layout";
import { Link } from "gatsby";

//Components
import HomeProfil from "../components/home-profil";
import HomeExperience from "../components/home-experience";

//Images
import picture1 from "../img/home-picture1.jpg";
import picture2 from "../img/home-picture2.jpg";

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
    return (
      <Layout>
          <div className="home-carousel" style={{backgroundImage: `url(${this.state.pictures[this.state.currentPicture]})`}}>
            <h1>Atelier d'Architecture Keutgens</h1>
            <p>Région liégeoise</p>
            <h2>Réalisons le projets de votre vie.</h2>
            <button className="primary-button">
              <Link to="/projets">Voir notre portfolio</Link>
            </button>
          </div>

         <HomeProfil />

         <HomeExperience />
      </Layout>
    )
  }
}
