import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location.reload();
    setDropdownOpen(false); // Close the dropdown after logout
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-400 text-white shadow">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>

      <div className="relative">
        <button onClick={toggleDropdown} className="focus:outline-none ">
          <img
            src="https://placekitten.com/40/40"
            alt="User Icon"
            className="rounded-full h-8 w-8 cursor-pointer"
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border rounded shadow-md">
            <div className="p-2">
              <p className="text-gray-800">{localStorage.getItem("email")}</p>
            </div>
            <div className="p-2 border-t">
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
