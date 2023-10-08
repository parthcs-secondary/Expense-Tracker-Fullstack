import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [RegisterFormData, setRegisterFormData] = useState({
    username: "",
    password: "",
    emailId: "",
    mobileNo: "",
    authorities: "ROLE_USER",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({ ...RegisterFormData, [name]: value });
  };

  //   const handleUpdate = (e) => {
  //     e.preventDefault();
  //     console.log(RegisterFormData);
  //     axios.post('http://192.168.1.5:8081/api/expense/update-expense', RegisterFormData)
  //       .then((response) => {
  //         console.log('User Data Sent', response.data);

  //       })
  //       .catch((error) => {
  //         console.error('Error updating user', error);
  //       });
  //   };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(RegisterFormData);
    axios
      .post("http://192.168.1.5:8081/auth/register", RegisterFormData)
      .then((response) => {
        console.log("User data sent successfully", response.data);
      })
      .catch((error) => {
        console.error("Error sending user data", error);
      });

    navigate("/login");
  };

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={RegisterFormData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>password:</label>
        <input
          type="password"
          name="password"
          value={RegisterFormData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={RegisterFormData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Mobile Number:</label>
        <input
          type="number"
          name="mobileNo"
          value={RegisterFormData.mobileNo}
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={handleAdd}>
        Add Data
      </button>
      {/* <button type="button" onClick={handleUpdate}>Update Data</button> */}
    </form>
  );
};

export default RegisterUser;
