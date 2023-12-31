import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../api";
import { useNavigate } from "react-router-dom";
const UserList = ({ users }) => {
  const navigate = useNavigate();
  const handleDelete = async (email) => {
    deleteUser(email);
    console.log(`deleteUser`);
  };

  const handleUpdate = async (email) => {
    navigate(`/update-user/${email}`);
  };

  const handleDetails = (email) => {
    navigate(`/user-details/${email}`);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User List</h1>

      {users.length === 0 ? (
        <p className="text-gray-600">No Data Found</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user._id}
              className="bg-white rounded p-4 shadow-md flex items-center justify-between"
            >
              <div>
                <p className="text-xl font-bold">{user.name}</p>
                {/* <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">{user.phone}</p> */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <button
                  onClick={() => handleDelete(user.email)}
                  className="px-4 py-2 bg-red-500  m-1 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(user.email)}
                  className="px-4 py-2 bg-red-500 text-white rounded m-1 hover:bg-red-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDetails(user.email)}
                  className="px-4 py-2 bg-red-500 text-white m-1 rounded hover:bg-red-600"
                >
                  User Details
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
