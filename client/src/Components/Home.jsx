import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProduct } from "../Store/ActionCreaters/ProductActionCreators"
import Newslatter from './Newslatter';

export default function Home() {
  var [product,setProduct] = useState([])
  var allProduct = useSelector((state) => state.ProductStateData)
  var dispatch = useDispatch()
  function getAPIData() {
    dispatch(getProduct())
    if(allProduct.length){
      setProduct(allProduct.sort().slice(0,8))
    }
  }
  useEffect(() => {
    getAPIData()
  }, [allProduct.length])
  return (
    <>
      <section id="home-section" className="hero ">
        {/*<div className="home-slider owl-carousel">
          <div className="slider-item js-fullheight">
            <div className="overlay"></div>
            <div className="container-fluid p-0">
              <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
                <img className="one-third order-md-last img-fluid" src="assets/images/bg_1.png" alt=""/>
                  <div className="one-forth d-flex align-items-center" data-scrollax=" properties: { translateY: '70%' }">
                    <div className="text">
                      <span className="subheading">#New Arrival</span>
                      <div className="horizontal">
                        <h1 className="mb-4 mt-3">Shoes Collection 2019</h1>
                        <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>

                        <p><a href="#" className="btn-custom">Discover Now</a></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
  </div> 

          <div className="slider-item js-fullheight">
            <div className="overlay"></div>
            <div className="container-fluid p-0">
              <div className="row d-flex no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
                <img className="one-third order-md-last img-fluid" src="assets/images/bg_2.png" alt=""/>
                  <div className="one-forth d-flex align-items-center" data-scrollax=" properties: { translateY: '70%' }">
                    <div className="text">
                      <span className="subheading">#New Arrival</span>
                      <div className="horizontal">
                        <h1 className="mb-4 mt-3">New Shoes Winter Collection</h1>
                        <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>

                        <p><a href="#" className="btn-custom">Discover Now</a></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
  </div>*/}

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="assets/images/c1.jpg" height="600px" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="assets/images/g6.jpg" height="600px" class="d-block w-100" alt="..." />
            </div>


          </div>
          <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters ftco-services">
            <div className="col-lg-4 text-center d-flex align-self-stretch">
              <div className="media block-6 services p-2 py-md-2">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-bag"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Free Shipping</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch">
              <div className="media block-6 services p-2 py-md-2">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-customer-service"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Support Customer</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch">
              <div className="media block-6 services p-2 py-md-2">
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

      <section className="ftco-section bg-light p-1">
        <div className="container">
          <div className="row justify-content-center mb-1 pb-1">
            <div className="col-md-12 heading-section text-center">
              <h2 className="mb-4">Latest Product</h2>

            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {
              product.map((item, index) => {
                return <div key={index} className="col-sm-12 col-md-6 col-lg-3 d-flex">
                  <div className="product d-flex flex-column">
                    <a arget="_blank" href={`/public/products/${item.pic1}`} className="img-prod"><img className="img-fluid" src={`public/products/${item.pic1}`} style={{ height: "300px", width: "100%" }} alt="" />
                      <span className="status">{item.discount}% Off</span>
                      <div className="overlay"></div>
                    </a>
                    <div className="text py-3 pb-4 px-3">
                      <h3><Link to={`/singleproductpage/${item.id}`} >{item.name}</Link></h3>
                      <div className="pricing">
                        <p className="price"><span className="mr-2 price-dc">&#8377;{item.baseprice}</span><span className="price-sale">&#8377;{item.finalprice}</span></p>
                      </div>
                      <p className="bottom-area d-flex px-3">
                        <Link to={`/singleproductpage/${item._id}`} className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></Link>
                        {/*<a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1"></i></span></a>*/}
                      </p>
                    </div>
                  </div>
                </div>



              })
            }



          </div>
        </div>
      </section>



      <section className="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4">
              <div className="choose-wrap divider-one img p-5 d-flex align-items-end" style={{ backgroundImage: "url('assets/images/m1.jpg')" }}>

                <div className="text text-center text-white px-2">

                  <h2>Men's Collection</h2>
                  <p><Link to="/shop/Male" className="btn btn-black px-3 py-2">Shop now</Link></p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row no-gutters choose-wrap divider-two align-items-stretch">
                <div className="col-md-12">
                  <div className="choose-wrap full-wrap img align-self-stretch d-flex align-item-center justify-content-end" style={{ backgroundImage: "url('assets/images/w1.jpg')" }}>
                    <div className="col-md-7 d-flex align-items-center">
                      <div className="text text-white px-5">
                        <span className="subheading">Women's Cloths</span>
                        <h2>Women's Collection</h2>
                        <p><Link to="/shop/Female" className="btn btn-black px-3 py-2">Shop now</Link></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row no-gutters">
                    <div className="col-md-6">
                      <div className="choose-wrap wrap img align-self-stretch bg-light d-flex align-items-center">
                        <div className="text text-center px-5">
                          <span className="subheading">Summer Sale</span>
                          <h2>More then 90%  Off</h2>
                          <p><Link to="/shop/All" className="btn btn-black px-3 py-2">Shop now</Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="choose-wrap wrap img align-self-stretch d-flex align-items-center" style={{ backgroundImage: "url('assets/images/kd1.jpg')" }}>
                        <div className="text text-center text-white mt-5 px-5">

                          <h2>Kids Collection</h2>
                          <p><Link to="/shop/Kids" className="btn btn-black px-3 py-2">Shop now</Link></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<section className="ftco-section ftco-deal bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="assets/images/prod-1.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="heading-section heading-section-white">
                <span className="subheading">Deal of the month</span>
                <h2 className="mb-3">Deal of the month</h2>
              </div>
              <div id="timer" className="d-flex mb-4">
                <div className="time" id="days"></div>
                <div className="time pl-4" id="hours"></div>
                <div className="time pl-4" id="minutes"></div>
                <div className="time pl-4" id="seconds"></div>
              </div>
              <div className="text-deal">
                <h2><a href="#">Nike Free RN 2019 iD</a></h2>
                <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                <ul className="thumb-deal d-flex mt-4">
                  <li className="img" style={{ backgroundImage: "url('assets/images/product-6.png')" }}></li>
                  <li className="img" style={{ backgroundImage: "url('assets/images/product-2.png')" }}></li>
                  <li className="img" style={{ backgroundImage: "url('assets/images/product-4.png')" }}></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          </section>*/}

      <section className="ftco-section testimony-section p-2">
        <div className="container">
          <div className="services-flow row">
            <div className="services-2 p-4 d-flex col-lg-3 col-md-6 col-12">
              <div className="icon">
                <span className="flaticon-bag"></span>
              </div>
              <div className="text">
                <h3>Free Shipping</h3>
                <p className="mb-0">Separated they live in. A small river named Duden flows</p>
              </div>
            </div>
            <div className="services-2 p-4 d-flex  col-lg-3 col-md-6 col-12">
              <div className="icon">
                <span className="flaticon-heart-box"></span>
              </div>
              <div className="text">
                <h3>Valuable Gifts</h3>
                <p className="mb-0">Separated they live in. A small river named Duden flows</p>
              </div>
            </div>
            <div className="services-2 p-4 d-flex  col-lg-3 col-md-6 col-12">
              <div className="icon">
                <span className="flaticon-payment-security"></span>
              </div>
              <div className="text">
                <h3>All Day Support</h3>
                <p className="mb-0">Separated they live in. A small river named Duden flows</p>
              </div>
            </div>
            <div className="services-2 p-4 d-flex col-lg-3 col-md-6 col-12">
              <div className="icon">
                <span className="flaticon-customer-service"></span>
              </div>
              <div className="text">
                <h3>All Day Support</h3>
                <p className="mb-0">Separated they live in. A small river named Duden flows</p>
              </div>
            </div>

            {/*<div className="col-lg-7">
              <div className="heading-section mb-5">
                <h2 className="mb-4">Our satisfied customer says</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
              </div>
              <div className="carousel-testimony owl-carousel">
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
            </div>*/}
          </div>
        </div>
      </section>

      {/*<section className="ftco-gallery">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 heading-section text-center mb-4">
              <h2 className="mb-4">Follow Us On Instagram</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0">
          <div className="row no-gutters">
            <div className="col-md-4 col-lg-2">
              <a href="assets/images/gallery-1.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/person_1.jpg')" }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2">
              <a href="assets/images/gallery-2.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/person_2.jpg')" }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2">
              <a href="assets/images/gallery-3.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/person_3.jpg')" }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2">
              <a href="assets/images/gallery-4.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/person_4.jpg')" }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2">
              <a href="assets/images/gallery-5.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-5.jpg')" }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2">
              <a href="assets/images/gallery-6.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-6.jpg')" }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
          </section>*/}
          <Newslatter/>

    </>
  )
}
