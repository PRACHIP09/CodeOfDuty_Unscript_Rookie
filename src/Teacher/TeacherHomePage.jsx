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
import CourseToUpload from './CourseToUpload';
import add from '../Images/add.png';
import close from '../Images/close.png'
import AlreadyUploaded from './AlreadyUploaded';
import Doubts from './Doubts';
import user from '../Images/user.png';
import Profile from './Profile';
import { motion } from "framer-motion";
import axios from 'axios';
import './teacher.css';
const TeacherHomePage = () => {
    const [open, setOpen] = React.useState(false);
    const [openqa, setOpenqa] = React.useState(false);
    const [openfdbck , setOpenfdbck] = React.useState(false);
    const [openprf , setOpenPrf] = React.useState(false);
    
    const [load,setLoad] = useState([]);
    // useEffect(() => {
    //   loadList();
    // }, []);
    const handleDrawerOpen = () => {
    setOpen(true);
    };
    const handleDrawerClose = () => {
    setOpen(false);
    };
    const handleDrawerOpenQa = () => {
    setOpenqa(true);
    };
    const handleDrawerCloseQa = () => {
    setOpenqa(false);
    };
    const handleDrawerOpenFdbck = () => {
    setOpenfdbck(true);
    };
    const handleDrawerCloseFdbck = () => {
    setOpenfdbck(false);
    };
    const handleDrawerOpenPrf = () => {
    setOpenPrf(true);
    };
    const handleDrawerClosePrf = () => {
    setOpenPrf(false);
    };
const loadList = async () => {
      const result = await axios.get(
        ``,
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMTE5NDExLCJpYXQiOjE2NDI4NjAyMTEsImp0aSI6ImRmMDY2NjJlY2M4MzRjODhiMDk4MmRmZWZiNTAzYjA0IiwidXNlcl9pZCI6MTZ9.uCSV0-x-swjH9E3GNMIRojBx9IQiqkww06tj0COxnLs`,
          },
        }
      );
      setLoad(result.data);
    };

  return (
  <div style={{padding:"6vh"}} >
        <Grid container spacing={3} >
        <Grid md={10} xs={10}></Grid>
        <Grid md={2} xs={2}
        component={motion.div}
        whileHover={{
        scale: 1.08,
        textShadow: "0 0 8px rgb(255,255,255)",
        transition: { duration: 0.3 },
        }}>
        <img src={add} alt="add" onClick={handleDrawerOpen} style={{height:"6vh", width:"6vh" , cursor:"pointer" }}/>
        </Grid>
        </Grid>
        <div className="heading" style={{padding:"3vh" , fontWeight:"700" , fontSize:"1.7rem" , color:"#00ACEA" , alignItems:"Left"}}>
        <u>Course Uploaded</u><br/><div style={{padding:"3vh" , fontWeight:"700" , fontSize:"1.5rem" , color:"#00ACEA" , alignItems:"Left"}}><i>"In learning you will teach and in teaching you will learn"</i></div>
        </div>
        <Grid container spacing={3} >
        <Grid item md={3} xs={12} sm={6}>
            <Card
            component={motion.div}
            whileHover={{
            scale: 1.08,
            textShadow: "0 0 8px rgb(255,255,255)",
            transition: { duration: 0.3 },
            }}>
            
            <CardMedia
              component="img"
              alt="green iguana"
              height="220"
              src={blog}
              style={{marginBottom:"3vh"}}
            />
            <Typography gutterBottom variant="h5" component="div" style={{marginBottom:"2vh" , color:"blue" , fontWeight:"600"}}>AI-ML</Typography>
            <Typography gutterBottom  component="div" style={{padding:"2vh"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            <hr/><br/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid items md={6} xs={6}>
                       <Button style={{fontSize:"1.1rem"}}><PeopleIcon sx={{fontSize:35}}/>78</Button>
                    </Grid>
                    <Grid items md={3} xs={3}>
                    <img src={feedback} alt={feedback} onClick={handleDrawerOpenFdbck} style={{height:"6vh", width:"6vh" , cursor:"pointer" }}/>   
                    </Grid>
                    <Grid items md={3} xs={3}>
                    <img src={doubts} alt={doubts} onClick={handleDrawerOpenQa} style={{height:"6vh", width:"6vh" , cursor:"pointer"}} />
                    </Grid>
                </Grid>
            </CardContent>
            </Card>
        </Grid>
        </Grid>
        <Drawer
        sx={{
          width: 500,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 500,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
       <img src={close} alt="close" onClick={handleDrawerClose} style={{height:"5vh", width:"5vh" , cursor:"pointer" , marginLeft:"80%" , marginTop:"2vh"}}/>
       <CourseToUpload id="8"/>
       {/* <CourseToUpload id={user.id}/>  */}
      </Drawer>
      <Drawer
        sx={{
          width: 500,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 500,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="right"
        open={openqa}
      >
       <img src={close} alt="close" onClick={handleDrawerCloseQa} style={{height:"5vh", width:"5vh" , cursor:"pointer" , marginLeft:"80%" , marginTop:"2vh"}}/>
       <Doubts/> 
      </Drawer>
      <Drawer
        sx={{
          width: 500,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 500,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="right"
        open={openfdbck}
      >
       <img src={close} alt="close" onClick={handleDrawerCloseFdbck} style={{height:"5vh", width:"5vh" , cursor:"pointer" , marginLeft:"80%" , marginTop:"2vh"}}/>
       <AlreadyUploaded/> 
      </Drawer>
  </div>
  )
};

export default TeacherHomePage;
