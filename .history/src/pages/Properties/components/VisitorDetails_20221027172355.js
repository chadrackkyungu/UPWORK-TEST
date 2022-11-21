import useFetch from 'hooks/useFecth';
import React from 'react'

function VisitorDetails({ propId }) {

    const { data } = useFetch(`https://security-check-in.herokuapp.com/api/v1/visitors/${propId}`, token);
    console.log(data)


    return (
        <div>VisitorDetails</div>
    )
}

export default VisitorDetails