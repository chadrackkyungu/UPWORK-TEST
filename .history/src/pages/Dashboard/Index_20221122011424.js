import React from "react"
import MetaTags from 'react-meta-tags';
import { Container, Col, Row, Card } from "reactstrap"
import Layout from "../Layout"

const Properties = () => {

    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>  Dashboard </title>
                    </MetaTags>

                    <Container fluid>
                        <Row>
                            <Col md={4}>
                                <Card>

                                </Card>
                            </Col>
                            <Col md={4}>
                            </Col>
                            <Col md={4}>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </React.Fragment>
        </Layout>
    )
}

export default Properties