import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

import LeftNav from './LeftNav'

import { useSelector, useDispatch } from 'react-redux';
import { getProduct, deleteProduct } from "../../Store/ActionCreaters/ProductActionCreators"

export default function AdminProduct() {
    var product = useSelector((state) => state.ProductStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'maincategory', headerName: 'Maincategory', width: 100 },
        { field: 'subcategory', headerName: 'Subcategory', width: 100 },
        { field: 'brand', headerName: 'Brand', width: 100 },
        { field: 'color', headerName: 'Color', width: 100 },
        { field: 'size', headerName: 'Size', width: 50 },
        { field: 'baseprice', headerName: 'Base Price', width: 100, renderCell: ({ row }) => <p>&#8377;{row.baseprice}</p> },
        { field: 'discount', headerName: 'Discount', width: 100, renderCell: ({ row }) => <p>{row.discount}%</p> },
        { field: 'finalprice', headerName: 'Final Price', width: 100, renderCell: ({ row }) => <p>&#8377;{row.finalprice}</p> },
        { field: 'stock', headerName: 'Stock', width: 100 },
        { field: 'pic1', headerName: 'Pic1', width: 70, renderCell: ({ row }) => <img src={`/public/products/${row.pic1}`} height="50px" width="100%" className='rounded' alt='' /> },
        { field: 'pic2', headerName: 'Pic2', width: 70, renderCell: ({ row }) => <img src={`/public/products/${row.pic2}`} height="50px" width="100%" className='rounded' alt='' /> },
        { field: 'pic3', headerName: 'Pic3', width: 70, renderCell: ({ row }) => <img src={`/public/products/${row.pic3}`} height="50px" width="100%" className='rounded' alt='' /> },
        { field: 'pic4', headerName: 'Pic4', width: 70, renderCell: ({ row }) => <img src={`/public/products/${row.pic4}`} height="50px" width="100%" className='rounded' alt='' /> },
        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate("/admin-update-product/" + row._id)
                }}>
                    <span className="material-symbols-outlined">
                        edit
                    </span>
                </Button>,
        },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    dispatch(deleteProduct({ _id: row._id }))
                }}>
                    <span className="material-symbols-outlined">
                        delete_forever
                    </span>
                </Button>,
        }
    ];

    var rows = []
    for (let item of product) {
        rows.push(item)
    }
    function getAPIData() {
        dispatch(getProduct())
    }
    useEffect(() => {
        getAPIData()
    }, [product.length])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>Product <Link to="/admin-add-product" className='float-right'><span className="material-symbols-outlined text-light">add</span></Link></h5>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                getRowId={(row) => row._id}
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                            // checkboxSelection
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
