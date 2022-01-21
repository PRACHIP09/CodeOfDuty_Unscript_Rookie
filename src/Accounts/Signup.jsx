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
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Your Website</Link>
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
    phone: "",
  });
  const [passwordShow, setpassword] = React.useState(false);
  const [passwordShow2, setpassword2] = React.useState(false);

  //   functions
  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  var data = new FormData();
  data.append("username", `${values.name}`);
  data.append("password", `${values.password}`);
  data.append("email", `${values.email}`);
  var config = {
    method: "post",
    url: "http://localhost:8000/api/register/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }} style={{padding:'10px 50px'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
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
                if (!values.name) {
                  errors.name = "Name is required";
                }
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
                    label="Name"
                    color="primary"
                    type="text"
                    autoFocus
                    // error={errors.name}
                    name="name"
                    required
                    variant="outlined"
                    value={values.name}
                    fullWidth
                    autoComplete="off"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PermContactCalendarIcon />
                        </InputAdornment>
                      ),
                    }}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      handleChange(event);
                      handleChanges(event);
                    }}
                  />
                  {errors.name ? (
                    <FormHelperText error>{errors.name}</FormHelperText>
                  ) : (
                    <FormHelperText style={{ visibility: "hidden" }}>
                      ..
                    </FormHelperText>
                  )}
                  <br />
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
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
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
                            history.push('/home');
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
                    <Grid item>
                      <Link to="/" variant="body2">
                        {"Don't have an account? Login"}
                      </Link>
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
