import React from "react";
import CategoryHome from "./CategoryHome";
import FeaturesApp from "./FeaturesApp";
import Trending from './Trending'
import Hero from "./Hero";
import Publicity from "./Publicity";

const StudentHome = () => {
  return (
    <>
      <Hero />
      <FeaturesApp />
      <Trending/>
      <CategoryHome />
      <Publicity />
    </>
  );
};

export default StudentHome;
