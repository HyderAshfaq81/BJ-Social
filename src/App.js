import Login from './pages/login/login.js';
import Signup from './pages/signup/signup.js';
import ForgetPassword from './pages/Forget_Password/ForgetPassword.js'
import Home from './Components/Home/HomePage'
import FindMatches from './pages/FindMatches/FindMatches.js';
import Payment from './Components/Payment/Payment.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Profile from './pages/settings/Profile.js';
import Testimonail from './pages/Testimonials/Testimonail.js';
import LandingPage from './pages/Landing/LandingPage.js';

function App() {
  return (
    <div className="h-full min-h-screen">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forget_password" element={<ForgetPassword/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/find_matches" element={<FindMatches />} />
        <Route path="/testimonail" element={<Testimonail />} />
        <Route path="/pricing" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
