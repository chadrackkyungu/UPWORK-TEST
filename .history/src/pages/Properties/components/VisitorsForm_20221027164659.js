import React, { useState } from 'react'
import { AvField, AvForm } from "availity-reactstrap-validation"
import { Row, Col, CardBody, Spinner } from "reactstrap"

function VisitorsForm({ token, setAddVisitor, reFetch }) {

    const [loadBtn, setloadBtn] = useState();
    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "firstName": values.firstName,
            "lastName": values.lastName,
            "IdNumber": values.IdNumber,
            "phoneNumber": values.phoneNumber,
            "securityId": "63584a761fb8b5de9662775c",
            "propertyId": "6359266e86948918f77e1c2a"
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:4500/api/v1/properties", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "success") {
                    successMessage("Successful added")
                    setloadBtn(false)
                    setAddVisitor(false)
                    reFetch()
                }
                if (result.status === "fail") {
                    warningMessage(`${result.message}`)
                    setloadBtn(false)
                    setAddVisitor(false)
                    reFetch()
                }
                if (result.status === "error") {
                    warningMessage(`${result.message}`)
                    setloadBtn(false)
                    setAddVisitor(false)
                    reFetch()
                }
            })
            .catch(error => {
                warningMessage(`Sorry something went wrong please try again`)
                setloadBtn(false)
                setAddVisitor(false)
                reFetch()
            });

    }

    return (
        <CardBody>
            <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

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

                <div className="col-12 text-center">
                    <button className="btn btn-registration-clr w-md waves-effect waves-light" type="submit">
                        {!loadBtn ? <span className="me-2">Submit</span> : null}
                        {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                    </button>
                </div>
            </AvForm>
        </CardBody>
    )
}

export default VisitorsForm
