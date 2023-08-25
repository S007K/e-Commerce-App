import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ForgetPassword3() {
    var [data, setdata] = useState({
        password: "",
        cpassword: ""

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
        if(data.password === data.cpassword){
            var response = await fetch("/api/user/forgetpassword-3", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ username:localStorage.getItem("reset-username"),password: data.password })
            })
            response = await response.json()
            if (response.result === "Done") {
                localStorage.removeItem("reset-username")
                navigate("/login")
    
    
            }
            else
            alert(response.message)
        }

      
        else
        alert("Password and Confirm Password Doesn't Matched!!!!")
    }
    

    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('/assets/images/lg2.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">

                            <h1 className="mb-0 bread"></h1>
                            <div className="container-fluid w-100 mt-5 my-5">

                                <div className=' m-auto w-100'>
                                    <h5 className='text-center bg-secondary p-2 text-light'>Reset Password Section</h5>
                                    <form className='' onSubmit={postData}>
                                        <div className="mb-3">
                                            <input type="password" name="password" id="password" onChange={getData} placeholder="Enter New Password : " className='form-control' />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" name="cpassword" id="cpassword" onChange={getData} placeholder="Confirm Password: " className='form-control' />
                                        </div>

                                        <div className="mb-3">
                                            <button className='btn btn-success w-100 btn-lg' type='submit'>Reset Password</button>
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


