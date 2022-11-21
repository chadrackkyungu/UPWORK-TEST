import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function VisitorsForm({ token }) {

    const [loadBtn, setloadBtn] = useState();
    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        const formdata = new FormData();

    }

    return (
        <div>
            <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
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
                        </div>
                    </Col>

                </Row>

                <div className="col-12 text-center">
                    <button className="btn btn-registration-clr w-md waves-effect waves-light" type="submit">
                        {!loadBtn ? <span className="me-2">Submit</span> : null}
                        {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                    </button>
                </div>
            </AvForm>
        </div>
    )
}

export default VisitorsForm
