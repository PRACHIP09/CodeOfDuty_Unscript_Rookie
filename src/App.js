import "./App.css";
import { useState } from "react";
import Signup from "./Accounts/Signup";
import Login from "./Accounts/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Accounts/Navbar";
// import { server } from "./server";
import ContactUs from "./Extra/ContactUS";
import Footer from "./Extra/Footer";
import StudentHome from "./Student/StudentHome/StudentHome";
import Admin from "./Accounts/Admin";
import TeacherHomePage from "./Teacher/TeacherHomePage";
import CourseLayout from "./Student/StudentCourses/CourseLayout";
import StudentProfile from "./Student/StudentProfile";
import Chatbot from "./Extra/Chatbot";
import DomainCourse from "./Student/StudentCourses/DomainCourse";
import Verification from "./Accounts/Verification";
import ForgotPassword from "./Accounts/ForgotPassword";
import axios from 'axios'
import Faqs from "./Student/Faqs";
function App() {
 
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" >
            <Login />
          </Route>
          <Route exact path="/login" >
            <Login />
          </Route>
          <Route path="/signin">
            <Signup />
          </Route>
          <Route path="/profile">
          <StudentProfile/>
          </Route>
          <Route path="/home">
            <Navbar />
            <StudentHome />
            <Footer />
          </Route>
          <Route exact path="/courses">
            <Navbar />
            <CourseLayout />
          </Route>
          <Route path={"/courses/:type"}>
            <Navbar />
            <DomainCourse />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/teacher">
            <TeacherHomePage />
          </Route>
          <Route path="/contactus">
            <Navbar />
            <ContactUs />
          </Route>
          <Route path="/faqs">
            <Faqs />
          </Route>
          {/* <Route path={`/account/email-verify/:token`} component={Verification}/> */}
          <Route exact path="/account/email-verify/user-id=:token">
            <Verification />
          </Route>
          <Route exact path="/account/password-reset/:uidb64/:token/">
            <ForgotPassword />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
