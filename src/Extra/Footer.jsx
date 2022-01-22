import React from "react";
import { Grid } from "@mui/material";
import { ImBooks } from "react-icons/im";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#f9c1b1",
        backgroundImage: "linear-gradient(315deg, #f9c1b1 0%, #fb8085 74%)",
      }}
    >
      <Grid container spacing={0}>
        <Grid item sm={4}>
          <p>
            <ImBooks
              style={{ fontSize: "6.7rem", transform: "translateY(30px)" }}
            />
          </p>
        </Grid>
        <Grid item sm={4}>
          <h1 style={{ fontSize: "2.3rem" }}>Get involved</h1>
          <h3>
            <Link style={{color:'black'}} to="/contactus">ContactUS</Link>
          </h3>
          <h3>
            <Link style={{color:'black'}}>Home</Link>
          </h3>
          <h3>
            <Link style={{color:'black'}}>FAQS</Link>
          </h3>
        </Grid>
        <Grid item sm={4}>
          <p style={{ fontSize: "3.5rem" }}>
            <a
              href="#insta"
              rel="noreferrer"
              target="_blank"
              style={{ padding: "6px", color: "black" }}
            >
              <BsInstagram />
            </a>
            {/* </li>
                <li> */}
            <a
              href="#facebook"
              rel="noreferrer"
              target="_blank"
              style={{ padding: "6px", color: "black" }}
            >
              <BsFacebook />
            </a>
            {/* </li>
                <li> */}
            <a
              href="#linkedin"
              rel="noreferrer"
              target="_blank"
              style={{ padding: "6px", color: "black" }}
            >
              <BsLinkedin />
            </a>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
