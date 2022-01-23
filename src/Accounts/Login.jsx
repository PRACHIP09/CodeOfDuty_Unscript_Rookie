import * as React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Grid,
  TextField,
  InputAdornment,
  Tooltip,
  IconButton,
  FormHelperText,
  Drawer,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import pic from "../Images/hourglass.jpg";
import Swal from "sweetalert2";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import close from "../Images/close.png";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { motion } from "framer-motion";
import axios from "axios";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      style={{ fontSize: "1.1rem" }}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        style={{ color: "#fe6c77", textDecoration: "none" }}
      >
        Code of duty
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  // definition
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const history = useHistory();
  const [values, setValues] = React.useState({
    name: "",
    password: "",
    email: "",
    showPassword: false,
  });
  const [passwordShow, setpassword] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  //   functions
  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  };

  var data = new FormData();
  data.append("username", "bhumikaM");
  data.append("password", `${values.password}`);
  data.append("email", `${values.email}`);
  var config = {
    method: "post",
    url: "http://b5da-1-22-101-132.ngrok.io/account/login/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          component={motion.div}
          transition={{ type: "spring", stiffness: 40 }}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
        >
          <Button
            size="small"
            variant="contained"
            color="success"
            style={{
              transform: "translate(-180px,20px)",
              backgroundColor: "#fe6c77",
            }}
            onClick={handleDrawerOpen}
          >
            Admin ?
          </Button>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#fe6c77" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              LOGIN
            </Typography>

            <Formik
              initialValues={{
                email: "",
                password: "",
                showPassword: false,
              }}
              validate={(values) => {
                const errors = {};

                if (!values.password) {
                  errors.password = "Password is required";
                } else if (values.password.length < 8) {
                  errors.password = "Password is too short";
                } else if (!passwordRegex.test(values.password)) {
                  errors.password = "Password is not strong enough";
                }

                if (!values.email) {
                  errors.email = "Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    color="primary"
                    type="email"
                    // error={errors.email}
                    name="email"
                    required
                    variant="outlined"
                    value={values.email}
                    fullWidth
                    autoComplete="off"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      handleChange(event);
                      handleChanges(event);
                    }}
                  />
                  {errors.email ? (
                    <FormHelperText error>{errors.email}</FormHelperText>
                  ) : (
                    <FormHelperText style={{ visibility: "hidden" }}>
                      ..
                    </FormHelperText>
                  )}
                  <br />
                  <Tooltip
                    title="Minimum eight characters, at least one letter, one number and one special character are required"
                    arrow
                  >
                    <TextField
                      label="password"
                      color="primary"
                      type={passwordShow ? "text" : "password"}
                      // error={errors.password}
                      required
                      variant="outlined"
                      value={values.password}
                      name="password"
                      fullWidth
                      onChange={(event) => {
                        handleChange(event);
                        handleChanges(event);
                      }}
                      autoComplete="off"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onMouseDown={(e) => e.preventDefault()}
                              edge="end"
                              onClick={() => {
                                setpassword(!passwordShow);
                              }}
                            >
                              {passwordShow ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Tooltip>
                  {errors.password ? (
                    <FormHelperText error>{errors.password}</FormHelperText>
                  ) : (
                    <FormHelperText style={{ visibility: "hidden" }}>
                      ..
                    </FormHelperText>
                  )}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: "#fe6c77", boxShadow: "none" }}
                    component={motion.div}
                    whileHover={{
                      backgroundColor: "#fe6c77",
                      scale: 1.08,
                      textShadow: "0 0 8px rgb(255,255,255)",
                      transition: { duration: 0.3 },
                    }}
                    style={{ fontSize: "1.1rem" }}
                    onClick={(e) => {
                      console.log(errors);
                      if (
                        !errors.email &&
                        !errors.name &&
                        !errors.password &&
                        !errors.password2
                      ) {
                        axios(config)
                          .then(function (response) {
                            console.log(JSON.stringify(response.data));
                            if (response.data.teacher) {
                              history.push("/teacher");
                            } else {
                              history.push("/home");
                            }
                          })
                          .catch(function (error) {
                            console.log(error);
                            Swal.fire({
                              icon: "error",
                              title: "Invalid",
                              text: "Please try again ",
                              showClass: {
                                popup: "animate__animated animate__fadeInDown",
                              },
                              hideClass: {
                                popup: "animate__animated animate__fadeOutUp",
                              },
                            });
                          });
                      }
                    }}
                  >
                    Submit
                  </Button>
                  <Grid container>
                    <Grid item xs={12} md={12}>
                      {/*<Link href="#" variant="body2">
                        Forgot password?
                      </Link>*/}
                      <Button
                        color="primary"
                        variant="outlined"
                        fullWidth
                        style={{ marginBottom: "3vh" }}
                        onClick={() => {
                          Swal.fire({
                            title: "Input your email ",
                            input: "text",
                            inputLabel: "Email",
                            inputValidator: async (num) => {
                              console.log(num);
                              if (!num) {
                                return "You need to write something!";
                              } else if (num) {
                                var FormData = require("form-data");
                                var mail = new FormData();
                                mail.append("email", num);
                                var config2 = {
                                  method: "post",
                                  url: "http://b5da-1-22-101-132.ngrok.io/account/request-reset-email/",
                                  data: mail,
                                };
                                axios(config2)
                                  .then(function (response) {
                                    console.log(JSON.stringify(response.data));
                                    Swal.fire({
                                      title: "We have sent a link to your mail",
                                      icon: "success",
                                    });
                                  })
                                  .catch((e) => {
                                    Swal.fire({
                                      title: "invalid",
                                      icon: "error",
                                    });
                                  });
                              }
                            },
                          });
                        }}
                        component={motion.div}
                        whileHover={{
                          scale: 1.08,
                          textShadow: "0 0 8px rgb(255,255,255)",
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Link
                          to="#"
                          style={{
                            textDecoration: "none",
                            fontSize: ".8rem",
                            color: "blue",
                          }}
                        >
                          Forgot Password ?
                        </Link>
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      {/*<Link to="/signin" variant="body2">
                        {"Already have an account ? Signin"}
                    </Link>*/}
                      <Button
                        color="primary"
                        variant="outlined"
                        fullWidth
                        component={motion.div}
                        whileHover={{
                          scale: 1.08,
                          textShadow: "0 0 8px rgb(255,255,255)",
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Link
                          to="/signin"
                          style={{
                            textDecoration: "none",
                            fontSize: ".8rem",
                            color: "blue",
                          }}
                        >
                          Don't have an account ? Sign Up
                        </Link>
                      </Button>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              )}
            </Formik>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={3}
          md={6}
          spacing={3}
          sx={{
            backgroundImage: `url(${pic})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
      <Drawer
        sx={{
          width: 600,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 600,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
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
            marginLeft: "10%",
            marginTop: "2vh",
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          component={Paper}
          elevation={6}
          square
          component={motion.div}
          transition={{ type: "spring", stiffness: 40 }}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#fe6c77" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login As Admin
            </Typography>

            <Formik
              initialValues={{
                email: "",
                password: "",
                showPassword: false,
              }}
              validate={(values) => {
                const errors = {};

                if (!values.password) {
                  errors.password = "Password is required";
                } else if (values.password.length < 8) {
                  errors.password = "Password is too short";
                } else if (!passwordRegex.test(values.password)) {
                  errors.password = "Password is not strong enough";
                }

                if (!values.email) {
                  errors.email = "Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    color="primary"
                    type="email"
                    // error={errors.email}
                    name="email"
                    required
                    variant="outlined"
                    value={values.email}
                    fullWidth
                    autoComplete="off"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      handleChange(event);
                      handleChanges(event);
                    }}
                  />
                  {errors.email ? (
                    <FormHelperText error>{errors.email}</FormHelperText>
                  ) : (
                    <FormHelperText style={{ visibility: "hidden" }}>
                      ..
                    </FormHelperText>
                  )}
                  <br />
                  <Tooltip
                    title="Minimum eight characters, at least one letter, one number and one special character are required"
                    arrow
                  >
                    <TextField
                      label="password"
                      color="primary"
                      type={passwordShow ? "text" : "password"}
                      // error={errors.password}
                      required
                      variant="outlined"
                      value={values.password}
                      name="password"
                      fullWidth
                      onChange={(event) => {
                        handleChange(event);
                        handleChanges(event);
                      }}
                      autoComplete="off"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onMouseDown={(e) => e.preventDefault()}
                              edge="end"
                              onClick={() => {
                                setpassword(!passwordShow);
                              }}
                            >
                              {passwordShow ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Tooltip>
                  {errors.password ? (
                    <FormHelperText error>{errors.password}</FormHelperText>
                  ) : (
                    <FormHelperText style={{ visibility: "hidden" }}>
                      ..
                    </FormHelperText>
                  )}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: "#fe6c77", boxShadow: "none" }}
                    component={motion.div}
                    whileHover={{
                      backgroundColor: "#fe6c77",
                      scale: 1.08,
                      textShadow: "0 0 8px rgb(255,255,255)",
                      transition: { duration: 0.3 },
                    }}
                    style={{ fontSize: "1.1rem" }}
                    onClick={(e) => {
                      history.push("/admin");
                      console.log(errors);
                    }}
                  >
                    Submit
                  </Button>
                  <Grid container></Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              )}
            </Formik>
          </Box>
        </Grid>
      </Drawer>
    </ThemeProvider>
  );
};

export default Login;
