import React from "react"
import MetaTags from 'react-meta-tags';
import { Container, Col, Row, Card, CardBody } from "reactstrap"
import Layout from "../Layout"
import BarChart from './Charts/barchart';
import PieChart from './Charts/PieChart';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { MDBDataTable } from "mdbreact"
import { useStore1Selector } from "index";
import { userDetails } from './../../Redux/Slices/userSlice';
import useFetch from './../../hooks/useFecth';

const Dashboard = () => {
    const userDet = useStore1Selector(userDetails);
    const details = userDet?.data?.data;
    const { data, loading, reFetch } = useFetch(`${process.env.REACT_APP_URL}/visitor/canada`, null);

    console.log(" Result : ", data)

    function handleValidSubmit(values) {
        console.log(values)
    }

    const dataDb = [
        {
            Name: "John",
            sureName: "Doe",
            phoneNumber: "0680275001",
            date: "2022-11-22",
        },
        {
            Name: "Caleb",
            sureName: "Gael",
            phoneNumber: "0680275001",
            date: "2022-11-22",
        }
    ]

    const column = [
        { label: "Name", field: "Name", sort: "asc", width: 150 },
        { label: "Sure Name", field: "sureName", sort: "asc", width: 150 },
        { label: "Phone number", field: "phoneNumber", sort: "asc", width: 150 },
        { label: "Date", field: "date", sort: "asc", width: 150 },
    ]

    const resultData = {
        columns: column,
        rows: dataDb,
    }

    return (
        <Layout>
            <React.Fragment>
                <MetaTags>
                    <title>  Dashboard </title>
                </MetaTags>

                <Container fluid className="mt-5">

                    <h5 className="mb-3 bg-success p-3 rounded-2 text-white"> Welcome {details?.firstName}  {details?.lastName}</h5>

                    <Card>
                        <CardBody>
                            <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => handleValidSubmit(e, v)}>
                                <AvField type="select" name="select" label="Select Option">
                                    <option>Select...</option>
                                    <option> South africa </option>
                                    <option> DR Congo </option>
                                </AvField>
                            </AvForm>
                        </CardBody>
                    </Card>

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
                    <Card >
                        <CardBody>
                            <MDBDataTable entries={5} entriesOptions={[5, 10, 50]} responsive bordered striped hover data={resultData} fullPagination />
                        </CardBody>
                    </Card>
                </Container>

            </React.Fragment>
        </Layout>
    )
}

export default Dashboard