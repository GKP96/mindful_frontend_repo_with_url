// AddUser.js

import React, { useState } from "react";
import { addUser } from "../api";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneno: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    await addUser(userData);
    navigate("/");
  };

  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8 ">
      <form
        className="max-w-md mx-auto p-5 bg-slate-50 border rounded-sm shad"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Username:
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone:
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            name="phoneno"
            value={userData.phoneno}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
