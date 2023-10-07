import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <span>Expense Tracker</span>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/expense-form">Handle Expenses</Link>
        <Link to="/show-expenses">View Expenses</Link>


    </div>
  )
}

export default HomePage