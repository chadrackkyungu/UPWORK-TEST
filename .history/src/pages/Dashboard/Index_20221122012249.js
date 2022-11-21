import React from "react"
import MetaTags from 'react-meta-tags';
import { Container, Col, Row, Card } from "reactstrap"
import Layout from "../Layout"
import BarChart from './Charts/barchart';
import PieChart from './Charts/PieChart';

const Properties = () => {

    return (
        <Layout>
            <React.Fragment>
                <MetaTags>
                    <title>  Dashboard </title>
                </MetaTags>

                <Container fluid className="mt-5">
                    <form>
                        <Input type="select">
                            <option> one</option>
                            <option> two </option>
                        </Input>
                    </form>
                    <Row>
                        <Col md={6}>
                            <Card>
                                <PieChart />
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <BarChart />
                            </Card>
                        </Col>

                    </Row>
                </Container>

            </React.Fragment>
        </Layout>
    )
}

export default Properties