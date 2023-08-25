import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Updateprofile() {
    var [data, setdata] = useState({

        name: "",
        pic: "",
        email: "",
        phone: "",
        addressline1: "",
        addressline2: "",
        addressline3: "",
        pin: "",
        city: "",
        state: ""
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
    function getFile(e) {
        var name = e.target.name
        var value = e.target.files[0]
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        var formData = new FormData()
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("phone", data.phone)
        formData.append("addressline1", data.addressline1)
        formData.append("addressline2", data.addressline2)
        formData.append("addressline3", data.addressline3)
        formData.append("pin", data.pin)
        formData.append("city", data.city)
        formData.append("state", data.state)
        formData.append("pic", data.pic)
        formData.append("_id", localStorage.getItem("userid"))
        var response
        if (localStorage.getItem("role") === "Admin") {
            response = await fetch("/api/user/admin/" + localStorage.getItem("userid"), {
                method: "put",
                headers: {
                    "authorization": localStorage.getItem("token")
                },
                body: formData
            })
        }
        else {
            response = await fetch("/api/user/" + localStorage.getItem("userid"), {
                method: "put",
                headers: {
                    "authorization": localStorage.getItem("token")
                },
                body: formData
            })
        }


        response = await response.json()
        if (response.result === "Done") {
            if (localStorage.getItem('role') === "Admin")
                navigate("/admin-home")
            else
                navigate("/profile")
        }
        else
            alert(response.message)
    }
    async function getAPIData() {
        var response
        if (localStorage.getItem("role") === "Admin") {
            response = await fetch("/api/user/admin/" + localStorage.getItem("userid"), {
                method: "get",
                headers: {
                    "content-type": "application/json",
                    "authorization": localStorage.getItem("token")
                }
            })
        }
        else {
            response = await fetch("/api/user/" + localStorage.getItem("userid"), {
                method: "get",
                headers: {
                    "content-type": "application/json",
                    "authorization": localStorage.getItem("token")
                }
            })
        }
        response = await response.json()
        if (response.result === "Done")
            setdata(response.data)
        else
            navigate("/login")
    }
    useEffect(() => {
        getAPIData()
    }, [])

    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('/assets/images/sl2.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">

                            <h1 className="mb-0 bread"></h1>
                            <div className="container-fluid w-100 mt-5 my-5">

                                <div className=' m-auto' style={{ width: "70%" }}>
                                    <h5 className='text-center bg-secondary p-2 text-light'>Profile Update Section</h5>
                                    <form className='' onSubmit={postData}>
                                        <div className="row mb-3">
                                            <div className="col-md-6 col-12">
                                                <input type="text" name="name" id="name" onChange={getData} placeholder="Enter full name: " className='form-control' value={data.name} />
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <input type="file" name="pic" id="pic" onChange={getFile} className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6 col-12">
                                                <input type="text" name="email" id="email" onChange={getData} placeholder="Enter email: " className='form-control' value={data.email} />
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <input type="text" name="phone" id="phone" onChange={getData} placeholder="Enter phone: " className='form-control' value={data.phone} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6 col-12">
                                                <input type="text" name="addressline1" id="addressline1" onChange={getData} placeholder="Enter House,Floor or Building Number : " className='form-control' value={data.addressline1} />
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <input type="text" name="addressline2" id="addressline2" onChange={getData} placeholder="Enter Street Number or Near By : " className='form-control' value={data.addressline2} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6 col-12">
                                                <input type="text" name="addressline3" id="addressline3" onChange={getData} placeholder="Enter Village or Locality :" className='form-control' value={data.addressline3} />
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <input type="text" name="pin" id="pin" onChange={getData} placeholder="Enter Number : " className='form-control' value={data.pin} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6 col-12">
                                                <input type="text" name="city" id="city" onChange={getData} placeholder="Enter City Name : " className='form-control' value={data.city} />
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <input type="text" name="state" id="state" onChange={getData} placeholder="Enter state Number : " className='form-control' value={data.state} />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <button className='btn btn-success w-100 btn-lg' type='submit'>Update </button>
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


