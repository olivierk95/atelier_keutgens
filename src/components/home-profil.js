import React from "react";
import { Link } from "gatsby";

export default function homeProfil() {
    return (
        <div className="equipe">
            <h3>Une équipe</h3>

            <div className="home-profil home-michel">
                <h1>Michel Keutgens</h1>
                <h2>Architecte</h2>
                <button className="primary-button">
                    <Link to="/atelier">Plus d'infos</Link>
                </button>
                <button className="secondary-button">
                    <Link to="/contact">Contacter</Link>
                </button>
            </div>

            <div className="home-profil home-sabina">
                <h1>Sabina Ianieri</h1>
                <h2>Architecte d'intérieur</h2>
                <button className="primary-button">
                    <Link to="/atelier">Plus d'infos</Link>
                </button>
                <button className="secondary-button">
                    <Link to="/contact">Contacter</Link>
                </button>
            </div>

        </div>
    );
}