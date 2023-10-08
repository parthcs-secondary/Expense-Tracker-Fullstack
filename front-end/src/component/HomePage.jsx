import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()
  const JwtToken = JSON.parse(localStorage.getItem("JWT"));
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/');
    
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Expense Tracker</span>
      {!JwtToken && <Link to="/login">Login</Link>}
      {JwtToken && <button onclick={handleLogout}>logout</button>}
      {!JwtToken && <Link to="/register">Register</Link>}
      <Link to="/expense-form">Handle Expenses</Link>
      <Link to="/show-expenses">View Expenses</Link>
    </div>
  );
};

export default HomePage;
