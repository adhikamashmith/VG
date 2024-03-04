// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Headers from './components/Headers';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Otp from './pages/Otp';
import Error from './pages/Error';
import OpenCV from './pages/opencv';
import Mediapipe from './pages/mediapipe';
import Haarcascade from './pages/haarcascade';
import Deep1 from './pages/Deep1';
import Deep2 from './pages/Deep2'
import Home from './pages/Home';
// import DeepLearningVideo from './pages/Ashmith'; // Adjust the import statement
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user/otp' element={<Otp />} />
        <Route path='/opencv' element={<OpenCV />} />
        <Route path='/mediapipe' element={<Mediapipe />} />
        <Route path='/haarcascade' element={<Haarcascade />} />
        <Route path='/Home' element={<Home />} />
        {/* Correct the route for Deep Learning Video */}
        <Route path='/Deep1' element={<Deep1 />} />
        <Route path='/Deep2' element={<Deep2 />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
