import React, { useState } from "react";
import MyForm from "./component/Myform";
import "./App.css";
import ShowExpenses from "./component/ShowExpenses";
import Dummy from "./component/Dummy";
// Solve for CORS: add in package.json => "proxy": "http://192.168.1.5:8081"
const App = () => {
  return (
    <div className="app-container">
      <div className="upper-part">
        <span className="title-expense">Expense Tracker</span>
        {/* <MyForm /> */}
        <Dummy />
      </div>
      <ShowExpenses />
    </div>
  );
};

export default App;
