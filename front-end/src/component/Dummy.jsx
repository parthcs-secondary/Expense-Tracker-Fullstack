import React, { useState } from "react";
import axios from "axios";

const Dummy = () => {
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
    axios
      .put("http://192.168.1.5:8081/api/expense/update-expense", formData)
      .then((response) => {
        console.log("Data updated successfully", response.data);
      })
      .catch((error) => {
        console.error("Error updating data", error);
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
    <div>
      <form class="row g-3">
        <div class="col-md-6">
          <label class="form-label">ID</label>
          <input
            class="form-control"
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </div>

        <div class="col-md-6">
          <label class="form-label">Expense Name</label>
          <input
            class="form-control"
            type="text"
            name="expenseName"
            value={formData.expenseName}
            onChange={handleChange}
          />
        </div>

        <div class="col-12">
          <label class="form-label">Expense Amount</label>
          <input
            type="text"
            name="expenseAmount"
            value={formData.expenseAmount}
            onChange={handleChange}
            class="form-control"
            placeholder="0.00"
          />
        </div>

        <div class="col-md-4">
          <label  class="form-label">
            Expense Category
          </label>
          <select
            name="expenseCategory"
            value={formData.expenseCategory}
            onChange={handleChange}
            class="form-select"
          >
            <option>Choose...</option>
            <option value="ENTERTAINMENT">Entertainment</option>
            <option value="GROCERY">Grocery</option>
            <option value="RESTAURANT">Restaurant</option>
            <option value="UTILITY">Utility</option>
            <option value="MISCELLANEOUS">Miscellaneous</option>
          </select>
        </div>

        <div class="col-12">
          <button type="button" class="m-2 btn btn-outline-success" onClick={handleAdd}>
            Add Data
          </button>
          <button type="button" class="m-2 btn btn-outline-warning" onClick={handleUpdate}>
            Update Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dummy;
