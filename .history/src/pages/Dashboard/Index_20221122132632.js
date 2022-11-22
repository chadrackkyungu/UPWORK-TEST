import React, { useState } from "react"
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
    const [country, setCountry] = useState('Canada')
    const { data, loading, reFetch } = useFetch(`${process.env.REACT_APP_URL}/visitor/${country}`, null);

    const handleChange = event => {
        setCountry(event.target.value);
    };

    const column = [
        { label: "First Name", field: "firstName", sort: "asc", width: 150 },
        { label: "Last Name", field: "lastName", sort: "asc", width: 150 },
        { label: "Gender", field: "gender", sort: "asc", width: 150 },
        { label: "Age", field: "age", sort: "asc", width: 150 },
        { label: "Country", field: "country", sort: "asc", width: 150 },
        { label: "Month", field: "month", sort: "asc", width: 150 },
    ]

    const resultData = {
        columns: column,
        rows: data,
    }

    console.log(data)

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
                            <AvForm className="form-horizontal mt-4">
                                <AvField type="select" name="select" label="Select Option" onChange={handleChange}>
                                    <option value="Canada"> Canada </option>
                                    <option value="southAfrica"> South africa </option>
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