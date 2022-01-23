import React,{useState,useEffect} from 'react';
import { Grid ,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Drawer,
  Button, 
  TextField,
  InputAdornment,
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
        
            <Grid item sm={12} xs={12} md={12} style={{paddingBottom:"3vh"}}>
                  <TextField
                    id="filled-read-only-input"
                    color="primary"
                    type="text"
                    name="price"
                    variant="filled"
                    value="price"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                  <Grid item sm={12} xs={12} md={12} style={{paddingBottom:"3vh"}}>
                  <TextField
                    id="filled-read-only-input"
                    color="primary"
                    type="text"
                    name="price"
                    variant="filled"
                    value="price"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          
                        </InputAdornment>
                      ),
                    }}
                  />
                  </Grid>
                  <Grid item sm={12} xs={12} md={12} style={{paddingBottom:"3vh"}}>
                  <TextField
                    id="filled-read-only-input"
                    color="primary"
                    type="text"
                    name="price"
                    variant="filled"
                    value="price"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          
                        </InputAdornment>
                      ),
                    }}
                  />
                  
            
            </Grid>
      </Grid>  
  </div>);
};

export default Cart;
