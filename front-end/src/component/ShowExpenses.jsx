import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ShowExpenses = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [limit] = useState(10);
  useEffect(() => {
    axios
      .get(
        `http://192.168.1.5:8081/api/expense/all-expenses?page=${page}&pageSize=${limit}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, [page, limit]);
  return (
    <div class='m-1'>
      {data.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <div>
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <td scope="col">Expense ID</td>
                <td scope="col">Expense Name</td>
                <td scope="col">Expense Category</td>
                <td scope="col">Expense Amount</td>
              </tr>
            </thead>
            <tbody>

            {data.map((item, index) => {
              return (
                <tr>
                  <th scope="row"> {item.id}</th>
                  <td>{item.expenseName}</td>
                  <td>{item.expenseCategory.toLowerCase()}</td>
                  <td>{item.expenseAmount}</td>
                </tr>
              );
            })}
            </tbody>
          </table>
          {/* Pagination  */}
          <button class="m-2 btn btn-outline-success" onClick={() => setPage(page - 1)}>Previous</button>
          <button class="m-2 btn btn-outline-success" onClick={() => setPage(page + 1)}>Next</button>
        </div>
      )}
    </div>
  );
};

export default ShowExpenses;
