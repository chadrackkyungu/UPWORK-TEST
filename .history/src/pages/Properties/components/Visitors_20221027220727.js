import React, { useState, useEffect } from 'react'
import { Card, CardBody, Spinner, Badge } from "reactstrap";
import { Modal } from 'react-bootstrap';
import useFetch from "../../../hooks/useFecth";
import { useStore1Selector } from "../../../index";
import { userDetails } from "../../../Redux/Slices/userSlice";
import Loading from '../../../components/Loading';
import { Link } from 'react-router-dom';
import { HiUsers } from 'react-icons/hi';
import { GrView } from 'react-icons/gr';
import { AiFillCarryOut } from 'react-icons/ai';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BsCheckAll } from 'react-icons/bs';


function Visitors({ id }) {

    const user = useStore1Selector(userDetails);
    const token = user.token;
    const { data } = useFetch(`https://security-check-in.herokuapp.com/api/v1/checkInOut/${id}/checkIn`, token);

    console.log(data)

    const [smExample, setSmExample] = useState(false);
    const [secId, setSecId] = useState();
    const [assign, setAssign] = useState(false);
    const [suspend, setSuspend] = useState(false);
    const [unSuspend, setUnSuspend] = useState(false);
    const [deleteUser, setDeleteUser] = useState(false);

    if (!data) {
        return <Loading />
    }

    return (
        <div>
            <div className="container mb-3">
                <Link to="/#" className='btn text-white mx-2'> <BsCheckAll /> Daily check in</Link>
                <Link to="/#" className='btn text-white mx-2'>  <BsCheckAll /> Weekly check in</Link>
                <Link to="/#" className='btn text-white mx-2'>  <BsCheckAll /> Monthly check in</Link>
                <Link className='btn text-white mx-2' to={`/visitors/${id}`}> <HiUsers /> Visitors</Link>
            </div>
            <Card>
                <div className="table-responsive p-4">
                    <table className="table align-middle table-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th style={{ width: "20px" }}>
                                    <div className="form-check font-size-16 align-middle">
                                        <input type="checkbox" className="form-check-input" id="customCheck1" />
                                        <label className="form-check-label" htmlFor="customCheck1"> &nbsp;</label>
                                    </div>
                                </th>
                                <th className="align-middle">Name</th>
                                <th className="align-middle">Phone</th>
                                <th className="align-middle">ID Number</th>
                                <th className="align-middle">Time In</th>
                                <th className="align-middle">Time Out</th>
                                <th className="align-middle">View</th>
                                <th className="align-middle">Status</th>
                                <th className="align-middle">Delete</th>
                            </tr>
                        </thead>

                        {
                            data?.map((check, i) => {
                                return (
                                    <tbody key={i}>
                                        <tr key={"_tr_" + "key"} >
                                            <td>
                                                <div className="form-check font-size-16">
                                                    <input type="checkbox" className="form-check-input" id={"id"} />
                                                    <label className="form-check-label" htmlFor={"idd"}> &nbsp;</label>
                                                </div>
                                            </td>
                                            <td>{"Patrick"}</td>
                                            <td>{"0827000150"}</td>
                                            <td>{"5623JKP"}</td>
                                            <td>{"2022/05/10/ 09 : 30"}</td>
                                            <td>{"2022/05/10/ 09 : 30"}</td>
                                            <td>
                                                <Badge className="bg-info cursor-pointer p-2"
                                                    onClick={() => {
                                                        setSuspend(true)
                                                        setSecId("security?._id")
                                                    }}> <GrView /> View </Badge>
                                            </td>
                                            <td>
                                                <Badge className="bg-dark cursor-pointer p-2"
                                                    onClick={() => {
                                                        setUnSuspend(true)
                                                        setSecId("security?._id")
                                                    }}> <AiFillCarryOut /> Out </Badge>
                                            </td>
                                            <td>
                                                <Badge className="bg-danger cursor-pointer p-2"
                                                    onClick={() => {
                                                        setDeleteUser(true)
                                                        setSecId("security?._id")
                                                    }}> <RiDeleteBin6Fill /> Delete </Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>
            </Card>
        </div>
    )
}

export default Visitors