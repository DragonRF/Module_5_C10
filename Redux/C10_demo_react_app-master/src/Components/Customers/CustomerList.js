import {useEffect, useState} from "react";
import Title from "../Title/Title";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import * as React from "react";
import Button from "@mui/material/Button";
import axios from "axios";

function CustomerList() {
    const [customers, setCustoms] = useState()
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8081/api/users', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(respon => {
            setCustoms(respon.data)
        }).catch(err => {
            console.log(err)
        })
    }, [flag])

    const deleteUser = (id) => {
        if (window.confirm('Are you sure you want to delete')) {
            axios.delete('http://localhost:8081/api/users/' + id, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(res => {
                setFlag(!flag)
            })
        }

    }

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
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { customers && customers.map((row,index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{row.username}</TableCell>
                            <TableCell>
                                <Button onClick={() => deleteUser(row._id)} variant="contained" color="error">
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </React.Fragment>
    )
 }

 export default CustomerList;
