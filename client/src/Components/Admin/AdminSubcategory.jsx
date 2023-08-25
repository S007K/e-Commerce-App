import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import LeftNav from './LeftNav'
import { getSubcategory, deleteSubcategory } from "../../Store/ActionCreaters/SubcategoryActionCreators"

export default function AdminSubcategory() {
    var subcategory = useSelector((state) => state.SubcategoryStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Name', width: 130 },
        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate("/admin-update-subcategory/" + row._id)
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
                    dispatch(deleteSubcategory({ _id: row._id }))
                }}>
                    <span className="material-symbols-outlined">
                        delete_forever
                    </span>
                </Button>,
        }
    ];

    var rows = []
    for (let item of subcategory) {
        rows.push(item)
    }
    function getAPIData(){
        dispatch(getSubcategory())
    }
    useEffect(() => {
       getAPIData()
    }, [subcategory.length])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>Subcategory <Link to="/admin-add-Subcategory" className='float-right'><span className="material-symbols-outlined text-light">add</span></Link></h5>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                            getRowId = {(row)=>row._id}
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
