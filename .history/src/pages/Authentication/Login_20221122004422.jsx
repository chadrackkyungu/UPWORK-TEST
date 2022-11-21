import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useState } from "react"
import { Row, Col, CardBody, Card, Spinner } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import { useHistory, Link } from "react-router-dom"
import LoginForm from "./components/LoginForm";
import loginImg from "../../assets/images/Register/login.svg";
import { successMessage, warningMessage } from "../../components/Toast"
import { useStore1Dispatch } from "../../index";
import { Login } from "../../Redux/Slices/userSlice";

const LoginComp = () => {
  const history = useHistory()
  const dispatch = useStore1Dispatch();
  const [loadBtn, setloadBtn] = useState();

  console.log(process.env.REACT_APP_URL)

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    setloadBtn(true)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": values.email,
      "password": values.password
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_URL}/users/login`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 'success') {
          dispatch(Login(result));
          successMessage("Successful logged in");
          setloadBtn(false);
          window.setTimeout(() => {
            history.push("/dashboard");
          }, 1500);
        }
        if (result.status === 'fail') {
          warningMessage(result.message);
          setloadBtn(false);
        }
      })
      .catch(error => {
        warningMessage(`Something went wrong try again ${error.message}`);
        setloadBtn(false);
      });
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login page </title>
      </MetaTags>

      <Row>
        <Col md={5} className="registration-img"> </Col>
        <Col md={7} className="d-flex justify-content-center align-items-center">
          <div className='w-75'>
            <Card className="overflow-hidden">
              <CardBody className="p-4">
                <div className="p-3">
                  <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                    <LoginForm />

                    <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit">
                      {!loadBtn ? <span className="me-2">Submit</span> : null}
                      {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                    </button>
                  </AvForm>
                </div>
              </CardBody>
            </Card>
          </div>
        </Col>

      </Row>
    </React.Fragment>
  )
}

export default LoginComp
