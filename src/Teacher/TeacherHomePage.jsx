import React from 'react';
import { Grid ,
    Card,
    Typography,
    CardMedia,
    CardContent,
    useTheme,
    Drawer,
    Button } from '@mui/material';
import doubts from '../Images/doubts.png';
import feedback from '../Images/feedback.png';
import PeopleIcon from '@mui/icons-material/People';
import blog from '../Images/blog.jpg';
import CourseToUpload from './CourseToUpload';
import add from '../Images/add.png';
import close from '../Images/close.png'
import AlreadyUploaded from './AlreadyUploaded';
import Doubts from './Doubts';

const TeacherHomePage = () => {
    const [open, setOpen] = React.useState(false);
    const [openqa, setOpenqa] = React.useState(false);
    const [openfdbck , setOpenfdbck] = React.useState(false);
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
  return (
  <div style={{padding:"6vh"}} >
        <div style={{alignItems:"left" , marginLeft:"90%"}} >
        <img src={add} alt="add" onClick={handleDrawerOpen} style={{height:"6vh", width:"6vh" , cursor:"pointer"}}/>
        </div>
        <div style={{padding:"3vh" , fontWeight:"700" , fontSize:"1.7rem" , color:"#00ACEA" , alignItems:"Left"}}>
        Course Uploaded
        </div>
        <Grid container spacing={3} >
        <Grid item md={3} xs={12} sm={6}>
            <Card >
            <Typography gutterBottom variant="h5" component="div" style={{marginLeft:"20px"}}>AI-ML</Typography>
            <CardMedia
              component="img"
              alt="green iguana"
              height="220"
              src={blog}
              style={{marginBottom:"3vh"}}
            />
            <CardContent>
                <Grid container spacing={3}>
                    <Grid items md={6} xs={6}>
                       <Button style={{fontSize:"1.1rem"}} ><PeopleIcon sx={{fontSize:35}}/>78</Button>
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
       <CourseToUpload/> 
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
