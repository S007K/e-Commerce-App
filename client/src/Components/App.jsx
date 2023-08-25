import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import AdminAddBrand from './Admin/AdminAddBrand'
import AdminAddMaincategory from './Admin/AdminAddMaincategory'
import AdminAddProduct from './Admin/AdminAddProduct'
import AdminAddSubcategory from './Admin/AdminAddSubcategory'
import AdminBrand from './Admin/AdminBrand'
import AdminCheckout from './Admin/AdminCheckout'
import AdminContactUs from './Admin/AdminContactUs'
import AdminHome from './Admin/AdminHome'
import AdminMaincategory from './Admin/AdminMaincategory'
import AdminNewslatters from './Admin/AdminNewslatter'
import AdminProduct from './Admin/AdminProduct'
import AdminSingleCheckout from './Admin/AdminSingleCheckout'
import AdminSingleContact from './Admin/AdminSingleContact'
import AdminSubcategory from './Admin/AdminSubcategory'
import AdminUpdateBrand from './Admin/AdminUpdateBrand'
import AdminUpdateMaincategory from './Admin/AdminUpdateMaincategory'
import AdminUpdateProduct from './Admin/AdminUpdateProduct'
import AdminUpdateSubcategory from './Admin/AdminUpdateSubcategory'
import AdminUsers from './Admin/AdminUsers'
import Cart from './Cart'
import Checkout from './Checkout'
import Confirmation from './Confirmation'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Profile from './Profile'
import Shop from './Shop'
import Signup from './Signup'
import SingleProductPage from './SingleProductPage'
import Updateprofile from './UpdateProfile'
import ForgetPassword1 from './ForgetPassword1'
import ForgetPassword2 from './ForgetPassword2'
import ForgetPassword3 from './ForgetPassword3'
import Payment from './Payment'







export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop/:maincat/' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/singleproductpage/:_id' element={<SingleProductPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/updateprofile' element={<Updateprofile />} />
          <Route path='/confirmation' element={<Confirmation />} />
          <Route path='/forgetpassword-1' element={<ForgetPassword1 />} />
          <Route path='/forgetpassword-2' element={<ForgetPassword2 />} />
          <Route path='/forgetpassword-3' element={<ForgetPassword3 />} />
          <Route path='/payment/:_id' element={<Payment />} />










          <Route path='/admin-home' element={<AdminHome />} />
          <Route path='/admin-maincategory' element={<AdminMaincategory />} />
          <Route path='/admin-add-maincategory' element={<AdminAddMaincategory />} />
          <Route path='/admin-update-maincategory/:_id' element={<AdminUpdateMaincategory />} />
          <Route path='/admin-subcategory' element={<AdminSubcategory />} />
          <Route path='/admin-add-subcategory' element={<AdminAddSubcategory />} />
          <Route path='/admin-update-subcategory/:_id' element={<AdminUpdateSubcategory />} />
          <Route path='/admin-brand' element={<AdminBrand />} />
          <Route path='/admin-add-brand' element={<AdminAddBrand />} />
          <Route path='/admin-update-brand/:_id' element={<AdminUpdateBrand />} />
          <Route path='/admin-product' element={<AdminProduct />} />
          <Route path='/admin-add-product' element={<AdminAddProduct />} />
          <Route path='/admin-update-product/:_id' element={<AdminUpdateProduct />} />
          <Route path='/admin-user' element={<AdminUsers />} />
          <Route path='/admin-newslatter' element={<AdminNewslatters />} />
          <Route path='/admin-contact' element={<AdminContactUs />} />
          <Route path='/admin-single-contact/:_id' element={<AdminSingleContact />} />
          <Route path='/admin-checkout' element={<AdminCheckout />} />
          <Route path='/admin-single-checkout/:_id' element={<AdminSingleCheckout />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}
