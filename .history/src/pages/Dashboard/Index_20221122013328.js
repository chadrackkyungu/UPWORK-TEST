import React from "react"
import MetaTags from 'react-meta-tags';
import { Container, Col, Row, Card, CardBody } from "reactstrap"
import Layout from "../Layout"
import BarChart from './Charts/barchart';
import PieChart from './Charts/PieChart';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { MDBDataTable } from "mdbreact"

const Dashboard = () => {

    return (
        <Layout>
            <React.Fragment>
                <MetaTags>
                    <title>  Dashboard </title>
                </MetaTags>

                <Container fluid className="mt-5">

                    {/* <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => handleValidSubmit(e, v)}>
                        <AvField label="Select" className="form-control" type="select">
                            <option>one</option>
                            <option>one</option>
                        </AvField>
                    </AvForm> */}

                    <Row>
                        <Col md={6}>
                            <Card>
                                <CardBody>
                                    <PieChart />

                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <CardBody>

                                    <BarChart />
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                    <MDBDataTable entries={5} entriesOptions={[5, 10, 50]} responsive bordered striped hover data={data} fullPagination />
                </Container>

            </React.Fragment>
        </Layout>
    )
}

export default Dashboard