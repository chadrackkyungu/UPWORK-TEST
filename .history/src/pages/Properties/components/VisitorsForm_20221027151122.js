import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function VisitorsForm() {
    return (
        <div>

            <Row>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="lastName"
                            label="Last Name"
                            className="form-control"
                            placeholder="Enter last name"
                            type="text"
                            required
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="IdNumber"
                            label="ID Number"
                            className="form-control"
                            placeholder="Enter ID Number"
                            type="text"
                            required
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="phoneNumber"
                            label="Phone Number"
                            className="form-control"
                            placeholder="Enter phone number"
                            type="text"
                            required
                        />
                    </div>
                </Col>

                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="firstName"
                            label="First Name"
                            className="form-control"
                            placeholder="Enter first name"
                            type="text"
                            required
                        />
                    </div></Col>

            </Row>
        </div>
    )
}

export default VisitorsForm
