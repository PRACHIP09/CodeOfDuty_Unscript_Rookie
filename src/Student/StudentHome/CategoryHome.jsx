import { Grid, Button } from "@mui/material";
import React from "react";
// import './Loc.css'
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import addNotification from "react-push-notification";

function CategoryHome() {
  const buttonClick = () => {
    addNotification({
      title: "Yipeeee",
      subtitle: "New post added",
      message: "Go checkout the new course.",
      theme: "light",
      duration: 3000,
      vibrate: Number[10],
      // native: true, // when using native, your OS will handle theming.
    });
  };
  return (
    <div
      id="domain"
      style={{ color: "black", backgroundColor: "white", paddingRight: "30px" }}
    >
      <center>
        <div
          className="domain"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: "5%",
              //
              marginBottom: "4%",
            }}
            className="domainHeading"
          >
            <span
              style={{ textAlign: "center", transform: "translateX(45px)" }}
              onMouseOver={buttonClick}
            >
              Domains
            </span>
            <Link className="LinkTag" to="/courses">
              <Button
                style={{
                  transform: "translate(450px,10px)",
                  borderRadius: "20px",
                  backgroundColor: "purple",
                }}
                variant="contained"
              >
                View All
              </Button>
            </Link>
          </h2>
          <Grid
            container
            sx={{ width: "100%" }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              width: "100%",
              marginBottom: "5%",
              rowGap: "70px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div
                    class="flip-card-front"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FaUserGraduate
                        style={{
                          color: "white",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                      <h3
                        style={{
                          color: "white",
                          margin: "0px",
                          padding: "0px",
                          marginTop: "10px",
                        }}
                      >
                        AI/ML
                      </h3>
                    </div>
                  </div>
                  <div
                    class="flip-card-back"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <p>
                      AI/ML—short for artificial intelligence (AI) and machine
                      learning (ML)—represents an important evolution in
                      computer science and data processing that is quickly
                      transforming a vast array of industries
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div
                    class="flip-card-front"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FaUserGraduate
                        style={{
                          color: "white",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                      <h3
                        style={{
                          color: "white",
                          margin: "0px",
                          padding: "0px",
                          marginTop: "10px",
                        }}
                      >
                        IOT
                      </h3>
                    </div>
                  </div>
                  <div
                    class="flip-card-back"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <p>
                      The internet of things is a system of interrelated
                      computing devices, mechanical and digital machines,
                      objects, animals or people that are provided with unique
                      identifiers (UIDs) and the ability to transfer data over a
                      network
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div
                    class="flip-card-front"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FaUserGraduate
                        style={{
                          color: "white",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                      <h3
                        style={{
                          color: "white",
                          margin: "0px",
                          padding: "0px",
                          marginTop: "10px",
                        }}
                      >
                        Web development
                      </h3>
                    </div>
                  </div>
                  <div
                    class="flip-card-back"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <p>
                      Web development is the work involved in developing a
                      website for the Internet or an intranet Web development
                      can range from developing a simple single static page of
                      plain text to complex web applications, electronic
                      businesses, and social network services.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div
                    class="flip-card-front"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FaUserGraduate
                        style={{
                          color: "white",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                      <h3
                        style={{
                          color: "white",
                          margin: "0px",
                          padding: "0px",
                          marginTop: "10px",
                        }}
                      >
                        App development
                      </h3>
                    </div>
                  </div>
                  <div
                    class="flip-card-back"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <p>
                      App development is the process in which developers create
                      an application to be used on smartphones, tablets and
                      other mobile devices. While app development sometimes
                      involves creating a web-based app or a desktop version of
                      the app
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </center>
    </div>
  );
}

export default CategoryHome;
