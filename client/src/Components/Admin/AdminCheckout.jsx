import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import LeftNav from './LeftNav'
import { getCheckout, deleteCheckout } from "../../Store/ActionCreaters/CheckoutActionCreators"
import { useNavigate } from 'react-router-dom';

export default function AdminCheckout() {
    var Checkout = useSelector((state) => state.CheckoutStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'userId', headerName: 'User Id', width: 250 },
        { field: 'paymentMode', headerName: 'Payment Mode', width: 130 },
        { field: 'paymentStatus', headerName: 'Payment Status', width: 130 },
        { field: 'totalAmount', headerName: 'Total Amount', width: 130 ,renderCell:({row})=><p>&#8377;{row.totalAmount}</p>},
        { field: 'shippingAmount', headerName: 'Shipping Amount', width: 130 ,renderCell:({row})=><p>&#8377;{row.shippingAmount}</p> },
        { field: 'finalAmount', headerName: 'Final Amount', width: 130 ,renderCell:({row})=><p>&#8377;{row.finalAmount}</p>},
        { field: 'date', headerName: 'Date', width: 220 },
        {
            field: "view",
            headerName: "View",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate("/admin-single-Checkout/"+row._id)
                }}>
                    <span className="material-symbols-outlined">
                        visibility
                    </span>
                </Button>,
        }
    ];

    var rows = []
    for (let item of Checkout) {
        rows.push(item)
    }
    function getAPIData(){
        dispatch(getCheckout())
    }
    useEffect(() => {
       getAPIData()
    }, [Checkout.length])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>Checkout </h5>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                            getRowId={(row)=>row._id}
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
