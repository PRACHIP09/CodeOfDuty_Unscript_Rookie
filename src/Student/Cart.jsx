import React,{useState,useEffect} from 'react';
import { Grid ,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Drawer,
  Button, 
  Tooltip} from '@mui/material';
import doubts from '../Images/doubts.png';
import feedback from '../Images/feedback.png';
import PeopleIcon from '@mui/icons-material/People';
import blog from '../Images/blog.jpg';
import { motion } from "framer-motion";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import axios from 'axios';
import '../Teacher/teacher.css';
const Cart = () => {
    const [load,setLoad] = useState([]);
  // useEffect(() => {
  //   loadList();
  // }, []);
  const loadList = async () => {
    const result = await axios.get(
      ``,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMTE5NDExLCJpYXQiOjE2NDI4NjAyMTEsImp0aSI6ImRmMDY2NjJlY2M4MzRjODhiMDk4MmRmZWZiNTAzYjA0IiwidXNlcl9pZCI6MTZ9.uCSV0-x-swjH9E3GNMIRojBx9IQiqkww06tj0COxnLs`,
        },
      }
    );
  }
  return (
  <div>
    <Grid container spacing={3} style={{paddingLeft:"2vh" , paddingRight:"2vh" , paddingTop:"2vh"}}>
            <Grid item sm={9} xs={12} md={9}>
            <Card>
            
            <CardMedia
              component="img"
              alt="green iguana"
              height="220"
              src={blog}
              style={{marginBottom:"3vh"}}
            />
            <Typography gutterBottom variant="h5" component="div" style={{marginBottom:"2vh" , color:"blue" , fontWeight:"600"}}>AI-ML</Typography>
            <Typography gutterBottom  component="div" style={{padding:"2vh"}}>Lorem ipsum dolor </Typography>
            <hr/><br/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid items md={6} xs={6}>
                       <Button style={{fontSize:"1.1rem"}} ><FormatListNumberedIcon sx={{fontSize:35}}/> - 78</Button>
                    </Grid>
                    <Grid items md={3} xs={3}>
                    </Grid>
                    <Grid items md={3} xs={3}>
                    <img src={doubts} alt={doubts} style={{height:"6vh", width:"6vh" , cursor:"pointer"}} />
                    </Grid>
                </Grid>
            </CardContent>
            </Card>
            </Grid>
      </Grid>  
  </div>);
};

export default Cart;
