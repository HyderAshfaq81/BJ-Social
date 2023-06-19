import Login from './pages/login/login.js';
import Signup from './pages/signup/signup.js';
import ForgetPassword from './pages/Forget_Password/ForgetPassword.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="h-full min-h-screen">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="forget_password" element={<ForgetPassword/>} />
      </Routes>
    </div>
  );
}

export default App;
