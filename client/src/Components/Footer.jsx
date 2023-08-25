import React from 'react'

import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
      <footer className="ftco-footer ftco-section pb-1">
        <div className="container">
          <div className="row">
            <div className="mouse">
              <a href="#" className="mouse-icon">
                <div className="mouse-wheel"><span className="ion-ios-arrow-up"></span></div>
              </a>
            </div>
          </div>
          <div className="row mb-1">
            <div className="col-lg-2 col-md-6">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Minishop</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                {/* <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate"><Link to="#"><span className="icon-twitter"></span></Link></li>
                  <li className="ftco-animate"><Link to="#"><span className="icon-facebook"></span></Link></li>
                  <li className="ftco-animate"><Link to="#"><span className="icon-instagram"></span></Link></li>
                </ul> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Menu</h2>
                <ul className="list-unstyled">
                  <li><Link to="#" className="py-2 d-block">Shop</Link></li>
                  <li><Link to="#" className="py-2 d-block">About</Link></li>
                  <li><Link to="#" className="py-2 d-block">Journal</Link></li>
                  <li><Link to="#" className="py-2 d-block">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Help</h2>
                <div className="d-flex">
                  <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                    <li><Link to="#" className="py-2 d-block">Shipping Information</Link></li>
                    <li><Link to="#" className="py-2 d-block">Returns &amp; Exchange</Link></li>
                    <li><Link to="#" className="py-2 d-block">Terms &amp; Conditions</Link></li>
                    <li><Link to="#" className="py-2 d-block">Privacy Policy</Link></li>
                  </ul>
                  <ul className="list-unstyled">
                    <li><Link to="#" className="py-2 d-block">FAQs</Link></li>
                    <li><Link to="#" className="py-2 d-block">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker"></span><span className="text">A-43,Shahjahanpur, Sector 16 ,201345,UP, India</span></li>
                    <li><Link to="#"><span className="icon icon-phone"></span><span className="text">9873848046</span></Link></li>
                    <li><Link to="#"><span className="icon icon-envelope"></span><span className="text">sk15265123@gmail.com</span></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
