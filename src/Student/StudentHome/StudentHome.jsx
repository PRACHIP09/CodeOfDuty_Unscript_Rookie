import React from "react";
import CategoryHome from "./CategoryHome";
import FeaturesApp from "./FeaturesApp";
import Trending from "./Trending";
import Hero from "./Hero";
import Publicity from "./Publicity";
import { useEffect } from "react";
const StudentHome = () => {
  // move page to top
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, []);
  return (
    <>
      <Hero />
      <FeaturesApp />
      <Trending />
      <CategoryHome />
      <Publicity />
    </>
  );
};

export default StudentHome;
