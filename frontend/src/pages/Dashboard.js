// Dashboard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';  // Adjust the path accordingly
import LogoutButton from 'C:/Users/ASHMITH/Desktop/full stack/frontend/src/pages/LogoutButton.js';  // Adjust the path accordingly

const Dashboard = () => {
  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (!token) {
      navigate("*");
    }
  };

  useEffect(() => {
    userValid();
  }, []);

  const handleOpenCVButtonClick = () => {
    console.log("OpenCV button clicked");
    navigate("/opencv");
  };

  const handleHaarCascadeButtonClick = () => {
    console.log("Haar Cascade button clicked");
    navigate("/haarcascade");
  };

  const handleMediaPipeButtonClick = () => {
    console.log("MediaPipe button clicked");
    navigate("/mediapipe");
  };

  const handleDeepLearningButtonClick = () => {
    console.log("Deep Learning button clicked");
    navigate("/Home");
  };


  const handleDeep2ButtonClick = () => {
    console.log("Deep 2 button clicked");
    navigate("/Deep2");
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1 className="dashboard-header">VIDEO GESTURE</h1>
        <LogoutButton />
      </div>
      <div className="button-container">
        <button onClick={handleOpenCVButtonClick}>OpenCV</button>
        <button onClick={handleHaarCascadeButtonClick}>Haar Cascade</button>
        <button onClick={handleMediaPipeButtonClick}>MediaPipe</button>
        <button onClick={handleDeepLearningButtonClick}>Deep Learning</button>
        <button onClick={handleDeep2ButtonClick}>Deep 2</button>
      </div>
    </div>
  );
};

export default Dashboard;
