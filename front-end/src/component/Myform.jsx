import React, { useState } from "react";
import axios from "axios";

//Currently not in use
function MyForm() {
  const [formData, setFormData] = useState({
    id: "",
    expenseName: "",
    expenseCategory: "",
    expenseAmount: "",
    attributes: [
      {
        attribute_name: "to",
        attribute_value: "test_attribute_value",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.put('http://192.168.1.5:8081/api/expense/update-expense', formData)
      .then((response) => {
        console.log('Data updated successfully', response.data);
      
      })
      .catch((error) => {
        console.error('Error updating data', error);
      });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(formData);
      axios
        .post("http://192.168.1.5:8081/api/expense/add", formData)
        .then((response) => {
          console.log("Data sent successfully", response.data);
        })
        .catch((error) => {
          console.error("Error sending data", error);
        });
    };

  return (
    <form>
      <div>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Expense Name:</label>
        <input
          type="text"
          name="expenseName"
          value={formData.expenseName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Expense Category:</label>
        <select
          name="expenseCategory"
          value={formData.expenseCategory}
          onChange={handleChange}
        >
          <option value="">Select expense category</option>
          <option value="ENTERTAINMENT">Entertainment</option>
          <option value="GROCERY">Grocery</option>
          <option value="RESTAURANT">Restaurant</option>
          <option value="UTILITY">Utility</option>
          <option value="MISCELLANEOUS">Miscellaneous</option>
        </select>
      </div>
      <div>
        <label>Expense Amount:</label>
        <input
          type="text"
          name="expenseAmount"
          value={formData.expenseAmount}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleAdd}>Add Data</button>
      <button type="button" onClick={handleUpdate}>Update Data</button>
    </form>
  );
}

export default MyForm;
