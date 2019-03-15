import React from "react";
import Layout from "../layouts/layout";

//CSS
import parallelogram from '../styles/elements/parallelogram';
import styled from 'styled-components';

const Contact = styled.div`
    ${parallelogram(100)};
    height: 20rem;
`

export default function contact() {
    return (
        <Layout>
            <Contact className="atelier">
                <div>
                    <p>Bonjour</p>
                </div>
            </Contact>

            <Contact className="michel">
                <div>
                    <p>Bonjour</p>
                </div>
            </Contact>

            <Contact className="sabina">
                <div>
                    <p>Bonjour</p>
                </div>
            </Contact>

        </Layout>
    );
}