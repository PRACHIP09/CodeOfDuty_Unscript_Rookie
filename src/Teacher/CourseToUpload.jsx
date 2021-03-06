import React, { useState } from "react";
import {
  Grid,
  TextField,
  SpeedDial,
  SpeedDialAction,
  InputAdornment,
  FormHelperText,
  Button,
  Drawer,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import DescriptionIcon from "@mui/icons-material/Description";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DuoIcon from "@mui/icons-material/Duo";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EditIcon from "@mui/icons-material/Edit";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Validation from "./TeacherValidation";
import { useHistory } from "react-router-dom";
import close from "../Images/close.png";
const CourseToUpload = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [notes, setNotes] = useState([]);
  const [video, setVideos] = useState([]);
  const [image, setImage] = useState([]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [values, setValues] = useState({
    name: "",
    price: "",
    description: "",
    lectno: "",
    course: "",
    deadline: "",
  });
  const [errors, setErrors] = useState({});
  const [notValid, setCorrectData] = useState(true);
  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  };
  const handleSubmission = async () => {
    console.log("fromSubmit");
    console.log(level);
    console.log(values);
    let response = await fetch(
      "http://b5da-1-22-101-132.ngrok.io/course/teacher/9/",
      {
        method: "post",
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMTMwOTU4LCJpYXQiOjE2NDI4NzE3NTgsImp0aSI6IjE3MmM2MTk0ODIzMDQxOGE4NTEzOTcyMWFiNmI5YTYzIiwidXNlcl9pZCI6M30.GjCpmxRhs7y1t_-mZEcy0CtuWHAQjt2ukkS47fO0Ors`,
        },
        body: JSON.stringify({
          name: values.name,
          description: values.description,
          price: values.price,
          category: category,
          deadline: values.deadline,
          level: level,
        }),
      }
    );
    console.log(response.data);
    let data = await response.json();
    // console.log(response.status)
    if (response.status === 201) {
      console.log(data);
      console.log(data.token);
    } else {
      alert("something wrong");
    }
  };
  const handleVideo = async () => {
    console.log("fromSubmit");
    let resp = await fetch(
      "http://b5da-1-22-101-132.ngrok.io/course/teacher/files/1/",
      {
        method: "post",
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMTMwOTU4LCJpYXQiOjE2NDI4NzE3NTgsImp0aSI6IjE3MmM2MTk0ODIzMDQxOGE4NTEzOTcyMWFiNmI5YTYzIiwidXNlcl9pZCI6M30.GjCpmxRhs7y1t_-mZEcy0CtuWHAQjt2ukkS47fO0Ors`,
        },
        body: JSON.stringify({
          notes: { notes },
          video: { video },
          lect_No: values.lectno,
          course: values.course,
        }),
      }
    );
    let data = await resp.json();
    // console.log(response.status)
    if (resp.status === 201) {
      console.log(data);
      console.log(data.token);
    } else {
      alert("something wrong");
    }
  };

  const actions = [
    { icon: <AddIcCallIcon />, name: "Call", link: '"https://meet.google.com/","_blank"'},
    { icon: <DuoIcon />, name: "Video Call", link: "https://meet.google.com/" },
    { icon: <QuestionAnswerIcon />, name: "Doubt", link: "" },
  ];
  return (
    <div style={{ paddingLeft: "6vh", paddingTop: "2vh", paddingRight: "1vh" }}>
      <Grid spacing={3}>
        <div
          style={{
            paddingTop: "-1vh",
            fontSize: "1.3rem",
            textAlign: "left",
            color: "#141b37",
          }}
        >
          Upload New Courses
        </div>
        {/* for name*/}
        <Grid container spacing={3} style={{ paddingBottom: "2vh" }}>
          <Grid item md={8} sm={8} xs={8}>
            <TextField
              id="outlined-basic"
              label="Course Name"
              color="primary"
              type="text"
              error={errors.name}
              name="name"
              variant="outlined"
              value={values.name}
              fullWidth
              autoComplete="off"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PermContactCalendarIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              onChange={handleChanges}
            />
            {errors.name ? (
              <FormHelperText error>{errors.name}</FormHelperText>
            ) : (
              <FormHelperText style={{ visibility: "hidden" }}>
                ..
              </FormHelperText>
            )}
          </Grid>
        </Grid>
        {/*for description*/}
        <Grid container spacing={3} style={{ paddingBottom: "2vh" }}>
          <Grid item md={8} sm={8} xs={8}>
            <TextField
              id="outlined-basic"
              label="Description"
              color="primary"
              type="text"
              error={errors.description}
              name="description"
              variant="outlined"
              value={values.description}
              fullWidth
              autoComplete="off"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EditIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              onChange={handleChanges}
            />
            {errors.description ? (
              <FormHelperText error>{errors.description}</FormHelperText>
            ) : (
              <FormHelperText style={{ visibility: "hidden" }}>
                ..
              </FormHelperText>
            )}
          </Grid>
        </Grid>
        {/*for price*/}
        <Grid container spacing={3} style={{ paddingBottom: "2vh" }}>
          <Grid item md={8} sm={8} xs={8}>
            <TextField
              id="outlined-basic"
              label="Price"
              color="primary"
              type="text"
              error={errors.price}
              name="price"
              variant="outlined"
              value={values.price}
              fullWidth
              autoComplete="off"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AttachMoneyIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              onChange={handleChanges}
            />
            {errors.price ? (
              <FormHelperText error>{errors.price}</FormHelperText>
            ) : (
              <FormHelperText style={{ visibility: "hidden" }}>
                ..
              </FormHelperText>
            )}
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingBottom: "2vh" }}>
          <Grid item md={8} sm={8} xs={8}>
            <TextField
              id="outlined-basic"
              label="DeadLine Date"
              color="primary"
              type="text"
              error={errors.deadline}
              name="deadline"
              variant="outlined"
              value={values.deadline}
              fullWidth
              autoComplete="off"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AttachMoneyIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              onChange={handleChanges}
            />
            {errors.deadline ? (
              <FormHelperText error>{errors.deadline}</FormHelperText>
            ) : (
              <FormHelperText style={{ visibility: "hidden" }}>
                ..
              </FormHelperText>
            )}
          </Grid>
        </Grid>

        {/*for level*/}
        <Grid container spacing={3} style={{ paddingBottom: "2vh" }}>
          <Grid item md={8} sm={8} xs={8}>
            <TextField
              fullWidth
              select
              label="Course Level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <MenuItem key="Beginner" value="Beginner">
                Beginner
              </MenuItem>
              <MenuItem key="Intermediate" value="Intermediate">
                Intermediate
              </MenuItem>
              <MenuItem key="Advanced" value="Advanced">
                Advanced
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item md={8} sm={8} xs={8}>
            <TextField
              fullWidth
              select
              label="Course Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem key="Mechanical" value="Mechanical">
                Mechanical
              </MenuItem>
              <MenuItem key="Computer" value="Computer">
                Computer
              </MenuItem>
              <MenuItem
                key="Electronics And Telecommunication"
                value="Electronics And Telecommunication"
              >
                Electronics And Telecommunication
              </MenuItem>
              <MenuItem
                key="Information Technology"
                value="Information Technology"
              >
                Information Technology
              </MenuItem>
              <MenuItem key="Data Science" value="Data Science'">
                Data Science'
              </MenuItem>
              <MenuItem
                key="Artificial Intelligence And Machine Learning"
                value="Artificial Intelligence And Machine Learning"
              >
                Artificial Intelligence And Machine Learning
              </MenuItem>
              <MenuItem
                key="Artificial Intelligence (AI) And Data Science"
                value="Artificial Intelligence And Data Science"
              >
                Artificial Intelligence And Data Science
              </MenuItem>
              <MenuItem
                key="IOT And Cyber Security With Block Chain Technology"
                value="IOT And Cyber Security With Block Chain Technology"
              >
                IOT And Cyber Security With Block Chain Technology
              </MenuItem>
              <MenuItem key="Chemical" value="Chemical">
                Chemical
              </MenuItem>
              <MenuItem key="Electronics" value="Electronics">
                Electronics
              </MenuItem>
              <MenuItem key="Production" value="Production">
                Production
              </MenuItem>
              <MenuItem key="Biomedical" value="Biomedical">
                Biomedical
              </MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <Button
          style={{
            marginRight: "20vh",
            textAlign: "center",
            width: "40vh",
            fontSize: "1rem",
            marginBottom: "2vh",
          }}
          variant="contained"
          onClick={() => {
            setErrors(Validation(values));
          }}
          onClick={handleSubmission}
        >
          SUBMIT
        </Button>
        <Button
          style={{
            marginRight: "20vh",
            textAlign: "center",
            width: "40vh",
            fontSize: "1rem",
            marginBottom: "5vh",
          }}
          variant="contained"
          onClick={() => {
            setErrors(Validation(values));
          }}
          onClick={handleDrawerOpen}
        >
          Add Videos and Link
        </Button>
      </Grid>
      <Drawer
        sx={{
          width: 500,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 500,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <img
          src={close}
          alt="close"
          onClick={handleDrawerClose}
          style={{
            height: "5vh",
            width: "5vh",
            cursor: "pointer",
            marginLeft: "80%",
            marginTop: "2vh",
          }}
        />
        <div
          style={{ paddingLeft: "6vh", paddingTop: "2vh", paddingRight: "1vh" }}
        >
          <Grid spacing={3}>
            <div
              style={{
                padding: "0 0 5vh 0",
                fontSize: "1.5rem",
                textAlign: "left",
                color: "#141b37",
              }}
            >
              Upload New Videos and Notes
            </div>
            {/*for video*/}
            <Grid container spacing={3} style={{ paddingBottom: "2vh" }}>
              <Grid item md={8} sm={8} xs={8}>
                <TextField
                  id="outlined-basic"
                  color="primary"
                  type="file"
                  name="video"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <VideoLibraryIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setVideos(e.target.files[0])}
                />
              </Grid>
            </Grid>
            {/*for course*/}
            <Grid container spacing={3} style={{ paddingBottom: "2vh" }}>
              <Grid item md={8} sm={8} xs={8}>
                <TextField
                  id="outlined-basic"
                  label="Course"
                  color="primary"
                  type="text"
                  error={errors.course}
                  name="course"
                  variant="outlined"
                  value={values.course}
                  fullWidth
                  autoComplete="off"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AttachMoneyIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleChanges}
                />
                {errors.course ? (
                  <FormHelperText error>{errors.course}</FormHelperText>
                ) : (
                  <FormHelperText style={{ visibility: "hidden" }}>
                    ..
                  </FormHelperText>
                )}
              </Grid>
            </Grid>
            {/*for notes*/}
            <Grid container spacing={3} style={{ paddingBottom: "2vh" }}>
              <Grid item md={8} sm={8} xs={8}>
                <TextField
                  id="outlined-basic"
                  color="primary"
                  type="file"
                  name="notes"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <DescriptionIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setNotes(e.target.files[0])}
                />
              </Grid>
            </Grid>
            {/*for lectno*/}
            <Grid container spacing={3} style={{ paddingBottom: "2vh" }}>
              <Grid item md={8} sm={8} xs={8}>
                <TextField
                  id="outlined-basic"
                  label="Lecture Number"
                  color="primary"
                  type="text"
                  error={errors.lectno}
                  name="lectno"
                  variant="outlined"
                  value={values.lectno}
                  fullWidth
                  autoComplete="off"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AttachMoneyIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleChanges}
                />
                {errors.lectno ? (
                  <FormHelperText error>{errors.lectno}</FormHelperText>
                ) : (
                  <FormHelperText style={{ visibility: "hidden" }}>
                    ..
                  </FormHelperText>
                )}
              </Grid>
            </Grid>

            <Button
              style={{
                marginRight: "20vh",
                textAlign: "center",
                width: "40vh",
                fontSize: "1rem",
              }}
              variant="contained"
              onClick={() => {
                setErrors(Validation(values));
              }}
              onClick={handleVideo}
            >
              Upload the Course
            </Button>
          </Grid>
        </div>
      </Drawer>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            onClick={() => window.open("https://meet.google.com/", "_blank")}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

export default CourseToUpload;
