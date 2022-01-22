import React, { useState,useEffect } from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { BsTelephoneForwardFill, BsArrowDown } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";
import { Formik } from "formik";
import "./Contactus.css";

export default function ContactUS() {
  // move page to top
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, []);
  const [value, setValue] = useState({
    email: "",
    fname: "",
    lname: "",
    subject: "",
    message: "",
  });
  const handleChanges = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  var data = JSON.stringify({
    fname: `${value.fname}`,
    lname: `${value.lname}`,
    email: `${value.email}`,
    subject: `${value.subject}`,
    message: `${value.message}`,
  });

  var config = {
    method: "post",
    // url: "https://djacmdev.pythonanywhere.com/api/contact/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return (
    <div style={{  paddingBottom: "30px",backgroundColor: '#9e8fb2',
    backgroundImage: 'linear-gradient(315deg, #9e8fb2 0%, #a7acd9 74%)',transform:'translateY(-20px)'}}>
      <center>
        <h1 className="heading">
          GET IN TOUCH<BsArrowDown></BsArrowDown>
        </h1>

        <Formik
          initialValues={{
            email: "",
            password: "",
            fname: "",
            lname: "",
            subject: "",
            message: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.subject) {
              errors.subject = "Required";
            }
            if (!values.message) {
              errors.message = "Required";
            }
            if (!values.lname) {
              errors.lname = "Required";
            }
            if (!values.fname) {
              errors.fname = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
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
            <form onSubmit={handleSubmit}>
              <Grid className="detail" container spacing={0}>
                <Grid
                  item
                  md={6}
                  sm={12}
                >
                  <iframe
                    className="map"
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.002340483474!2d72.83433341393042!3d19.10755325594757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sDwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1638180891128!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </Grid>
                <Grid
                  item
                  md={6}
                  sm={12}
                >
                  <div className="inputFields">
                    <Grid container spacing={3}>
                      <Grid
                        item
                        md={6}
                        sm={6}
                        xs={12}
                      >
                        <label for="fname">First Name:</label>
                        <input
                          value={values.fname}
                          onChange={(event) => {
                            handleChange(event);
                            handleChanges(event);
                          }}
                          onBlur={handleBlur}
                          name="fname"
                          id="fname"
                        ></input>
                        <br />
                        {errors.fname && touched.fname && errors.fname}
                      </Grid>
                      <Grid
                        item
                        md={6}
                        sm={6}
                        xs={12}
                      >
                        <label for="lname">Last Name:</label>
                        <input
                          value={values.lname}
                          name="lname"
                          id="lname"
                          onChange={(event) => {
                            handleChange(event);
                            handleChanges(event);
                          }}
                          onBlur={handleBlur}
                        ></input>
                        <br />

                        {errors.lname && touched.lname && errors.lname}
                      </Grid>
                      <Grid
                        item
                        sm={6}
                        xs={12}
                      >
                        <label for="email">Email:</label>
                        <input
                          id="email"
                          value={values.email}
                          type="email"
                          name="email"
                          onChange={(event) => {
                            handleChange(event);
                            handleChanges(event);
                          }}
                          onBlur={handleBlur}
                        ></input>
                        <br />

                        {errors.email && touched.email && errors.email}
                      </Grid>
                      <Grid
                        item
                        sm={6}
                        xs={12}
                      >
                        <label for="subject">Subject:</label>
                        <input
                          value={values.subject}
                          id="subject"
                          name="subject"
                          onChange={(event) => {
                            handleChange(event);
                            handleChanges(event);
                          }}
                          onBlur={handleBlur}
                        ></input>
                        <br />

                        {errors.subject && touched.subject && errors.subject}
                      </Grid>
                      <Grid  item xs={12}>
                        <label for="message">Message:</label>
                        <input
                          value={values.message}
                          onChange={(event) => {
                            handleChange(event);
                            handleChanges(event);
                          }}
                          id="message"
                          name="message"
                          // onChange={handleChange}
                          onBlur={handleBlur}
                        ></input>
                        <br />

                        {errors.message && touched.message && errors.message}
                      </Grid>
                    </Grid>
                  </div>
                  <br />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: "160px",
                      borderRadius: "20px",
                      fontSize: "1.2rem",
                    }}
                    variant="contained"
                    onClick={() => {
                      axios(config)
                        .then(function (response) {
                          console.log(JSON.stringify(response.data));
                          console.log(JSON.stringify(response.status));
                        })
                        .catch(function (error) {
                          console.log(error);
                        });
                    }}
                  >
                    Submit
                  </Button>
                  <br />
                  <Grid className="contact" container spacing={3}>
                    <Grid
                     
                      item
                      sm={6}
                      xs={12}
                    >
                      <h2>
                        D. J. Sanghvi College of Engineering, Vile Parle (W),
                        Mumbai.{" "}
                      </h2>
                    </Grid>
                    <Grid
                   
                      item
                      sm={6}
                      xs={12}
                    >
                      <p>
                        <BsTelephoneForwardFill /> +91 99877 48170
                      </p>
                      <p>
                        <BsTelephoneForwardFill /> +91 98197 05248
                      </p>
                      <p>
                        <HiOutlineMail /> coreacm@gmail.com
                      </p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </center>
    </div>
  );
}
