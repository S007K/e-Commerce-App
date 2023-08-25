import React, { useState, useEffect } from 'react'
import LeftNav from './LeftNav'

import { addMaincategory, getMaincategory } from "../../Store/ActionCreaters/MaincategoryActionCreators"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
export default function AdminAddMaincategory() {
    var [name, setname] = useState("")
    var maincategory = useSelector((state) => state.MaincategoryStateData)
    var navigate = useNavigate()
    var dispatch = useDispatch()
    function getData(e) {
        setname(e.target.value)
    }
    function postData(e) {
        e.preventDefault()
        if (maincategory.length) {
            var item = maincategory.find((item) => item.name === name)
            if (item)
                alert("Maincategory Name is Already Exist")
            else {
                dispatch(addMaincategory({ name: name }))
                navigate("/admin-maincategory")
            }
        }
        else{
            dispatch(addMaincategory({ name: name }))
            navigate("/admin-maincategory")
        }

    }

    useEffect(() => {
        dispatch(getMaincategory())
    }, [maincategory.length])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>Maincategory</h5>
                        <form className='p-3' onSubmit={postData}>
                            <div className="mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder='Enter Maincategory Name : ' className='form-control' onChange={getData} />
                            </div>
                            <div className="mb-3">
                                <button type='submit' className='btn btn-secondary w-100'>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
