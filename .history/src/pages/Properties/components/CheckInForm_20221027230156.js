import React, { useState } from 'react'
import { AvField, AvForm } from "availity-reactstrap-validation"
import { Row, Col, CardBody, Spinner } from "reactstrap"
import { useStore1Selector } from "../../../index";
import { userDetails } from "../../../Redux/Slices/userSlice";

function CheckInForm({ token, visitorId, propId, setCheckIn }) {

    const user = useStore1Selector(userDetails);
    const secId = user?.data?.data?._id
    console.log(secId);

    const [loadBtn, setloadBtn] = useState();
    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "unitName": "09",
            "tenantName": "two",
            "visitorId": visitorId,
            "securityId": "635859a41fb8b5de96627872",
            "propertyId": propId
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

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
                        {!loadBtn ? <span className="me-2">Check In</span> : null}
                        {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                    </button>
                </div>
            </AvForm>
        </CardBody>
    )
}

export default CheckInForm
