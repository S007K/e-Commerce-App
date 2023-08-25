import React, { useState, useEffect } from 'react'

import LeftNav from './LeftNav'
import { Link, useNavigate } from 'react-router-dom';

export default function AdminHome() {
    var [user, setuser] = useState({})
    var navigate = useNavigate()

    async function getAPIData() {
        var response = await fetch("api/user/admin/" + localStorage.getItem("userid"), {
            method: "get",
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.getItem("token")
            }
        })
        response = await response.json()
        console.log(response)
        if (response.result == "Done")
            setuser(response.data)
        else
            navigate("/login")

    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-md-5">
                                {
                                    user.pic ?
                                        <img src={`/public/users/${user.pic}`} width="100%" height="420px" alt="" /> :
                                        <img src="assets/images/noimage.png" width="100%" height="420px" alt="" />
                                }
                            </div>
                            <div className="col-md-7">
                                <h5 className='bg-secondary text-light text-center'>Admin Home</h5>
                                <div className='d-flex'>
                                    <div className='border  p-3 w-50'>Name</div>
                                    <div className='border  p-3 w-50'>{user.name}</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='border  p-3 w-50'>User Name</div>
                                    <div className='border  p-3 w-50'>{user.username}</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='border  p-3 w-50'>Email</div>
                                    <div className='border  p-3 w-50'>{user.email}</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='border  p-3 w-50'>Phone</div>
                                    <div className='border  p-3 w-50'>{user.phone}</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='border  p-3 w-50'>Role</div>
                                    <div className='border  p-3 w-50'>{user.role}</div>
                                </div>
                                <div className='mt-3'>
                                    <Link to="/updateprofile" className='btn btn-secondary w-100'>Update Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
