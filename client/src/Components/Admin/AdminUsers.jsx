import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import LeftNav from './LeftNav'
import { getUser, deleteUser } from "../../Store/ActionCreaters/UserActionCreators"

export default function AdminUsers() {
    var User = useSelector((state) => state.UserStateData)
    var dispatch = useDispatch()
    var columns = [
        { field: '_id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'username', headerName: 'User Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'role', headerName: 'Role', width: 130 },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    dispatch(deleteUser({ _id: row._id }))
                }}>
                    <span className="material-symbols-outlined">
                        delete_forever
                    </span>
                </Button>,
        }
    ];

    var rows = []
    for (let item of User) {
        rows.push(item)
    }
    function getAPIData(){
        dispatch(getUser())
    }
    useEffect(() => {
       getAPIData()
    }, [User])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>User </h5>
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
