import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {
  Grid,Table,TableCell,TableRow,TableBody,TableContainer,TableHead,Box,
  CircularProgress,} from '@mui/material';
import Swal from "sweetalert2";
import loading from '../Images/loading.png'

const AlreadyUploaded = () => {
  const id = localStorage.getItem("id");
  const [load,setLoad] = useState([]);
  const [loading,setLoading] = useState(false);
   useEffect(() => {
     loadList();
   }, []);
  const loadList = async () => {
    const result = await axios.get(
      `http://b5da-1-22-101-132.ngrok.io/course/post-review/${id}/`,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMTMwOTU4LCJpYXQiOjE2NDI4NzE3NTgsImp0aSI6IjE3MmM2MTk0ODIzMDQxOGE4NTEzOTcyMWFiNmI5YTYzIiwidXNlcl9pZCI6M30.GjCpmxRhs7y1t_-mZEcy0CtuWHAQjt2ukkS47fO0Ors`,
        },
      }
    );
    console.log(result.data);
    setLoading(true);
    setLoad(result.data);
  };
  return (
  <div>
        {loading ? (
      <>
      <div style={{fontSize:"1.2rem" , fontWeight:"600",marginTop:"5vh"}}>
      <TableContainer>
      <Table sx={12} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><div className="heading" style={{padding:"3vh" , fontWeight:"700" , fontSize:"1.7rem" , color:"#00ACEA" , alignItems:"Left"}}>
            Review</div></TableCell>
            <TableCell align="center"><div className="heading" style={{padding:"3vh" , fontWeight:"700" , fontSize:"1.7rem" , color:"#00ACEA" , alignItems:"Left"}}>
            Rating</div></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {load.map((row) => (
            <TableRow>
              <TableCell align="center"><div className="heading" style={{padding:"3vh" , fontWeight:"700" , fontSize:"1.2rem" , color:"#00ACEA" , alignItems:"Left"}}>
              {row.comment==0?(row.comment):("Awesome")}</div></TableCell>
              <TableCell align="center"><div className="heading" style={{padding:"1vh" , fontWeight:"700" , fontSize:"1.6rem" , color:"#00ACEA" , alignItems:"Left"}}>
              {row.rating}</div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
      <Grid conatiner spacing={3} >
      
      </Grid>
      </>
      ):(
        <Box>
        <CircularProgress />
        <img src={loading} alt="load"  style={{height:"30vh", width:"30vh" , cursor:"pointer" , margin:"5vh"}}/>
           
      </Box>
        )}
  </div>
  );
};

export default AlreadyUploaded;

