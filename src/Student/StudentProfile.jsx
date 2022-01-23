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
import link from '../Images/link.png';
import { motion } from "framer-motion";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import axios from 'axios';
import '../Teacher/teacher.css';
import Cart from './Cart';
var i=0;
const StudentProfile = () => {


  const [load,setLoad] = useState([]);
  const [temp,setTemp] = useState([]);
   useEffect(() => {
     loadList();
   }, []);
  const loadList = async () => {
    const result = await axios.get(
      `https://b5da-1-22-101-132.ngrok.io/course/student/9/`,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMTM3NTMyLCJpYXQiOjE2NDI4NzgzMzIsImp0aSI6IjM5ZDVjOTE2ZTVlNjRjN2E5Yzk3MmI5YjJlNTc4YWQ1IiwidXNlcl9pZCI6NX0.RGVcy20eyM267Q0rjXQeNZK0b2LbWU3cEpfh-az-QMI`,
        },
      }
    );
    console.log(result.data);
    setLoad(result.data);
    for(i=0;i<result.data.length;i++)
    {
      console.log(result.data[i].item)
      const res = await axios.get(
        `https://b5da-1-22-101-132.ngrok.io/course/one-course/${result.data[i].item}/`,{}
      );
      setTemp((prevBlogs) => {
        return [...prevBlogs, res.data];
      });
      console.log(temp);
    }

  };
  const uniques = [...new Set(temp.map(item => item.id))]
  console.log(uniques)
  return (
  <div>
    <div className="heading" style={{padding:"3vh" , fontWeight:"700" , fontSize:"1.7rem" , color:"#00ACEA" , alignItems:"Left"}}>
      <br/><div style={{padding:"3vh" , fontWeight:"700" , fontSize:"1.5rem" , color:"#00ACEA" , alignItems:"Left"}}><i>"Education Must Go on !!"</i></div>
      </div>
    <Grid container spacing={3} style={{paddingLeft:"2vh" , paddingRight:"2vh" , paddingTop:"2vh"}}>
    
    
      <Grid item xs={12} sm={8} >
      <div className="heading" style={{padding:"3vh" , fontWeight:"700" , fontSize:"1.7rem" , color:"#00ACEA" , alignItems:"Left"}}>
      <u>My Courses</u><br/>
      </div>
          <Grid container spacing={3} style={{paddingLeft:"2vh" , paddingRight:"2vh" , paddingTop:"2vh"}}>
          {temp.map((index)=>(
           <Grid item sm={6} md={4} xs={12}>
           <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="220"
              src={blog}
              style={{marginBottom:"3vh"}}
            />
            <Typography gutterBottom variant="h5" style={{ color:"blue" , fontWeight:"600"}}>{index.name} &ensp; - &ensp; {index.level}</Typography>
            <Typography gutterBottom  component="div" style={{padding:"2vh" , height:"2vh"}}>{index.category}</Typography>
            <br/>
            <Typography gutterBottom  component="div" style={{padding:"2vh", height:"2vh"}}>{index.description}</Typography>
            <br/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid items md={6} xs={6}>
                       <Button style={{fontSize:"1.1rem", color:"red" , fontWeight:"500"}} >{index.deadline}</Button>
                    </Grid>
                    <Grid items md={3} xs={3}>
                    <img src={link} alt={link} style={{height:"6vh", width:"6vh" , cursor:"pointer"}} />
                    </Grid>
                    <Grid items md={3} xs={3}>
                    <img src={doubts} alt={doubts} style={{height:"6vh", width:"6vh" , cursor:"pointer"}} />
                    </Grid>
                </Grid>
            </CardContent>
            </Card>
            </Grid>
          ))}
            </Grid>
      </Grid>
      
      <Grid item  xs={12} sm={4}>
      <div className="heading" style={{padding:"3vh" , fontWeight:"700" , fontSize:"1.7rem" , color:"#00ACEA" , alignItems:"Left"}}>
        <u>Payment Gateway</u>
        </div>
      <Cart/>
      </Grid>

      
    </Grid>
  </div>);
};

export default StudentProfile;
