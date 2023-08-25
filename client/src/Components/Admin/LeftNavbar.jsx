import React from 'react'
import {Link} from 'react-router-dom'

export default function LeftNavbar() {
    return (
        <>
            <div className="list-group">
                <Link to="/admin-home" className="list-group-item list-group-item-action border-bottom-primary">Home</Link>
                <Link to="/admin-user" className="list-group-item list-group-item-action border-bottom-primary">User</Link>
                <Link to="/admin-Maincategories" className="list-group-item list-group-item-action border-bottom-primary">Maincategories</Link>

                <Link to="/admin-Subcategories" className="list-group-item list-group-item-action border-bottom-primary">Subcategories</Link>
                <Link to="/admin-Brands" className="list-group-item list-group-item-action border-bottom-primary">Brands</Link>
                <Link to="/admin-Products" className="list-group-item list-group-item-action border-bottom-primary">Products</Link>

                <Link to="/admin-Contact Us" className="list-group-item list-group-item-action border-bottom-primary">Contact Us</Link>
                <Link to="/admin-Newslatters" className="list-group-item list-group-item-action border-bottom-primary">Newslatters</Link>
                <Link to="/admin-Checkouts" className="list-group-item list-group-item-action border-bottom-primary">Checkouts</Link>
                

            </div>
        </>
    )
}
