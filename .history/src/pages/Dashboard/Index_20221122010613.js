import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import Layout from "../Layout"

const Properties = () => {

    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>  Dashboard </title>
                    </MetaTags>

                    <Container fluid>
                        {/* <MyProperties /> */}
                    </Container>

                </div>
            </React.Fragment>
        </Layout>
    )
}

export default Properties