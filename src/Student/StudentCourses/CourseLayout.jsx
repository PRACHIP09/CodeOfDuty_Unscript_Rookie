import {
  Grid,
  Paper,
  Button,
  Tooltip,
  Drawer,
  TextField,
  InputAdornment,
  Box,
  CircularProgress,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import CategoryTable from "./CategoryTable";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Rating from "@mui/material/Rating";
import SignalCellular4BarOutlinedIcon from "@mui/icons-material/SignalCellular4BarOutlined";
import SignalCellular1BarOutlinedIcon from "@mui/icons-material/SignalCellular1BarOutlined";
import SignalCellular3BarOutlinedIcon from "@mui/icons-material/SignalCellular3BarOutlined";
import StarIcon from "@mui/icons-material/Star";
import close from "../../Images/close.png";
import "./course.css";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

var difficult = "hard";
const CourseLayout = () => {
  const [enroll, setEnroll] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [loading,setLoading] = useState(false);
  const history = useHistory();
  // move page to top
  const onTop = () => {
    window.scrollTo(0, 0);
  };

  const [openfdbck, setOpenfdbck] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };
  const handleDrawerOpenFdbck = () => {
    setOpenfdbck(true);
  };
  const handleDrawerCloseFdbck = () => {
    setOpenfdbck(false);
  };
  const [feedback, setFeedback] = useState("");
  const [stars, setStars] = useState(3);
  const [hover, setHover] = React.useState(-1);
  const [mainData, setData] = useState([]);
  const submit = () => {
    console.log(feedback, stars);
  };

  var config = {
    method: "get",
    url: "http://b5da-1-22-101-132.ngrok.io/course/all-courses/",
    headers: {},
  };

  useEffect(() => {
    onTop();
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setData(response.data);
        setLoading(true)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  var server = "http://946a-123-136-149-198.ngrok.io";
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const handlePaymentSuccess = async (response) => {
    try {
      let bodyData = new FormData();

      // we will send the response we've got from razorpay to the backend to validate the payment
      bodyData.append("response", JSON.stringify(response));

      await axios({
        url: `${server}/razorpay/payment/success/`,
        method: "POST",
        data: bodyData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("Everything is OK!");
          setName("");
          setAmount("");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(console.error());
    }
  };

  // this will load a script tag which will open up Razorpay payment card to make transactions
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };

  const showRazorpay = async () => {
    const res = await loadScript();
    let bodyData = new FormData();
    console.log(amount);
    console.log(name);
    // we will pass the amount and product name to the backend using form data
    bodyData.append("amount", amount.toString());
    bodyData.append("name", name);

    const data = await axios({
      url: `${server}/razorpay/pay/`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: bodyData,
    }).then((res) => {
      return res;
    });

    // console.log(data)

    // in data we will receive an object from the backend with the information about the payment
    //that has been made by the user

    var options = {
      key_id:'rzp_test_xYK7UXjbnGTg0I',
      key_secret:'UKXOzDkhqQsW4kN18XM472Tn',
      amount: data.data.payment.amount,
      currency: "INR",
      name: "Org. Name",
      description: "Test transaction",
      image: "", // add image url
      order_id: data.data.payment.id,
      handler: function (response) {
        // we will handle success by calling handlePayment method and
        // will pass the response that we've got from razorpay
        handlePaymentSuccess(response);
      },
      prefill: {
        name: "Bhumika",
        email: "bhumikamange13@gmail.com",
        contact: "7666499303",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  return (
    <div>
      {loading ? (
        <>
      <CategoryTable />
      <center>
        <Grid container spacing={3} style={{ padding: "1% 4%" }}>
          {mainData.map((x) => {
            return (
              <Grid key={x.id} item sm={4}>
                <Paper elevation={2} className="courseBox">
                  <img
                    src="https://image.freepik.com/free-vector/people-creating-together-new-app-laptop_23-2148683052.jpg"
                    alt="img"
                    className="courseImage"
                  ></img>
                  <h3>{x.name}</h3>
                  <p>{x.description}</p>
                  <p>{x.category}</p>
                  <span
                    style={{
                      float: "left",
                      margin: "5px",
                      color: "green",
                      fontSize: "1.3rem",
                    }}
                  >
                    &#8377; {x.price}
                  </span>
                  <span>
                    {x.difficult == "Beginner" ? (
                      <Tooltip title="Basic level">
                        <SignalCellular1BarOutlinedIcon
                          color="warning"
                          style={{
                            fontSize: "2rem",
                            transform: "translate(25px,5px)",
                          }}
                        />
                      </Tooltip>
                    ) : difficult == "Advance" ? (
                      <Tooltip title="Difficult level">
                        <SignalCellular4BarOutlinedIcon
                          color="warning"
                          style={{
                            fontSize: "2rem",
                            transform: "translate(25px,5px)",
                          }}
                        />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Intermediate level">
                        <SignalCellular3BarOutlinedIcon
                          color="warning"
                          style={{
                            fontSize: "2rem",
                            transform: "translate(25px,5px)",
                          }}
                        />
                      </Tooltip>
                    )}
                  </span>

                  <Button
                    style={{
                      float: "right",
                      margin: "5px",
                      borderRadius: "20px",
                    }}
                    onMouseOver={() => {
                      setName(x.name);
                      setAmount(Math.floor(x.price))
                    }}
                    variant="contained"
                    onClick={(e) => {
                      setEnroll(true);
                      handleClose(e);

                      showRazorpay();
                      var config = {
                        method: "post",
                        url: "http://b5da-1-22-101-132.ngrok.io/course/student/2/",
                        headers: {
                          Authorization:
                            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMTQ2MTkwLCJpYXQiOjE2NDI4ODY5OTAsImp0aSI6IjVjMzJmMGFlMjhiMzQ1MjM4MzQ1MzcxNzBiMGQ2ZTYyIiwidXNlcl9pZCI6MTB9.dXJWzQ97XWHM2cDlITUiJF7uZ66ia8MxrptuxdOzMQQ",
                        },
                      };

                      axios(config)
                        .then(function (response) {
                          console.log(JSON.stringify(response.data));
                          Swal.fire({
                            icon: "success",
                            title: "Added to the list",
                          });
                        })

                        // history.push("/profile");
                        .catch(function (error) {
                          console.log(error);
                        });
                    }}
                  >
                    Enroll
                  </Button>

                  <br />
                  <br />

                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ float: "left", margin: "5px" }}
                />
                <Tooltip
                  arrow
                  title="Have one to one conversations with our teachers"
                >
                  <Link to="/faqs" style={{ textDecoration: "none" }}>
                    <Button>
                      <QuestionAnswerIcon />
                    </Button>
                  </Link>
                </Tooltip>
                <Button
                  style={{ fontSize: ".7rem" }}
                  onClick={handleDrawerOpenFdbck}
                >
                  Give your valuable Feedback
                </Button>
              </Paper>
            </Grid>
          );
        })}
        {/* <Grid item sm={4}>
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
            <span>
              {difficult == "easy" ? (
                <Tooltip title="Basic level">
                  <SignalCellular1BarOutlinedIcon
                    color="warning"
                    style={{
                      fontSize: "2rem",
                      transform: "translate(25px,5px)",
                    }}
                  />
                </Tooltip>
              ) : difficult == "hard" ? (
                <Tooltip title="Difficult level">
                  <SignalCellular4BarOutlinedIcon
                    color="warning"
                    style={{
                      fontSize: "2rem",
                      transform: "translate(25px,5px)",
                    }}
                  />
                </Tooltip>
              ) : (
                <Tooltip title="Intermediate level">
                  <SignalCellular3BarOutlinedIcon
                    color="warning"
                    style={{
                      fontSize: "2rem",
                      transform: "translate(25px,5px)",
                    }}
                  />
                </Tooltip>
              )}
            </span>

            {!enroll ? (
              <Button
                style={{ float: "right", margin: "5px", borderRadius: "20px" }}
                variant="contained"
                onClick={(e) => {
                  setEnroll(true);
                  handleClose(e);
                }}
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

            <br />
            <br />

            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
              style={{ float: "left", margin: "5px" }}
            />
            <Tooltip
              arrow
              title="Have one to one conversations with our teachers"
            >
              <Link to="/chat" style={{ textDecoration: "none" }}>
                <Button>
                  <QuestionAnswerIcon />
                </Button>
              </Link>
            </Tooltip>
            <Button
              style={{ fontSize: ".7rem" }}
              onClick={handleDrawerOpenFdbck}
            >
              Give your valuable Feedback
            </Button>
          </Paper>
        </Grid> */}
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
          open={openfdbck}
        >
          <img
            src={close}
            alt="close"
            onClick={handleDrawerCloseFdbck}
            style={{
              height: "5vh",
              width: "5vh",
              cursor: "pointer",
              marginLeft: "80%",
              marginTop: "2vh",
            }}
          />
          <div
            style={{
              paddingLeft: "6vh",
              paddingTop: "2vh",
              paddingRight: "1vh",
            }}
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
                Feedback
              </div>
              {/*for feedback*/}
              <Grid container spacing={3} style={{ paddingBottom: "2vh" }}>
                <Grid item md={8} sm={8} xs={8}>
                  <TextField
                    id="outlined-basic"
                    label="feedback"
                    color="primary"
                    type="text"
                    name="feedback"
                    variant="outlined"
                    value={feedback}
                    fullWidth
                    autoComplete="off"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end"></InputAdornment>
                      ),
                    }}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </Grid>
              </Grid>
              {/*for notes*/}
              <Grid container spacing={3} style={{ paddingBottom: "2vh" }}>
                <Grid item md={8} sm={8} xs={8}>
                  <Rating
                    name="hover-feedback"
                    value={stars}
                    precision={1}
                    onChange={(event, newValue) => {
                      setStars(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
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
                onClick={submit}
              >
                Submit
              </Button>
            </Grid>
          </div>
        </Drawer>
      </center>
      </>):(
        <Box style={{padding:"5vh"}}>
        <CircularProgress />
        <div style={{padding:"5vh" , fontSize:"1.5rem" , fontWeight:"700"}}>Loading</div>
           
      </Box>
      )
      }
    </div>
  );
};

export default CourseLayout;
