import React from 'react'
import useFetch from 'hooks/useFecth';

function VisitorDetails({ visitorId, token }) {

    const { data } = useFetch(`http://localhost:4500/api/v1/visitors/${visitorId}`, token);
    const userImg = "https://security-check-in.herokuapp.com/img/users/";
    const propImg = "https://security-check-in.herokuapp.com/img/properties/";

    console.log(`${userImg}${data?.securityId[0]?.photo}`)


    return (
        <div>
            <h5>Visitor Added by : </h5>
            <img src={`${userImg}${data?.securityId[0]?.photo}`} alt="" />
            <p>{data?.securityId[0]?.firstName}</p>
            <p>{data?.securityId[0]?.lastName}</p>

            <h5>Property : </h5>
            <div className='pb-4 image-cover'>
                <img src={`${propImg}${data?.propertyId[0]?.propertyImage}`} alt="" />
            </div>
            <div className='d-flex'>
                <p className='px-3 h5'>Building Name : {data?.propertyId[0]?.buildingName}</p>
                <p className='px-3 h5'>Address : {data?.propertyId[0]?.address}</p>
                <p className='px-3 h5'>{data?.propertyId[0]?.houseNumber}</p>
            </div>
        </div>
    )
}

export default VisitorDetails