import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getCart } from "../Store/ActionCreaters/CartActionCreators"
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    var [cart, setCart] = useState([])
    var navigate = useNavigate()
    var allCarts = useSelector(state => state.CartStateData)
    var dispatch = useDispatch()
    function logout() {
        localStorage.clear()
        navigate("/login")
    }
    useEffect(() => {
        (() => {
            if (localStorage.getItem("role") === "User") {
                dispatch(getCart())
                if (allCarts.length) {
                    setCart(allCarts.filter(x => x.userId === localStorage.getItem("userid")))
                }
            }
        })()
    }, [allCarts.length])
    return (
        <>
            <div className="py-1 bg-black sticky-top">
                <div className="container">
                    <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                        <div className="col-lg-12 d-block">
                            <div className="row d-flex">
                                <div className="col-md pr-4 d-flex topper align-items-center">
                                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
                                    <span className="text">+ 9044325799</span>
                                </div>
                                <div className="col-md pr-4 d-flex topper align-items-center">
                                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
                                    <span className="text">sk1532123@gmail.com</span>
                                </div>
                                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                                    <span className="text">3-5 Business days delivery &amp; Free Returns</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="index.html">EShopping</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><Link to="/" className="nav-link ">Home</Link></li>

                            <li className="nav-item"><Link to="/about" class="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="/Shop/All/" class="nav-link">Shop</Link></li>
                            <li className="nav-item"><Link to="/contact" class="nav-link">Contact</Link></li>
                          
                            <li className="nav-item cta cta-colored"><Link to="/cart" class="nav-link"><span class="icon-shopping_cart"></span>[{cart.length}]</Link></li>
                            {
                                localStorage.getItem("login") ?
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{localStorage.getItem("name")}</Link>
                                        <div className="dropdown-menu" aria-labelledby="dropdown04">
                                            {
                                                 localStorage.getItem("role")==="Admin"?
                                                 <Link className="dropdown-item" to="/admin-home">Profile</Link>:
                                                 <Link className="dropdown-item" to="/profile">Profile</Link>
                                            }
                                            
                                            <Link className="dropdown-item" to="cart">Cart</Link>
                                            <Link className="dropdown-item" onClick={logout}>Logout</Link>

                                        </div>
                                    </li>:
                                    <li className="nav-item"><Link to="/login" class="nav-link">Login</Link></li>
                                    
                            
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
