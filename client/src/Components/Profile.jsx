import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { deleteWishlist, getWishlist } from "../Store/ActionCreaters/WishlistActionCreators"
import { getCheckoutUser } from "../Store/ActionCreaters/CheckoutActionCreators"
import BuyerProfile from './BuyerProfile'

export default function Profile() {
    var [user, setuser] = useState({})
    var wishlists = useSelector((state) => state.WishlistStateData)
    var [wishlist, setwishlist] = useState([])
    var navigate = useNavigate()

    var checkouts = useSelector((state) => state.CheckoutStateData)
    var [orders, setorders] = useState([])

    var dispatch = useDispatch()
    function deleteItem(_id) {
        dispatch(deleteWishlist({ _id: _id }))
        getAPIData()
    }
    async function getAPIData() {
        dispatch(getWishlist())
        dispatch(getCheckoutUser())

        var response = await fetch("/api/user/" + localStorage.getItem("userid"), {
            method: "get",
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.getItem("token")
            }
        })
        response = await response.json()
        if (response.result === "Done")
            setuser(response.data)  
        else
            navigate("/login")

        if (wishlists.length)
            setwishlist(wishlists)

        if (checkouts.length)
            setorders(checkouts)
    }
    useEffect(() => {
        getAPIData()
    }, [wishlists.length, checkouts.length])
    return (
        <div className='ftco-section ftco-cart container-fluid'>
            <div className="row">
                <div className="col-md-6">
                    {
                        user.pic ?
                            <img src={`/public/users/${user.pic}`} height="520px" width="100%" alt="" /> :
                            <img src={`/assets/images/noimage.png`} height="520px" width="100%" alt="" />
                    }
                </div>
                <div className="col-md-6">
                    <BuyerProfile user={user} />
                </div>
            </div>
            <h5 className='text-center mt-3'>Wishlist Section</h5>
            <div className="table-responsive">
                <table className="mytable">
                    <thead className="thead-primary">
                        <tr className="text-center">
                            <th>Product</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlist && wishlist.map((item, index) => {
                                return <tr key={index} className="text-center">
                                    <td className="image-prod"><img src={`/public/products/${item.pic}`} height="75px" width="75px" className='rounded float-left' alt="" />{item.name}</td>
                                    <td className="product-name">{item.color}</td>
                                    <td className="product-name">{item.size}</td>
                                    <td className="price">&#8377;{item.price}</td>
                                    <td><Link to={`/singleproductpage/${item.productId}`} onClick={() => deleteItem(item._id)} className='' style={{ background: "none", width: "30px" }}> <i className="icon ion-ios-cart"></i></Link></td>
                                    <td><button onClick={() => deleteItem(item._id)} className='' style={{ background: "none", width: "30px" }}> <i className="icon ion-ios-trash"></i></button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <h5 className='text-center mt-3'>Order History Section</h5>
            {
                orders.map((item, index) => {
                    return <div className="row" key={index}>
                        <div className="col-lg-3">
                            <div className="table-responsive">
                                <table className='mytable'>
                                    <tbody>
                                        <tr>
                                            <th>Order ID</th>
                                            <td>{item._id}</td>
                                        </tr>
                                        <tr>
                                            <th>Payment Mode</th>
                                            <td>{item.paymentMode}</td>
                                        </tr>
                                        <tr>
                                            <th>Order Status</th>
                                            <td>{item.orderStatus}</td>
                                        </tr>
                                        <tr>
                                            <th>Payment Status</th>
                                            <td>{item.paymentStatus}</td>
                                        </tr>
                                        <tr>
                                            <th>Total Amount</th>
                                            <td>&#8377;{item.totalAmount}</td>
                                        </tr>
                                        <tr>
                                            <th>Shipping Amount</th>
                                            <td>&#8377;{item.shippingAmount}</td>
                                        </tr>
                                        <tr>
                                            <th>Final Amount</th>
                                            <td>&#8377;{item.finalAmount}</td>
                                        </tr>
                                        <tr>
                                            <th>Date</th>
                                            <td>{item.date}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-9">
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
                                            item.products.map((item, index) => {
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
                })
            }
        </div>
    )
}
