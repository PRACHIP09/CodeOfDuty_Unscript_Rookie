import { Button, Paper, Grid } from "@mui/material";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "./studentH.css";
import image1 from "../../Images/medi.png";
import image2 from "../../Images/flame-1678.png";
import image3 from "../../Images/study.png";
import addNotification from 'react-push-notification';
const Hero = () => {
  AOS.init();

  const buttonClick = () => {
    addNotification({
      title: "Yipeeee",
      subtitle: "New post added",
      message: "Go checkout the new course.",
      theme: "light",
      duration:4000,
      vibrate:Number[10],
      
      // native: true, // when using native, your OS will handle theming.
    });
  };
  return (
    <div>
      <center>
        {/* sections1 */}
        <h1 className="heroHead">
          Grow Your Skills to Advance Your Career Path
        </h1>
        <span className="heroFeature">No credit card required</span>
        <span className="heroFeature">7 days Trial</span>
        <span className="heroFeature2">Free for teachers</span>
        <br />
        <Link to="/courses" className="LinkTag">
          <Button
            size="large"
            variant="contained"
            style={{
              margin: "20px",
              borderTopRightRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
            onMouseOver={buttonClick}
          >
            Get Started Now
          </Button>
        </Link>

        {/* sections2 */}
        <Grid container spacing={2} style={{ padding: "2% 10%" }}>
          <Grid item sm={4} data-aos="zoom-in">
            <div
              style={{
                borderTopRightRadius: "30px",
                borderBottomLeftRadius: "30px",
                backgroundColor: "#E2D2FE ",
              }}
            >
              <img className="heroImage" src={image1} alt="human"></img>
            </div>
          </Grid>
          <Grid item sm={4} data-aos="zoom-in">
            <div
              style={{
                borderTopRightRadius: "30px",
                borderBottomLeftRadius: "30px",
                backgroundColor: "#FDE1AB ",
              }}
            >
              <img className="heroImage" src={image2} alt="human"></img>
            </div>
          </Grid>
          <Grid item sm={4} data-aos="zoom-in">
            <div
              style={{
                borderTopRightRadius: "30px",
                borderBottomLeftRadius: "30px",
                backgroundColor: "#CCF0BF ",
              }}
            >
              <img className="heroImage" src={image3} alt="human"></img>
            </div>
          </Grid>
        </Grid>
      </center>
    </div>
  );
};

export default Hero;
