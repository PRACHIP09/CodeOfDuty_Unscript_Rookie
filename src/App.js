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
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/signin">
            <Signup />
          </Route>
          <Route path="/homeStudent">
            <Navbar />
            <StudentHome />
            {/* <ContactUs /> */}
            {/* <Footer /> */}
          </Route>
          <Route path="/studentCourses">
            <Navbar />
            <CourseLayout />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/teacher">
            <TeacherHomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
