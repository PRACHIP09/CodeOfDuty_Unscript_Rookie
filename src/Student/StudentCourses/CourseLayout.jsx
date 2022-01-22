import { Grid, Paper, Button, Tooltip } from "@mui/material";
import React, { useState } from "react";
import CategoryTable from "./CategoryTable";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import "./course.css";
const CourseLayout = () => {
  const [enroll, setEnroll] = useState(false);
  return (
    <div>
      <CategoryTable />
      <Grid container spacing={3} style={{padding:'1% 4%'}}>
        <Grid item sm={4}>
          <Paper elevation={2} className="courseBox">
            <img
              src="https://image.freepik.com/free-vector/people-creating-together-new-app-laptop_23-2148683052.jpg"
              alt="img"
              className="courseImage"
            ></img>
            <h3>Web Designing</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </p>
            <span
              style={{
                float: "left",
                margin: "5px",
                color: "green",
                fontSize: "1.3rem",
              }}
            >
              &#8377; 100
            </span>

            {!enroll ? (
              <Button
                style={{ float: "right", margin: "5px", borderRadius: "20px" }}
                variant="contained"
                onClick={() => setEnroll(true)}
              >
                Enroll
              </Button>
            ) : (
              <Button
                style={{ float: "right", margin: "5px", borderRadius: "20px" }}
                variant="contained"
                color="error"
                onClick={() => setEnroll(false)}
              >
                Expel
              </Button>
            )}
            <Tooltip
              arrow
              title="Have one to one conversations with our teachers"
            >
              <Button>
                <QuestionAnswerIcon />
              </Button>
            </Tooltip>
            <br />
            <br />
            <Button style={{ fontSize: ".7rem" }}>
              Give your valuable Feedback
            </Button>
          </Paper>
        </Grid>
        <Grid item sm={4}></Grid>
        <Grid item sm={4}></Grid>
      </Grid>
    </div>
  );
};

export default CourseLayout;
