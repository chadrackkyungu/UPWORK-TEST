import React from 'react'
import useFetch from 'hooks/useFecth';

function VisitorDetails({ visitorId, token }) {

    const { data } = useFetch(`http://localhost:4500/api/v1/visitors/${visitorId}`, token);
    const userImg = "https://security-check-in.herokuapp.com/img/users/";

    console.log(`${userImg}${data?.securityId[0]?.photo}}`)


    return (
        <div>
            <h5>Visitor Added by : </h5>
            <img src={`{${userImg}${data?.securityId[0]?.photo}`} alt="" />
            <p>{data?.securityId[0]?.firstName}</p>
            <p>{data?.securityId[0]?.lastName}</p>
        </div>
    )
}

export default VisitorDetails