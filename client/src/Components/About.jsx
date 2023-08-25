import React from 'react'
import {Link} from "react-router-dom"

export default function About() {
    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">
                            <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span>About</span></p>
                            <h1 className="mb-0 bread">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container">
                    <div className="row no-gutters ftco-services">
                        <div className="col-lg-4 text-center d-flex align-self-stretch ">
                            <div className="media block-6 services p-4 py-md-5">
                                <div className="icon d-flex justify-content-center align-items-center mb-4">
                                    <span className="flaticon-bag"></span>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Free Shipping</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center d-flex align-self-stretch ">
                            <div className="media block-6 services p-4 py-md-5">
                                <div className="icon d-flex justify-content-center align-items-center mb-4">
                                    <span className="flaticon-customer-service"></span>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Support Customer</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center d-flex align-self-stretch ">
                            <div className="media block-6 services p-4 py-md-5">
                                <div className="icon d-flex justify-content-center align-items-center mb-4">
                                    <span className="flaticon-payment-security"></span>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Secure Payments</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url('assets/images/about.jpg')" }}>
                            <Link to="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center">
                                <span className="icon-play"></span>
                            </Link>
                        </div>
                        <div className="col-md-7 py-md-5 wrap-about pb-md-5 ">
                            <div className="heading-section-bold mb-4 mt-md-5">
                                <div className="ml-md-0">
                                    <h2 className="mb-4">Stablished Sinced 1975</h2>
                                </div>
                            </div>
                            <div className="pb-md-5 pb-4">
                                <p>But nothing the copy said could convince her and so it didn’t take long until Link few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                                <p>But nothing the copy said could convince her and so it didn’t take long until Link few insidious Copy Writers ambushed her.</p>
                                <p><Link to="#" className="btn btn-primary">Shop now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section testimony-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="services-flow">
                                <div className="services-2 p-4 d-flex ">
                                    <div className="icon">
                                        <span className="flaticon-bag"></span>
                                    </div>
                                    <div className="text">
                                        <h3>Free Shipping</h3>
                                        <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                                    </div>
                                </div>
                                <div className="services-2 p-4 d-flex ">
                                    <div className="icon">
                                        <span className="flaticon-heart-box"></span>
                                    </div>
                                    <div className="text">
                                        <h3>Valuable Gifts</h3>
                                        <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                                    </div>
                                </div>
                                <div className="services-2 p-4 d-flex ">
                                    <div className="icon">
                                        <span className="flaticon-payment-security"></span>
                                    </div>
                                    <div className="text">
                                        <h3>All Day Support</h3>
                                        <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                                    </div>
                                </div>
                                <div className="services-2 p-4 d-flex ">
                                    <div className="icon">
                                        <span className="flaticon-customer-service"></span>
                                    </div>
                                    <div className="text">
                                        <h3>All Day Support</h3>
                                        <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="heading-section  mb-5">
                                <h2 className="mb-4">Our satisfied customer says</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                            </div>
                            <div className="carousel-testimony owl-carousel ">
                                <div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: "url('assets/images/person_1.jpg')" }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Marketing Manager</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: "url('assets/images/person_2.jpg')" }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Interface Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: "url('assets/images/person_3.jpg')" }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">UI Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: "url('assets/images/person_1.jpg')" }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: "url('assets/images/person_1.jpg')" }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">System Analyst</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-gallery">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 heading-section text-center mb-4 ">
                            <h2 className="mb-4">Follow Us On Instagram</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0">
                    <div className="row no-gutters">
                        <div className="col-md-4 col-lg-2 ">
                            <Link to="assets/images/gallery-1.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-1.jpg')" }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-lg-2 ">
                            <Link to="assets/images/gallery-2.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-2.jpg')" }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-lg-2 ">
                            <Link to="assets/images/gallery-3.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-3.jpg')" }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-lg-2 ">
                            <Link to="assets/images/gallery-4.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-4.jpg')" }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-lg-2 ">
                            <Link to="assets/images/gallery-5.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-5.jpg')" }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-lg-2 ">
                            <Link to="assets/images/gallery-6.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-6.jpg')" }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
