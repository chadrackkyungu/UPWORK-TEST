import React from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import Layout from "../Layout"
import { useParams } from "react-router-dom";

const VisitorsPage = () => {

    const { id } = useParams()

    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>Security Check in and out</title>
                    </MetaTags>

                    <Container fluid>

                    </Container>

                </div>
            </React.Fragment>
        </Layout>
    )
}

export default VisitorsPage