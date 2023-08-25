import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ForgetPassword2() {
    var [data, setdata] = useState({
        otp: -1
    })
    var navigate = useNavigate()
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        var response = await fetch("/api/user/forgetpassword-2", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ otp: Number(data.otp),username:localStorage.getItem("reset-username")})
        })
        response = await response.json()
        if (response.result === "Done")
            navigate("/forgetpassword-3")
        else
            alert(response.message)
    }
    return (
        <>
            <div className="hero-wrap hero-bread">
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">
                            <div className="container-fluid w-100">
                                <div className='m-auto w-100'>
                                    <h5 className='text-center bg-secondary p-2 text-light'>Reset Password Section</h5>
                                    <form className='' onSubmit={postData}>
                                        <div className="mb-3">
                                            <input type="text" name="otp" id="username" onChange={getData} placeholder='Enter OTP Which sent on Your Registered Email Id : ' className='form-control' />
                                        </div>
                                        <div className="mb-3">
                                            <button className='btn btn-secondary w-100 btn-lg' type='submit'>Submit OTP</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
