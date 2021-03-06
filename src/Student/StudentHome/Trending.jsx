import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import "./Loc.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Trending() {
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingTop: "70px",
        paddingBottom: "70px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          style={{ justifyContent: "center" }}
          className="abtgrid"
        >
          <Grid item sm={12} md={8}>
            <div className="abtheading">
              You&#39;re stuck at home but your ideas doesn&#39;t have to be. Do some
              amazing courses!
            </div>
            <div className="abtcontent">
              With over 200 participants from numerous colleges, the courses are
               a gathering where individual students collaborate their
              work to make industry-grade projects.
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} spacing={3} style={{width:"100%", height:"100%"}}>
            <Splide
              options={{
                rewind: true,
                gap: "1rem",
                autoplay : true,
              }}
            >
              <SplideSlide>
                <img
                  src="https://images.pexels.com/photos/3784316/pexels-photo-3784316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Carousel 1"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Carousel 2"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://images.pexels.com/photos/8325717/pexels-photo-8325717.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="Carousel 3"
                />
              </SplideSlide>
            </Splide>
            
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Trending;
