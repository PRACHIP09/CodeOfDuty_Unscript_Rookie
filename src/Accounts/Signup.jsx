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
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bulbs from "../Images/urban-941.png";
import Swal from "sweetalert2";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { FormatAlignLeftSharp } from "@mui/icons-material";
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
      <Link color="inherit" style={{ color: "blue", textDecoration: "none" }}>
        Code of duty
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Signup = () => {
  // definition

  const history = useHistory();
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const [values, setValues] = React.useState({
    name: "",
    password: "",
    password2: "",
    email: "",
  });

  const [teacher, setRole] = React.useState(false);
  const [passwordShow, setpassword] = React.useState(false);
  const [passwordShow2, setpassword2] = React.useState(false);

  //   functions
  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  };
  var data = new FormData();
  data.append("teaaccher", `${teacher}`);
  data.append("password", `${values.password}`);
  data.append("email", `${values.email}`);
  var config = {
    method: "post",
    url: "http://b5da-1-22-101-132.ngrok.io/account/signup/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh" }}
        style={{ padding: "10px 50px" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          padding={3}
          sx={{
            backgroundImage: `url(${bulbs})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#2888ff" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Formik
              initialValues={{
                email: "",
                password: "",
                password2: "",
                name: "",
                fname: "",
                lname: "",
                subject: "",
                message: "",
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
                if (!values.password2) {
                  errors.password2 = "Password is required";
                } else if (values.password !== values.password2) {
                  errors.password2 = "Password doesn't match";
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
                  <Grid container spacing={2}>
                    <Grid item md={6} sm={12} xs={12}>
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
                          // onChange={handleChanges}

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
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <TextField
                        label="Confirm password"
                        color="primary"
                        type={passwordShow2 ? "text" : "password"}
                        // error={errors.password2}
                        required
                        variant="outlined"
                        value={values.password2}
                        name="password2"
                        fullWidth
                        // onChange={handleChanges}

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
                                  setpassword2(!passwordShow2);
                                }}
                              >
                                {passwordShow2 ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      {errors.password2 ? (
                        <FormHelperText error>
                          {errors.password2}
                        </FormHelperText>
                      ) : (
                        <FormHelperText style={{ visibility: "hidden" }}>
                          ..
                        </FormHelperText>
                      )}
                    </Grid>
                    <br />
                    <br />
                    <br />
                    <FormControl
                      style={{
                        width: "490px",
                        transform: "translateX(17px)",
                        margin: "5px",
                      }}
                      fullWidth
                    >
                      <InputLabel id="demo-simple-select-label">
                        Role
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={teacher}
                        label="Role"
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <MenuItem value={true}>Teacher</MenuItem>
                        <MenuItem value={false}>Student</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: "#2888ff" }}
                    style={{ fontSize: "1.1rem" }}
                    component={motion.div}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "#2888ff",
                      textShadow: "0 0 8px rgb(255,255,255)",
                      transition: { duration: 0.3 },
                    }}
                    onClick={(e) => {
                      console.log(errors);
                      console.log(teacher);
                      if (
                        !errors.email &&
                        !errors.password &&
                        !errors.password2
                      ) {
                        axios(config)
                          .then(function (response) {
                            console.log(JSON.stringify(response.data));
                            Swal.fire({
                              icon: "success",
                              title: "Email verfication",
                              text: "Link is sent to your mail",
                              showClass: {
                                popup: "animate__animated animate__fadeInDown",
                              },
                              hideClass: {
                                popup: "animate__animated animate__fadeOutUp",
                              },
                            });
                            // history.push("/home");
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
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs={12} md={12}>
                      <Button
                        color="primary"
                        variant="outlined"
                        fullWidth
                        style={{ marginBottom: "3vh" }}
                        component={motion.div}
                        whileHover={{
                          scale: 1.08,
                          textShadow: "0 0 8px rgb(255,255,255)",
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Link
                          to="/login"
                          style={{
                            textDecoration: "none",
                            fontSize: "1rem",
                            color: "blue",
                          }}
                        >
                          Have an account? Login
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
      </Grid>
    </ThemeProvider>
  );
};

export default Signup;
