import React from 'react'
import { Link } from 'react-router-dom'
export default function BuyerProfile({user}) {
    return (
        <>
            <h5 className='text-center bg-secondary text-light'>Buyer Profile</h5>
            <div className='d-flex'>
                <div className="first p-2 border w-50">Name</div>
                <div className="second p-2 border w-50">{user.name}</div>
            </div>
            <div className='d-flex'>
                <div className="first p-2 border w-50">User Name</div>
                <div className="second p-2 border w-50">{user.username}</div>
            </div>
            <div className='d-flex'>
                <div className="first p-2 border w-50">Email</div>
                <div className="second p-2 border w-50">{user.email}</div>
            </div>
            <div className='d-flex'>
                <div className="first p-2 border w-50">Phone Number</div>
                <div className="second p-2 border w-50">{user.phone}</div>
            </div>
            <div className='d-flex'>
                <div className="first p-2 border w-50">Address Line1</div>
                <div className="second p-2 border w-50">{user.addressline1}</div>
            </div>
            <div className='d-flex'>
                <div className="first p-2 border w-50">Address Line1</div>
                <div className="second p-2 border w-50">{user.addressline2}</div>
            </div>
            <div className='d-flex'>
                <div className="first p-2 border w-50">Address Line1</div>
                <div className="second p-2 border w-50">{user.addressline3}</div>
            </div>
            <div className='d-flex'>
                <div className="first p-2 border w-50">Pin</div>
                <div className="second p-2 border w-50">{user.pin}</div>
            </div>
            <div className='d-flex'>
                <div className="first p-2 border w-50">City</div>
                <div className="second p-2 border w-50">{user.city}</div>
            </div>
            <div className='d-flex'>
                <div className="first p-2 border w-50">State</div>
                <div className="second p-2 border w-50">{user.state}</div>
            </div>
            <div>
                <Link to="/updateprofile" className='btn btn-secondary w-100'>Update Profile</Link>
            </div>
        </>
    )
}
