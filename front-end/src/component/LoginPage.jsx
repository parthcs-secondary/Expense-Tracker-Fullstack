import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginFormData, setloginFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginFormData({ ...loginFormData, [name]: value });
  };

  //   const handleUpdate = (e) => {
  //     e.preventDefault();
  //     console.log(loginFormData);
  //     axios.post('http://192.168.1.5:8081/api/expense/update-expense', loginFormData)
  //       .then((response) => {
  //         console.log('User Data Sent', response.data);

  //       })
  //       .catch((error) => {
  //         console.error('Error updating user', error);
  //       });
  //   };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginFormData);
    axios
      .post("http://192.168.1.5:8081/auth/authenticate", loginFormData)
      .then((response) => {
        console.log("User data sent successfully", response.data);
        const JwtToken = response.data.jwtToken;
        localStorage.setItem("JWT", JSON.stringify(JwtToken));
      })
      .catch((error) => {
        console.error("Error sending user data", error);
      });

    // <Navigate to="/" />;
    navigate("/");
  };

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={loginFormData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>password:</label>
        <input
          type="password"
          name="password"
          value={loginFormData.password}
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      {/* <button type="button" onClick={handleUpdate}>Update Data</button> */}
    </form>
  );
};

export default LoginPage;
