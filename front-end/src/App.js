import React, { useState } from "react";


// Solve for CORS: add in package.json => "proxy": "http://192.168.1.5:8081"
const App = () => {
  const [displayData, setDisplayData] = useState(["No Data"]);

  function PostData() {
    // let data = fetch("search?q=proxy", {
    fetch("http://192.168.1.5:8081/api/expense/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "141",
        expenseName: "mac-react",
        expenseCategory: "ENTERTAINMENT",
        expenseAmount: 3020,
        attributes: [
          {
            attribute_name: "TOoo",
            attribute_value: "dummy",
          },
        ],
      }),
    });
  }
  function fetchData() {
    fetch("http://192.168.1.5:8081/api/expense/all-expenses", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setDisplayData(json);
        console.log(json);
      });
    // const result = data.json();
    // setData(result)
    // console.log(result)
    // console.log("Hello", JSON.stringify(result, null, 5))
  }

  return (
    <div>
      <div>
        <i>
          <b>
            Expense Tracker
            </b>
            </i>
      </div>
      <button onClick={fetchData}>Fetch something</button>
      <button onClick={PostData}>Post something</button>
      <div>
        {displayData.map((data, index) => {
          return (
            <div key={index}
              style={{ border: "solid 1px red", display: "flex", gap: "3rem" }}
            >
              <p >Expense Name: {data.expenseName}</p>
              <p>Expense Category: {data.expenseCategory}</p>
              <p>Expense Category: {data.expenseCategory}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
