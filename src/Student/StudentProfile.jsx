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

const StudentProfile = () => {
  return (
  <div>
    <Grid container spacing={3} style={{paddingLeft:"2vh" , paddingRight:"2vh" , paddingTop:"2vh"}}>
      <Grid item xs={12} sm={8} >
          <Grid container spacing={3} style={{paddingLeft:"2vh" , paddingRight:"2vh" , paddingTop:"2vh"}}>
           <Grid item sm={6} md={4} xs={12}>
           <Card>
            
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
            <Grid item sm={6} md={4} xs={12}>
           <Card>
            
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
            <Grid item sm={6} md={4} xs={12}>
           <Card>
            
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
            

      </Grid>
      
      <Grid item  xs={12} sm={4}>
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
      </Grid>

      
    </Grid>
  </div>);
};

export default StudentProfile;
