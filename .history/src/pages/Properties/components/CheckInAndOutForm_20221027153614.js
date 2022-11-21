import React, { useState } from 'react'
import { AvField, AvForm } from "availity-reactstrap-validation"
import { Row, Col, CardBody, Spinner } from "reactstrap"

function CheckInAndOutForm({ token }) {

    const [loadBtn, setloadBtn] = useState();
    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        const formdata = new FormData();

    }

    return (
        <CardBody>
            <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                <div className="mb-3">
                    <AvField
                        name="unitName"
                        label="Unit Name / Number"
                        className="form-control"
                        placeholder="Enter unit name"
                        type="text"
                        required
                    />
                </div>
                <div className="mb-3">
                    <AvField
                        name="tenantName"
                        label="Tenant Name"
                        className="form-control"
                        placeholder="Enter tenant name"
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

export default CheckInAndOutForm
