import React from "react";
import CategoryHome from "./CategoryHome";
import FeaturesApp from "./FeaturesApp";
import Trending from "./Trending";
import Hero from "./Hero";
import Publicity from "./Publicity";
import { useEffect } from "react";
// import Notification from "./Notification";
import { Notifications } from 'react-push-notification';
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
     <Notifications position="top-right"/>
      <Hero />
      <FeaturesApp />
      <Trending />
      <CategoryHome />
      <Publicity />
      {/* <Notification/> */}
    </>
  );
};

export default StudentHome;
