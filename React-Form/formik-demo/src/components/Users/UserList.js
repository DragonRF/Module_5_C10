import './UserList.css'
import {useState} from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {
    Button,
} from "@mui/material";

import AddUser from "./AddUser/AddUser";

let users = [
    {
        id: 1,
        name: 'admin',
        email: 'admin@gmail.com',
        role: 1,
        phone: '0123456789'
    },
    {
        id: 2,
        name: 'admin2',
        email: 'admin2@gmail.com',
        role: 1,
        phone: '0987654321'
    },
    {
        id: 3,
        name: 'user1',
        email: 'user1@gmail.com',
        role: 2,
        phone: '0321456987'
    }
]



function UserList() {

    const [data, setData] = useState(users);
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'phone', headerName: 'Phone', width: 230 },
        {
            field: 'role',
            headerName: 'Role',
            width: 130,
            renderCell: (params) => {
                return params.row.role === 1 ? 'Admin' : 'User'
            }
        },
        {
            field: 'Action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking
                    let idUser = params.row.id;
                    deleteUser(idUser)
                }
                return <Button onClick={(e)  => onClick(e)} variant="outlined" color="error">Delete</Button>
            }},
    ];
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddUser = (dataForm) => {
        setData([...data, dataForm])
    }

    const deleteUser = (id) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure delete user?')) {
            // tim index theo id;
            let newData = data.filter(user => {
                return user.id !== id;
            })
            setData([...newData])
        }
    }

    return (
        <>
            <Button variant="contained" onClick={handleClickOpen}>Create</Button>
            <div style={{ height: 100 * data.length, width: '80%' }}>
            { data && (
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            )}
            </div>
            <AddUser open={open} handleClose={handleClose} addUser={handleAddUser}/>

        </>
    )
}

export default UserList
