import {useState} from "react";
import Title from "../Title/Title";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import * as React from "react";
import Button from "@mui/material/Button";

let data = [
    {
        name: 'Hung',
        email: 'hung@gmail.com',
        phone: '09009090',
        address: 'Ha noi'
    },
    {
        name: 'Hung',
        email: 'hung@gmail.com',
        phone: '09009090',
        address: 'Ha noi'
    },
    {
        name: 'Hung',
        email: 'hung@gmail.com',
        phone: '09009090',
        address: 'Ha noi'
    },
    {
        name: 'Hung',
        email: 'hung@gmail.com',
        phone: '09009090',
        address: 'Ha noi'
    }
]
function CustomerList() {
    const [customers, setCustoms] = useState(data)

    return (
        <React.Fragment>
            <Title>
                <Button variant="outlined">Create</Button>
            </Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell align="right">Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { customers.map((row,index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.phone}</TableCell>
                            <TableCell align="right">{row.address}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </React.Fragment>
    )
 }

 export default CustomerList;
