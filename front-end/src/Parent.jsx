// Packages
import React from "react";
import { Route, Routes } from "react-router-dom";
//Pages
import LoginPage from "./component/LoginPage";
import RegisterUser from "./component/RegisterUser";
import AddExpenseForm from "./component/AddExpenseForm";
import ShowExpenses from "./component/ShowExpenses";
import AddExpenses from "./component/AddExpenses";
import HomePage from "./component/HomePage";

// Function/component code
const Parent = () => {
  return (
    <div>
      {/* <LoginPage />
      <div className="upper-part">
        <span className="title-expense">Expense Tracker</span>
        <RegisterUser />
        <AddExpenses /> //not used
        <AddExpenseForm />
      </div>
      <ShowExpenses /> */}

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterUser/>} />
        <Route path="/expense-form" element={<AddExpenseForm/>} />
        <Route path="/show-expenses" element={<ShowExpenses/>} />
      </Routes>
    </div>
  );
};

export default Parent;
