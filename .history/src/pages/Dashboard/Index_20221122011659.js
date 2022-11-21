import React from "react"
import MetaTags from 'react-meta-tags';
import { Container, Col, Row, Card } from "reactstrap"
import Layout from "../Layout"
import BarChart from './Charts/barchart';

const Properties = () => {

    return (
        <Layout>
            <React.Fragment>
                <MetaTags>
                    <title>  Dashboard </title>
                </MetaTags>

                <Container fluid>
                    <Row>
                        <Col md={6}>
                            <Card>
                                <BarChart />
                            </Card>
                        </Col>
                        <Col md={4}>
                        </Col>
                    </Row>
                </Container>

            </div>
        </Layout>
    )
}

export default Properties