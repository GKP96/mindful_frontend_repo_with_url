import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../utils/common";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      let data = { email, password };
      const loginDetails = await axios.post(`${url}/signup/login`, data);
      console.log(
        "this is success  ",
        loginDetails.data.sucess + "this is token ",
        loginDetails.data.token
      );
      if (!loginDetails.data.success) {
        toast.error("Wrong credentials!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        console.log(
          "isme to arr rha hai aur ye login details hai " +
            loginDetails.data.token
        );
        localStorage.setItem("email", email);
        localStorage.setItem("token", loginDetails.data.token);
        window.location.reload();
      }
    } catch (e) {
      toast.error("Internal server error !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  return (
    <>
      <ToastContainer className="w-32 h-12 absolute right-0" />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className=" flex justify-between">
            <button
              type="button"
              onClick={handleLogin}
              className="bg-blue-500 text-white p-2 rounded-md mx-10 px-6 hover:bg-blue-600"
            >
              Login
            </button>
            <Link
              to="/signup"
              className="underline mx-auto text-black p-2 rounded-md hover:scale-105"
            >
              Signup
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
