import React, { useState, useEffect } from 'react'
import { Card, CardBody, Spinner, Badge, Col, Row } from "reactstrap";
import { Modal } from 'react-bootstrap';
import useFetch from "../../../hooks/useFecth";
import { useStore1Selector } from "../../../index";
import { userDetails } from "../../../Redux/Slices/userSlice";
import PropertyForm from './PropertyForm';
import Loading from '../../../components/Loading';
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';

function MyProperties() {

    const user = useStore1Selector(userDetails);
    const token = user?.token;
    const { data } = useFetch(`https://security-check-in.herokuapp.com/api/v1/properties`, token);
    const propImg = "https://security-check-in.herokuapp.com/img/properties/";

    if (!data) {
        return <Loading />
    }

    return (
        <div>
            <CardBody>
                {
                    data.length <= 0 ? <Loading /> :
                        <Row>
                            {
                                data?.map((property, i) =>
                                    <Col md={4} key={i}>
                                        <Card className='tour-card'>
                                            <CardBody>
                                                <div className='pb-4 image-cover'>
                                                    <img src={`${propImg}${property.propertyImage}`} alt="" />
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5>{property.buildingName}</h5>
                                                    <Link to={`/house-details/${property._id}`} className=''>View details <BsArrowRight /> </Link>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>
                }

            </CardBody>
        </div>
    )
}

export default MyProperties