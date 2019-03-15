import React from "react";
import { Link } from "gatsby";

//CSS
import parallelogram from '../styles/elements/parallelogram';
import styled from 'styled-components';

const Team = styled.div`
    display: flex;
    flex-direction: column;
`

const Profile = styled.div`
    ${parallelogram(80)};
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProfileM = styled(Profile)`
    align-self: flex-end;
`

const ProfileS = styled(Profile)`
    align-self: flex-start;
`

export default function homeProfil() {
    return (
        <Team className="equipe">
            <h3>Une équipe</h3>

            <ProfileM className="michel">
                <h1>Michel Keutgens</h1>
                <h2>Architecte</h2>
                <button className="primary-button">
                    <Link to="/atelier">Plus d'infos</Link>
                </button>
                <button className="secondary-button">
                    <Link to="/contact">Contacter</Link>
                </button>
            </ProfileM>

            <ProfileS className="sabina">
                <h1>Sabina Ianieri</h1>
                <h2>Architecte d'intérieur</h2>
                <button className="primary-button">
                    <Link to="/atelier">Plus d'infos</Link>
                </button>
                <button className="secondary-button">
                    <Link to="/contact">Contacter</Link>
                </button>
            </ProfileS>

        </Team>
    );
}