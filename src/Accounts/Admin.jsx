import React from 'react';
import { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button
} from '@mui/material';
import teacher from '../Images/teacher.png';
import student from '../Images/student.png';
import del from '../Images/delete.png';
import check from '../Images/check.png';
import view from '../Images/view.png';
import profile from '../Images/profile.png';
import Swal from 'sweetalert2';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import '../Teacher/teacher.css';
const useStyles = makeStyles({
  root: {
    "& .MuiCard-root ": {
      "&:nth-child(n)": {
        "backgroundColor": "#DFECEC",
        "boxShadow": "none",
      }

    }
  }
});
const Admin = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const details = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const verify = () => {
    
    Swal.fire({
      icon: 'success',
      title: 'Successfully Verified',
      showConfirmButton: false,
      timer: 1500
    })
  }
  const notverify = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://b5da-1-22-101-132.ngrok.io/account/aadharverilist/',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMTQxMTc1LCJpYXQiOjE2NDI4ODE5NzUsImp0aSI6Ijk0NGFjMjEyZmUyYTRmNDFhZDgwYTQ4YWQ4YmMyN2M4IiwidXNlcl9pZCI6Mn0.84FKwS8zCZ6aEO1WA6JiB-EUxZt36b5gl89CKdSckmU'
      }
    };



    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  

  return (
    <div style={{ paddingBottom:"20rem", backgroundColor: "#ebbe9b", backgroundImage: "linear-gradient(315deg, #5de6de 0%, #b58ecc 74%)", backgroundSize: "cover", height: "100%" }}>
      <div style={{ padding: "3vh", fontWeight: "700", fontSize: "2rem", color: "#002652" }} className='admin'>
        A d m i n
      </div>
      <Grid container spacing={3} className={classes.root}>

        <Grid item xs={12} md={6} >
          <Card style={{ height: "20vh", margin: "5vh" }}


            component={motion.div}
            whileHover={{
              scale: 1.08,
              textShadow: "0 0 8px rgb(255,255,255)",
              transition: { duration: 0.3 },
            }}>
            <Grid container spacing={3}>
              <Grid item xs={6} md={6}>
                <img src={teacher} alt={teacher} style={{ height: "16vh", width: "16vh", padding: "2vh" }} />
              </Grid>
              <Grid item xs={6} md={6} className='desp1' style={{ paddingTop: "7vh", fontWeight: "600", paddingRight: "2vh" }}>
                Online learning is not the Next Big thing ,<br /> It is Now the Big thing
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card style={{ height: "20vh", margin: "5vh" }}
            component={motion.div}
            whileHover={{
              scale: 1.08,
              textShadow: "0 0 8px rgb(255,255,255)",
              transition: { duration: 0.3 },
            }}>
            <Grid container spacing={3}>
              <Grid item xs={6} md={6}>
                <img src={student} alt={student} style={{ height: "16vh", width: "16vh", padding: "2vh" }} />
              </Grid>
              <Grid item xs={6} md={6} className='desp' style={{ paddingTop: "7vh", fontWeight: "600", paddingRight: "2vh" }}>
                Every Time we don't know something ,<br />We can learn
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item md={12} xs={12} >

          {data.map((x)=>{
            if(!x.adhaar_veri){
              return<><Card style={{ height: "13vh", margin: "3vh" }} className={classes.root}>
                    <Grid container spacing={3}>
                      <Grid item xs={2} md={2}>
                        <img src={profile} alt={profile} style={{ height: "8vh", width: "8vh", paddingTop: "2vh" }} />
                      </Grid>
                      <Grid item xs={4} md={4} style={{ marginTop: "4vh", fontSize: "1.4rem" }}>
                        Teacher{x.id}
                      </Grid>
                      <Grid item xs={3} md={3} style={{ marginTop: "4vh", fontSize: "1.4rem" }}>
                        Teacher
                      </Grid>
                      <Grid item xs={3} md={3} style={{ marginTop: "4vh", fontSize: "1.4rem" }}>
                        <Grid container spacing={2}>
                          <Grid item xs={3} md={3}
                            component={motion.div}
                            whileHover={{
                              scale: 1.08,
                              textShadow: "0 0 8px rgb(255,255,255)",
                              transition: { duration: 0.3 },
                            }}>
                            <img src={view} alt={view} style={{ height: "4vh", width: "4vh", cursor: "pointer" }} onClick={details} />
                          </Grid>
                          <Grid item xs={3} md={3}
                            component={motion.div}
                            whileHover={{
                              scale: 1.08,
                              textShadow: "0 0 8px rgb(255,255,255)",
                              transition: { duration: 0.3 },
                            }}>
                            <img src={check} alt={check} style={{ height: "4vh", width: "4vh", cursor: "pointer" }} onClick={verify} />
                          </Grid>
                          <Grid item xs={3} md={3}
                            component={motion.div}
                            whileHover={{
                              scale: 1.08,
                              textShadow: "0 0 8px rgb(255,255,255)",
                              transition: { duration: 0.3 },
                            }}>
                            <img src={del} alt={del} style={{ height: "4vh", width: "4vh", cursor: "pointer" }} onClick={notverify} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                  <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title" style={{ color: "#00ACEA" }}>
                    {"Teacher Adhaar Card"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      <img src={`http://b5da-1-22-101-132.ngrok.io${x.adhaar_photo}`}></img>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} autoFocus >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog></>
              }
          })}
        </Grid>
      </Grid>
      
    </div>
  )

};

export default Admin;
