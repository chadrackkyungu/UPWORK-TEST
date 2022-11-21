import React from 'react'
import useFetch from 'hooks/useFecth';

function VisitorDetails({ visitorId, token }) {

    const { data } = useFetch(`http://localhost:4500/api/v1/visitors/${visitorId}`, token);
    console.log(data?.securityId[0])


    return (
        <div>VisitorDetails</div>
    )
}

export default VisitorDetails