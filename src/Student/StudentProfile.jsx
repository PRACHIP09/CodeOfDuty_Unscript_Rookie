import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Drawer,
  Button,
  Tooltip,
  Box,
  CircularProgress
} from "@mui/material";
import doubts from "../Images/doubts.png";
import feedback from "../Images/feedback.png";
import PeopleIcon from "@mui/icons-material/People";
import blog from "../Images/blog.jpg";
import {Link} from 'react-router-dom';
import link from "../Images/link.png";
import { motion } from "framer-motion";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import axios from "axios";
import Faqs from './Faqs';
import "../Teacher/teacher.css";
// import Cart from "./Cart";
import "./Profile.css";
var i = 0;
var sum=0;
const StudentProfile = () => {
  const [load, setLoad] = useState([]);
  const [loading , setLoadinng] = useState(false);
  const [temp, setTemp] = useState([]);
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
    setLoadinng(true)
    setLoad(result.data);
    for (i = 0; i < result.data.length; i++) {
      console.log(result.data[i].item);
      const res = await axios.get(
        `https://b5da-1-22-101-132.ngrok.io/course/one-course/${result.data[i].item}/`,
        {}
      );
      setTemp((prevBlogs) => {
        return [...prevBlogs, res.data];
      });
      console.log(temp);
    }
  };
  const uniques = [...new Set(temp.map((item) => item.id))];
  console.log(uniques);
  return (
    <div>
      {loading ? (<>
      <div
        className="heading"
        style={{
          fontWeight: "700",
          fontSize: "1.7rem",
          padding: "5px",
          alignItems: "Left",
        }}
      >
        <br />
        <div className="profileName">
          <h1>Profile</h1>
        </div>
      </div>
      <Grid
        container
        spacing={3}
        style={{ paddingLeft: "2vh", paddingRight: "2vh", paddingTop: "2vh" }}
      >
        <Grid item xs={12} sm={12}>
          <div
            className="heading"
            style={{
              padding: "3vh",
              fontWeight: "700",
              fontSize: "1.7rem",
              textAlign: "left",
            }}
          >
            <p>Enrolled Courses:</p>
            <br />
          </div>
          <Grid
            container
            spacing={3}
            style={{
              paddingLeft: "2vh",
              paddingRight: "2vh",
              paddingTop: "2vh",
            }}
          >
            {temp.map((index) => (
              <Grid item sm={6} md={4} xs={12}>
                <Card
                  style={{
                    backgroundColor: "#FDE1AB",
                    padding: "10px",
                    height: "250px",
                  }}
                >
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid items md={3} xs={3}>
                      <Link to="/faqs">
                        <img
                          src={link}
                          alt={link}
                          style={{
                            height: "6vh",
                            width: "6vh",
                            cursor: "pointer",
                            padding: "3px",
                            margin: "5px",
                          }}
                          
                        ></img></Link>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Typography gutterBottom variant="h5" className="profileCard">
                    {index.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    component="div"
                    className="profileData"
                  >
                    Domain:{index.category}
                  </Typography>
                  <br />
                  <hr />
                  <Typography
                    gutterBottom
                    component="div"
                    className="profilePrice"
                  >
                    &#8377; {index.price}
                  </Typography>
                  <br />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* <Grid item xs={12} sm={4}>
          <div
            className="heading"
            style={{
              padding: "3vh",
              fontWeight: "700",
              fontSize: "1.7rem",
              alignItems: "Left",
            }}
          >
            <u>Payment Gateway</u>
            <br />
          </div>
          Number of items: {uniques.length}
          Total prize= $ {uniques.price}
          {/* <Cart /> */}
        {/* </Grid> */} 
      </Grid>
      </>):(<Box style={{padding:"5vh"}}>
      <CircularProgress />
      <div style={{padding:"5vh" , fontSize:"1.5rem" , fontWeight:"700"}}>Loading</div>
         
    </Box>)}
    </div>
  );
};

export default StudentProfile;
