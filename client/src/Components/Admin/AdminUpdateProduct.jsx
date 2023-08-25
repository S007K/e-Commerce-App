import React, { useState, useEffect } from 'react'
import LeftNav from './LeftNav'

import { updateProduct, getProduct } from "../../Store/ActionCreaters/ProductActionCreators"
import { getMaincategory } from "../../Store/ActionCreaters/MaincategoryActionCreators"
import { getSubcategory } from "../../Store/ActionCreaters/SubcategoryActionCreators"
import { getBrand } from "../../Store/ActionCreaters/BrandActionCreators"
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
export default function AdminUpdateProduct() {
    var [data, setdata] = useState({
        name: "",
        maincategory: "",
        subcategory: "",
        brand: "",
        color: "",
        size: "",
        baseprice: 0,
        discount: 0,
        finalprice: 0,
        stock: "In Stock",
        description: "This is Sample Product",
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: ""
    })
    var { _id } = useParams()
    var maincategory = useSelector((state) => state.MaincategoryStateData)
    var subcategory = useSelector((state) => state.SubcategoryStateData)
    var brand = useSelector((state) => state.BrandStateData)
    var product = useSelector((state) => state.ProductStateData)
    var navigate = useNavigate()
    var dispatch = useDispatch()
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
    function postData(e) {
        e.preventDefault()
        var bp = Number(data.baseprice)
        var d = Number(data.discount)
        var fp = parseInt(bp - bp * d / 100)
        var mc = data.maincategory
        var sc = data.subcategory
        var br = data.brand
        if (mc === "")
            mc = maincategory[0].name
        if (sc === "")
            sc = subcategory[0].name
        if (br === "")
            br = brand[0].name
        var formData = new FormData()
        formData.append("name", data.name)
        formData.append("maincategory", mc)
        formData.append("subcategory", sc)
        formData.append("brand", br)
        formData.append("color", data.color)
        formData.append("size", data.size)
        formData.append("baseprice", bp)
        formData.append("discount", d)
        formData.append("finalprice", fp)
        formData.append("stock", data.stock)
        formData.append("description", data.description)
        formData.append("pic1", data.pic1)
        formData.append("pic2", data.pic2)
        formData.append("pic3", data.pic3)
        formData.append("pic4", data.pic4)

        dispatch(updateProduct({data:formData,_id:_id}))
        navigate("/admin-product")
    }
    useEffect(() => {
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
        dispatch(getProduct())
        var item = product.find((item) => item._id === _id)
        if (item)
            setdata(product.find((item) => item._id === _id))
    }, [product.length])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>Product</h5>
                        <form className='p-3' onSubmit={postData}>
                            <div className="mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder='Enter Product Name : ' className='form-control' onChange={getData} value={data.name} />
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="maincategory">Maincategory</label>
                                    <select name="maincategory" id="maincategory" value={data.maincategory} onChange={getData} className="form-control">
                                        {
                                            maincategory.map((item, index) => {
                                                return <option key={index} value={item.name} >{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="subcategory">Subcategory</label>
                                    <select name="subcategory" id="subcategory" value={data.subcategory} onChange={getData} className="form-control">
                                        {
                                            subcategory.map((item, index) => {
                                                return <option key={index} value={item.name} >{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="brand">Brand</label>
                                    <select name="brand" _id="brand" onChange={getData} value={data.brand} className="form-control">
                                        {
                                            brand.map((item, index) => {
                                                return <option key={index} value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="stock">Stock</label>
                                    <select name="stock" id="stock" onChange={getData} value={data.stock} className="form-control">
                                        <option value="In Stock" >In Stock</option>
                                        <option value="Out Of Stock" >Out Of Stock</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="color">Color</label>
                                    <input type="text" name="color" id="color" placeholder='Enter Color ' onChange={getData} className="form-control" value={data.color} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="size">Size</label>
                                    <input type="text" name="size" id="size" placeholder='Enter Size ' onChange={getData} className="form-control" value={data.size} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="baseprice">Base Price</label>
                                    <input type="number" name="baseprice" id="baseprice" placeholder='Enter Base Price ' onChange={getData} className="form-control" value={data.baseprice} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="discount">Discount</label>
                                    <input type="number" name="discount" id="discount" placeholder='Enter Discount ' onChange={getData} className="form-control" value={data.discount} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description">Description</label>
                                <textarea name="description" id="description" value={data.description} rows="4" onChange={getData} className="form-control"></textarea>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic1">Pic1</label>
                                    <input type="file" name="pic1" id="pic1" onChange={getFile} className="form-control" />
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic2">Pic2</label>
                                    <input type="file" name="pic2" id="pic2" onChange={getFile} className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic3">Pic3</label>
                                    <input type="file" name="pic3" id="pic3" onChange={getFile} className="form-control" />
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic4">Pic4</label>
                                    <input type="file" name="pic4" id="pic4" onChange={getFile} className="form-control" />
                                </div>
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
