import Login from './pages/login/login.js';
import Signup from './pages/signup/signup.js';
import ForgetPassword from './pages/Forget_Password/ForgetPassword.js'
import Home from './Components/Home/HomePage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="h-full min-h-screen">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="forget_password" element={<ForgetPassword/>} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
