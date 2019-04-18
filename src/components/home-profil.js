import React from "react";
import { Link } from "gatsby";

//CSS
import parallelogram from '../styles/elements/parallelogram';
import styled from 'styled-components';

const Team = styled.div`
    display: flex;
    flex-direction: column;
`

const Division = styled.div`
    display: flex;
    width: 100%;
`

const Info = styled.h4`
    writing-mode: vertical-rl;
`

const Profile = styled.div`
    ${parallelogram(70)};
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

            <Division>
                <Info>Une belle association entre deux époux</Info>

                <ProfileM className="michel">
                    <h1>Michel Keutgens</h1>
                    <h2>Architecte</h2>
                    <p>Passionné de détails techniques et de chantier.</p>
                    <button className="primary-button">
                        <Link to="/atelier">Plus d'infos</Link>
                    </button>
                    <button className="secondary-button">
                        <Link to="/contact">Contacter</Link>
                    </button>
                </ProfileM>
            </Division>

            <Division>
                <ProfileS className="sabina">
                    <h1>Sabina Ianieri</h1>
                    <h2>Architecte d'intérieur</h2>
                    <p>Passionnée de création de mobilier et d'aménagement intérieur.</p>
                    <button className="primary-button">
                        <Link to="/atelier">Plus d'infos</Link>
                    </button>
                    <button className="secondary-button">
                        <Link to="/contact">Contacter</Link>
                    </button>
                </ProfileS>

                <Info>Plus de 25 ans de collaboration.</Info>
            </Division>

        </Team>
    );
}