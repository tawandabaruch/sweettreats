import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/Landing";
import SignUpForm from "./pages/register/SignUp";
import SignInForm from "./pages/signin/SignIn";
import AdminDashboard from "./pages/admin/admindashboard";
import ContactForm from "./pages/contactus/Contact-Us";
import About from "./pages/aboutus/AboutUs";


function App() {
  return (
    <div>
        <Routes>
      <Route path="/" element={<SignUpForm/>} />
      <Route path="signup" element={<SignUpForm/>} />
       <Route path="signin" element={<SignInForm/>} />
       <Route path="landing" element={<LandingPage/>} />
       <Route path="admin" element={<AdminDashboard/>} />
       <Route path="contact" element={<ContactForm/>} />
       <Route path="about" element={<About/>} />
        </Routes>
    </div>
  );
}

export default App;
