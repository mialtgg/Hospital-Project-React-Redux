import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";



const Hastalar = (props) => {
    const navigate=useNavigate()
    const [hastalar, setHastalar] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:3004/hastalar')
            .then(res => {
                setHastalar(res.data)
            })
            .catch(err => console.log('Hastalar page getHastalarerror', err))

    }, [])

    if (hastalar === null) {
        return (
            <h1>LOADİNG</h1>
        )

    }
    return (
        <div>
            <Header />
            <TableContainer style={{marginTop: "10px",}} component={Paper}>
                
           <div style={
            {
                marginBottom:'20px',
                display:"flex",
                justifyContent:"flex-end"
            }
           }><Button onClick={()=>navigate("/hasta-ekle")} variant="contained">Contained</Button></div>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "#aaa" }}>
                        <TableRow>
                            <TableCell align="right">Adı</TableCell>
                            <TableCell align="right">Soyadı</TableCell>
                            <TableCell align="right">Numara</TableCell>
                            <TableCell align="right">işlemler</TableCell>
                        </TableRow>


                    </TableHead>
                    <TableBody>
                        {
                            hastalar.map(hasta => (
                                <TableRow
                                    key={hasta.id}

                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">{hasta.name}</TableCell>
                                    <TableCell align="right">{hasta.surname}</TableCell>
                                    <TableCell align="right">{hasta.phone}</TableCell>
                                    <TableCell align="right">butonlar gelecek</TableCell>
                                </TableRow>

                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Hastalar;