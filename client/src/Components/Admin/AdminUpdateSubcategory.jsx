import React,{useState,useEffect} from 'react'
import LeftNav from './LeftNav'

import {updateSubcategory,getSubcategory} from "../../Store/ActionCreaters/SubcategoryActionCreators"
import { useNavigate,useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
export default function AdminUpdateSubcategory() {
    var [name,setname] = useState("")
    var {_id} = useParams()
    var subcategory = useSelector((state)=>state.SubcategoryStateData)
    var navigate = useNavigate()
    var dispatch = useDispatch()
    function getData(e){
        setname(e.target.value)
    } 
    function postData(e){
        e.preventDefault()
        var item = subcategory.find((item)=>item.name===name)
        if(item)
        alert("Subcategory Name is Already Exist")
        else{
            dispatch(updateSubcategory({_id:_id,name:name}))
            navigate("/admin-subcategory")
        }
    }
    useEffect(()=>{
        dispatch(getSubcategory())
        var item = subcategory.find((item)=>item._id===(_id))
        if(item)
        setname(item.name)
    },[subcategory.length])
    return (
        <>
            <div className="contain-fluid my-5">
            <div className="row">
                <div className="col-lg-2 col-12">
                    <LeftNav/>
                </div>
                <div className="col-lg-10 col-12">
                    <h5 className='bg-secondary text-center text-light p-1'>Subcategory</h5>
                    <form className='p-3' onSubmit={postData}>
                        <div className="mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder='Enter Subcategory Name : ' className='form-control' onChange={getData} value={name}/>
                        </div>
                        <div className="mb-3">
                            <button type='submit' className='btn btn-secondary w-100'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
