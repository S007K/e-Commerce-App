import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function ForgetPassword1() {
    var [data, setdata] = useState({
        username: ""
        
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
        var response = await fetch("/api/user/forgetpassword-1",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({username:data.username})
        })
        response = await response.json()
        if(response.result==="Done"){
            localStorage.setItem("reset-username",data.username)
            navigate("/forgetpassword-2")
            
           
        }
        else
        alert(response.message)
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
                                    <h5 className='text-center bg-secondary p-2 text-light'>Reset Password Section</h5>
                                    <form className='' onSubmit={postData}>
                                        <div className="mb-3">
                                            <input type="text" name="username" id="username" onChange={getData} placeholder="Enter Username To Reset Password: " className='form-control' />
                                        </div>
                                     
                                        <div className="mb-3">
                                            <button className='btn btn-success w-100 btn-lg' type='submit'>Send OTP</button>
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


