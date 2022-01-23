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
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  // const handlePaymentSuccess = async (response) => {
  //   try {
  //     let bodyData = new FormData();
  
  //     // we will send the response we've got from razorpay to the backend to validate the payment
  //     bodyData.append("response", JSON.stringify(response));
  
  //     await axios({
  //       url: `${server}/razorpay/payment/success/`,
  //       method: "POST",
  //       data: bodyData,
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //         .then((res) => {
  //           console.log("Everything is OK!");
  //           setName("abc");
  //           setAmount("500");
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //   } catch (error) {
  //     console.log(console.error());
  //   }
  // };
  
  // // this will load a script tag which will open up Razorpay payment card to make transactions
  // const loadScript = () => {
  //   const script = document.createElement("script");
  //   script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //   document.body.appendChild(script);
  // };
  
  // const showRazorpay = async () => {
  //   const res = await loadScript();
  //   let bodyData = new FormData();
  
  //   // we will pass the amount and product name to the backend using form data
  //   bodyData.append("amount", amount.toString());
  //   bodyData.append("name", name);
  
  //   const data = await axios({
  //     url: `${server}/razorpay/pay/`,
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     data: bodyData,
  //   }).then((res) => {
  //     return res;
  //   });
  
  //   // console.log(data)
  
  //   // in data we will receive an object from the backend with the information about the payment
  //   //that has been made by the user
  
  //   var options = {
  //     key_id: `** your razorpay public key id **`,
  //     key_secret: `** your razorpay secret key id **`,
  //     amount: data.data.payment.amount,
  //     currency: "INR",
  //     name: "Org. Name",
  //     description: "Test teansaction",
  //     image: "", // add image url
  //     order_id: data.data.payment.id,
  //     handler: function (response) {
  //       // we will handle success by calling handlePayment method and
  //       // will pass the response that we've got from razorpay
  //       handlePaymentSuccess(response);
  //     },
  //     prefill: {
  //       name: "Bhumika",
  //       email: "bhumikamange13@gmail.com",
  //       contact: "7666499303",
  //     },
  //     notes: {
  //       address: "Razorpay Corporate Office",
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //   };
  
  //   var rzp1 = new window.Razorpay(options);
  //   rzp1.open();
  // };
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
          <Route path="/chat">
            <Chatbot />
          </Route>
          <Route path="/faqs">
            <Faqs/>
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
