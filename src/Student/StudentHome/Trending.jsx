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
              You&#39;re stuck at home but your ideas doesn&#39;t have to be. Write some
              lines of code!
            </div>
            <div className="abtcontent">
              With over 200 participants from numerous colleges, the hackathon
              is a gathering where individual programmers collaborate their
              codes to make industry-grade projects.
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
                  src="https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681__480.jpg"
                  alt="Carousel 1"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681__480.jpg"
                  alt="Carousel 2"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681__480.jpg"
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
