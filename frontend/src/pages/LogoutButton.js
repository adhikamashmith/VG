// LogoutButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear authentication token, reset user state)
    // Redirect to the login page after logout
    localStorage.removeItem("userdbtoken");
    navigate('/');
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
