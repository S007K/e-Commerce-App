import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Login() {
    var [data, setdata] = useState({
        username: "",
        password: ""
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
        var response = await fetch("/api/user/login",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({username:data.username,password:data.password})
        })
        response = await response.json()
        if(response.result==="Done"){
            localStorage.setItem("login",true)
            localStorage.setItem("name",response.data.name)
            localStorage.setItem("username",response.data.username)
            localStorage.setItem("userid",response.data._id)
            localStorage.setItem("role",response.data.role)
            localStorage.setItem("token",response.token)
            
            if(response.data.role==="Admin")
            navigate("/admin-home")
            else
            navigate("/profile")
        }
        else
        alert("Invalid Username or Password!!!")
    }
    
    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('/assets/images/lg2.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">

                            <h1 className="mb-0 bread"></h1>
                            <div className="container-fluid w-100 mt-5 my-5">

                                <div className=' m-auto' style={{width:"70%"}}>
                                    <h5 className='text-center bg-secondary p-2 text-light'>Login Section</h5>
                                    <form className='' onSubmit={postData}>
                                        <div className="mb-3">
                                            <input type="text" name="username" id="username" onChange={getData} placeholder="Enter username: " className='form-control' />
                                        </div>
                                        <div className="mb-3">

                                            <input type="password" name="password" id="password" onChange={getData} placeholder="Enter Password: " className='form-control' />
                                        </div>
                                        <div className="mb-3">
                                            <button className='btn btn-success w-100 btn-lg' type='submit'>Login</button>
                                        </div>
                                    </form>
                                    <div className='d-flex justify-content-between'>
                                        <Link className='text-dark' to="/forgetpassword-1">Forget Password</Link>
                                        <Link className='text-dark' to="/signup"> NewUser ? Create a free Account</Link>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}


