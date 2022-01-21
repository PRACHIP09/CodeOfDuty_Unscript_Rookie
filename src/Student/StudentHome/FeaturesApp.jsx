import React from "react";
import { Grid, Paper } from "@mui/material";
import pin from "../../Images/pin.png";
import graph from "../../Images/graph.png";
import { motion } from "framer-motion";
import dots from "../../Images/rush-92.png";
const FeaturesApp = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={6} style={{ padding: "5% 5% 5% 10%" }}>
          <p className="featureHead">High Quality Video ,Audio & Live Class.</p>
          <p className="featureData">
            High-definition video of higher resolution and quality than
            standard-definition
          </p>
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <Paper elevation={2} className="feature"  whileHover={{
                    scale: 1.05,
                  }}
                  component={motion.div}>
                <img
                  alt="icon"
                  width="40"
                  src="https://cdn-icons.flaticon.com/png/512/1065/premium/1065269.png?token=exp=1642791377~hmac=e7ad1f4ac7a5aafe5d56bc1130771cb5"
                ></img>
                <span className="tabs"> &nbsp;Audio Lectures</span>
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper elevation={2} className="feature"  whileHover={{
                    scale: 1.05,
                  }}
                  component={motion.div}>
                <img
                  alt="icon"
                  width="40"
                  src="https://cdn-icons.flaticon.com/png/512/2981/premium/2981036.png?token=exp=1642791487~hmac=99591e52d65de81c4b1e6ceda171ea4b"
                ></img>
                <span className="tabs">&nbsp;Live Classes</span>
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper elevation={2} className="feature"  whileHover={{
                    scale: 1.05,
                  }}
                  component={motion.div}>
                <img
                  alt="icon"
                  width="40"
                  src="https://cdn-icons.flaticon.com/png/512/3172/premium/3172486.png?token=exp=1642791564~hmac=73a89902e2d9865deda9948f57612790"
                ></img>
                <span className="tabs"> &nbsp; Recorded Class</span>
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper elevation={2} className="feature"  whileHover={{
                    scale: 1.05,
                  }}
                  component={motion.div}>
                <img
                  alt="icon"
                  width="40"
                  src="https://cdn-icons.flaticon.com/png/512/3253/premium/3253275.png?token=exp=1642791640~hmac=22b14e5045e9a7f0abc0f9e87094a10f"
                ></img>
                <span className="tabs"> &nbsp; 50+ Notes</span>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <Paper elevation={0}>
            <img className="pin" src={pin} alt="pin"></img>
            {/* <img className="dots"  src={dots} alt="pin"></img> */}
            <img
              src="https://image.freepik.com/free-vector/video-conference-connecting-together-learning-meeting-online-laptop-hand-drawn-cartoon-art-illustration_56104-892.jpg"
              alt="human"
              className="featureImage"
            ></img>
            <img className="graph" src={graph} alt="pin"></img>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FeaturesApp;
