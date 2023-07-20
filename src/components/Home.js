import React, { useEffect, useState } from "react";
import Header from "./Header";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";



const Home = (props) => {
  const [randevular, setRandevular] = useState(null)
  const [hastalar, setHastalar] = useState(null)

  useEffect(() => {
    axios
      .get("http://localhost:3004/randevular")
      .then(resRandevular => {
        setRandevular(resRandevular.data);
        axios
          .get("http://localhost:3004/hastalar")
          .then(resHastalar => {
            setHastalar(resHastalar.data)
          })
          .catch(errHastalar => console.log("hasta bulunamadı", errHastalar));
      })
      .catch(err => console.log(err));
  }, []);

  if (randevular === null || hastalar === null) {
    return (
      <h1>LOADİNG</h1>
    )


  }

  return (
    <div>
      <Header />
      <TableContainer style={{
        marginTop: "5px",
      }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#aaa" }}>
            <TableRow>
              <TableCell>Tarih</TableCell>
              <TableCell align="right">Adı</TableCell>
              <TableCell align="right">Soyadı</TableCell>
              <TableCell align="right">Numara</TableCell>
              <TableCell align="right">işlemler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {
              randevular.map(randevu=>{
const aradigimHastaId=hastalar.find(
  (hasta)=>hasta.id===randevu.hastaId);


                return(

                  <TableRow key={randevu.id}

                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" >
                  {randevu.date}
                  </TableCell>
                  <TableCell align="right">{aradigimHastaId.name}</TableCell>
                  <TableCell align="right">{aradigimHastaId.surname}</TableCell>
                  <TableCell align="right">{aradigimHastaId.phone}</TableCell>
                  <TableCell align="right">butonlar gelecek</TableCell>
                </TableRow>


                )
              })
            }


          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )


}
export default Home;