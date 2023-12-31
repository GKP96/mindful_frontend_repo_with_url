// Dashboard.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../api";
import UserList from "../components/UserList";
import AddUser from "../components/AddUser";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [showAddUser, setShowAddUser] = useState(false);

  useEffect(() => {
    // Fetch users from local database or API on component mount
    const fetchData = async () => {
      const data = await getUsers();
      setFilteredUsers(data);
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const usersData = await getUsers(); // Assuming getUsers() is asynchronous
      if (Array.isArray(usersData)) {
        const filteredData = usersData.filter(
          (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.phoneno.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredUsers(filteredData);
      } else {
        console.error("Invalid data format returned by getUsers");
      }
    } catch (error) {
      console.error("Error fetching or filtering users:", error);
    }
  };

  const handleSort = () => {
    const sortedData = [...filteredUsers].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredUsers(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="container mx-auto p-8">
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
          placeholder="Search by username, email, or phone"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
        <button
          onClick={handleSort}
          className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>
      </div>
      <UserList users={filteredUsers} />
      <Link
        to="/add-user"
        className="block bg-green-500 w-32 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add User
      </Link>
      {showAddUser && <AddUser />}
    </div>
  );
};

export default Dashboard;
