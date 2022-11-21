import React from 'react'
import useFetch from 'hooks/useFecth';

function VisitorDetails({ propId, token }) {

    const { data } = useFetch(`https://security-check-in.herokuapp.com/api/v1/visitors/${propId}`, token);
    console.log(data)


    return (
        <div>VisitorDetails</div>
    )
}

export default VisitorDetails