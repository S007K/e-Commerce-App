import React, { useState,useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';

import LeftNav from './LeftNav'
import { getContact, deleteContact, updateContact } from "../../Store/ActionCreaters/ContactActionCreators"
import { useNavigate,useParams } from 'react-router-dom';

export default function AdminSingleContact() {
    var [data,setdata] = useState({})
    var contact = useSelector((state) => state.ContactStateData)
    var {_id} = useParams()
    var dispatch = useDispatch()
    var navigate = useNavigate()
    
    function getAPIData(){
        dispatch(getContact())
        var d = contact.find((item)=>item._id===(_id))
        if(d){
            setdata(d)
        }
    }
    function update(){
        dispatch(updateContact({...data,status:"Done"}))
        setdata((old)=>{
            return{
                ...old,
                ['status']:"Done"
            }
        })
    }
    function deleteRecord(){
        dispatch(deleteContact({_id:_id}))
        navigate("/admin-contact")
    }
    useEffect(() => {
       getAPIData()
    }, [contact.length])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>Single Contact </h5>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                ID
                            </div>
                            <div className="w-50 p-3 border">
                                {data._id}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Name
                            </div>
                            <div className="w-50 p-3 border">
                                {data.name}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Email
                            </div>
                            <div className="w-50 p-3 border">
                                {data.email}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Phone
                            </div>
                            <div className="w-50 p-3 border">
                                {data.phone}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Subject
                            </div>
                            <div className="w-50 p-3 border">
                                <p className='w-50'>{data.subject}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Message
                            </div>
                            <div className="w-50 p-3 border">
                                <p className='w-50'>{data.message}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Date
                            </div>
                            <div className="w-50 p-3 border">
                                {data.date}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Status                                
                            </div>
                            <div className="w-50 p-3 border">
                                {data.status}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-100 p-3 border">
                                {
                                    data.status==="Active"?
                                    <button className='btn btn-secondary w-100' onClick={update}>Update Status to Done</button>:
                                    <button className='btn btn-secondary w-100' onClick={deleteRecord}>Delete</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
