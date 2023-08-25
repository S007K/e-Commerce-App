import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import LeftNav from './LeftNav'
import { getNewslatter, deleteNewslatter } from "../../Store/ActionCreaters/NewslatterActionCreators"

export default function AdminNewslatters() {
    var Newslatter = useSelector((state) => state.NewslatterStateData)
    var dispatch = useDispatch()
    var columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'email', headerName: 'Email', width: 300 },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    dispatch(deleteNewslatter({ _id: row._id }))
                }}>
                    <span className="material-symbols-outlined">
                        delete_forever
                    </span>
                </Button>,
        }
    ];

    var rows = []
    for (let item of Newslatter) {
        rows.push(item)
    }
    function getAPIData(){
        dispatch(getNewslatter())
    }
    useEffect(() => {
       getAPIData()
    }, [Newslatter.length])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>Newslatter </h5>
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
