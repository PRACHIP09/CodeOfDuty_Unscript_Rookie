import "./App.css";
import Signup from "./Accounts/Signup";
import Login from "./Accounts/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Accounts/Navbar";
import ContactUs from "./Extra/ContactUS";
import Footer from "./Extra/Footer";
import StudentHome from "./Student/StudentHome/StudentHome";
import Admin from "./Accounts/Admin";
import TeacherHomePage from "./Teacher/TeacherHomePage";
import CourseLayout from "./Student/StudentCourses/CourseLayout";
import Chatbot from "./Extra/Chatbot";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signin">
            <Signup />
          </Route>
          <Route path="/profile"></Route>
          <Route path="/home">
            <Navbar />
            <StudentHome />
            <Footer />
          </Route>
          <Route path="/courses">
            <Navbar />
            <CourseLayout />
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
          <Route path='/chat'>
            <Chatbot/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
