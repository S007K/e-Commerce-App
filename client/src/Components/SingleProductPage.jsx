 import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from "../Store/ActionCreaters/ProductActionCreators"
import { getCart, addCart } from "../Store/ActionCreaters/CartActionCreators"
import { getWishlist, addWishlist } from "../Store/ActionCreaters/WishlistActionCreators"

export default function SingleProductPage() {
	var [p, setp] = useState({
		pic1:"",
        pic2:"",
        pic3:"",
        pic4:"",
	})
	var [qty, setqty] = useState(1)
	var product = useSelector((state) => state.ProductStateData)
	var cart = useSelector((state) => state.CartStateData)
	var wishlist = useSelector((state) => state.WishlistStateData)
	var navigate = useNavigate()

	var { _id } = useParams()
	var dispatch = useDispatch()
	function getAPIData() {
		dispatch(getProduct())
		dispatch(getCart())
		dispatch(getWishlist())
		var data = product.find((item) => item._id === (_id))
		if (data)
			setp(data)
	}
	function addToCart() {
		var d = cart.find((item) => item.productId === (_id) && item.userId === (localStorage.getItem("userid")))
		if (d)
			navigate("/cart")
		else {
			var item = {
				productId: p._id,
				userId: localStorage.getItem("userid"),
				name: p.name,
				color: p.color,
				size: p.size,
				price: p.finalprice,
				qty: qty,
				total: p.finalprice * qty,
				pic: p.pic1,
			}
			dispatch(addCart(item))
			navigate("/cart")
		}

	}
	function addToWishlist() {
		var d = wishlist.find((item) => item.productId === _id && item.userId === (localStorage.getItem("userid")))
		if (d)
			navigate("/profile")
		else {
			var item = {
				productId: p._id,
				userId: localStorage.getItem("userid"),
				name: p.name,
				color: p.color,
				size: p.size,
				price: p.finalprice,
				pic: p.pic1,
			}
			dispatch(addWishlist(item))
			navigate("/profile")
		}

	}
	useEffect(() => {
		getAPIData()
	}, [product.length])
	return (
		<>
			<div className="hero-wrap hero-bread" style={{ backgroundImage: "url('/assets/images/ca4.jpg')" }}>
				<div className="container">
					<div className="row no-gutters slider-text align-items-center justify-content-center">
						<div className="col-md-9  text-center">
							<p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span>Shop</span></p>
							<h1 className="mb-0 bread">Shop</h1>
						</div>
					</div>
				</div>
			</div>

			<section className="ftco-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 mb-5 ">
						<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={`/public/products/${p.pic1}`} style={{height:"500px"}} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={`/public/products/${p.pic2}`} style={{height:"500px"}} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={`/public/products/${p.pic3}`} style={{height:"500px"}} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={`/public/products/${p.pic4}`} style={{height:"500px"}} className="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>	

						</div>
						<div className="col-lg-6  ">
							<h3>{p.name}</h3>
							<div className='d-flex'>
								<div className='border  p-3 w-50'>Category</div>
								<div className='border  p-3 w-50'>{p.maincategory}/{p.subcategory}</div>
							</div>
							<div className='d-flex'>
								<div className='border  p-3 w-50'>Brand</div>
								<div className='border  p-3 w-50'>{p.brand}</div>
							</div>
							<div className='d-flex'>
								<div className='border  p-3 w-50'>Price</div>
								<div className='border  p-3 w-50'><del>&#8377;{p.baseprice}</del><sup>&#8377;{p.finalprice}</sup> &nbsp;&nbsp;&nbsp;{p.discount}% Off</div>
							</div>
							<div className='d-flex'>
								<div className='border  p-3 w-50'>Color</div>
								<div className='border  p-3 w-50'>{p.color}</div>
							</div>
							<div className='d-flex'>
								<div className='border  p-3 w-50'>Size</div>
								<div className='border  p-3 w-50'>{p.size}</div>
							</div>
							<div className='d-flex'>
								<div className='border  p-3 w-50'>Stock</div>
								<div className='border  p-3 w-50'>{p.stock}</div>
							</div>
							<div className='d-flex'>
								<div className='border  p-3 w-50'>Description</div>
								<div className='border  p-3 w-50'>{p.description}</div>
							</div>


							<div className='mt-3 w-100'>
								<div className="m-auto" >
									<div className="input-group col-md-6 d-flex mb-3">
										<span className="input-group-btn mr-2">
											<button type="button" className="quantity-left-minus btn" data-type="minus" data-field="" onClick={() => {
												if (qty > 1)
													setqty(qty - 1)
											}}>
												<i className="ion-ios-remove"></i>
											</button>
										</span>
										<p className='m-auto w-50 text-center'>{qty}</p>
                                        <span className="input-group-btn ml-2">
                                            <button type="button" className="quantity-right-plus btn" data-type="plus" data-field="" onClick={() => setqty(qty + 1)}>
                                                <i className="ion-ios-add"></i>
                                            </button>
                                        </span>
									</div>
								</div>
							</div>
							<div className='d-flex'>
								<button onClick={addToCart} className="btn bg-success w-50 w-50 mr-2">Add to Cart</button>
								<button onClick={addToWishlist} className="btn btn-secondary  w-50">Add to Wishlist</button>
							</div>





						</div>

					</div>

				</div>
			</section>


		</>
	)
}
