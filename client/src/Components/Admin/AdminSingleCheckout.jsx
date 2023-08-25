import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';

import LeftNav from './LeftNav'
import { getCheckout, updateCheckout } from "../../Store/ActionCreaters/CheckoutActionCreators"
import { useParams } from 'react-router-dom';

export default function AdminSingleCheckout() {
    var [data, setdata] = useState({})
    var [user, setuser] = useState({})
    var [orderstatus, setorderstatus] = useState("")
    var [paymentstatus, setpaymentstatus] = useState("")
    var checkouts = useSelector((state) => state.CheckoutStateData)
    var { _id } = useParams()
    var dispatch = useDispatch()

    async function getAPIData() {
        dispatch(getCheckout())
        var d = checkouts.find((item) => item._id === _id)
        if (d) {
            setdata(d)
            setorderstatus(d.paymentorderstatus)
            setpaymentstatus(d.paymentstatus)
            var response = await fetch("/api/user/admin/" + d.userId, {
                method: "get",
                headers: {
                    "content-type": "application/json",
                    "authorization": localStorage.getItem("token")
                }
            })
            response = await response.json()
            setuser(response.data)
        }
    }
    function update() {
        dispatch(updateCheckout({ ...data, paymentStatus: paymentstatus, orderStatus: orderstatus }))
        setdata((old) => {
            return {
                ...old,
                ['orderStatus']: orderstatus,
                ['paymentStatus']: paymentstatus
            }
        })
    }
    function getData(e) {
        if (e.target.name === "orderstatus")
            setorderstatus(e.target.value)
        else
            setpaymentstatus(e.target.value)
    }
    useEffect(() => {
        getAPIData()
    }, [checkouts.length])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>Single Checkout </h5>
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
                                User
                            </div>
                            <div className="w-50 p-3 border">
                                <table cellPadding="10px">
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>{user.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{user.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{user.phone}</td>
                                        </tr>
                                        <tr>
                                            <th>Address</th>
                                            <td>
                                                <ul style={{ listStyleType: 'none' }}>
                                                    <li>{user.addressline1}</li>
                                                    <li>{user.addressline2}</li>
                                                    <li>{user.addressline3}</li>
                                                    <li>{user.pin}</li>
                                                    <li>{user.city}</li>
                                                    <li>{user.state}</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Payment Mode
                            </div>
                            <div className="w-50 p-3 border">
                                {data.paymentMode}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Payment Status
                            </div>
                            <div className="w-50 p-3 border">
                                {data.paymentStatus}
                                {
                                    data.paymentStatus !== "Done" ?
                                        <select name='paymentstatus' onChange={getData} className='form-control'>
                                            <option value="Pending">Pending</option>
                                            <option value="Done">Done</option>
                                        </select> : ""
                                }
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Order Status
                            </div>
                            <div className="w-50 p-3 border">
                                <p className='w-50'>{data.orderStatus}</p>
                                {
                                    data.orderstatus !== "Delivered" ?
                                        <select name='orderstatus' onChange={getData} className='form-control'>
                                            <option value="Order Placed">Order Placed</option>
                                            <option value="Packed">Packed</option>
                                            <option value="Ready To Ship">Ready To Ship</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Out for Delivery">Out for Delivery</option>
                                            <option value="Delivered">Delivered</option>

                                        </select> : ""
                                }
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Total Amount
                            </div>
                            <div className="w-50 p-3 border">
                                <p className='w-50'>&#8377;{data.totalAmount}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Shipping Amount
                            </div>
                            <div className="w-50 p-3 border">
                                <p className='w-50'>&#8377;{data.shippingAmount}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Final Amount
                            </div>
                            <div className="w-50 p-3 border">
                                <p className='w-50'>&#8377;{data.finalAmount}</p>
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
                            <div className="w-100 p-3 border">
                                {
                                    data.orderStatus !== "Delivered" || data.paymentStatus !== "Done" ?
                                        <button className='btn btn-secondary w-100' onClick={update}>Update</button> :
                                        ""
                                }
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="mytable">
                                <thead className="thead-primary">
                                    <tr className="text-center">
                                        <th>Product</th>
                                        <th>Color</th>
                                        <th>Size</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.products && data.products.map((item, index) => {
                                            return <tr key={index} className="text-center">
                                                <td className="image-prod"><img src={`/public/products/${item.pic}`} height="75px" width="75px" className='rounded float-left' alt="" />{item.name}</td>
                                                <td className="product-name">{item.color}</td>
                                                <td className="product-name">{item.size}</td>
                                                <td className="price">&#8377;{item.price}</td>
                                                <td className="price">{item.qty}</td>
                                                <td className="price">&#8377;{item.total}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
