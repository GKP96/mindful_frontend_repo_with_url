import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const userImage =
  "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg";
const UserCard = ({ gau }) => {
  const email = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  useEffect(() => {
    const findDetails = async () => {
      const data = await axios.get(`http://localhost:2025/users/${email.email}`);
      setUser(data.data);
    };
  
    findDetails();
  }, [email.email]);
  

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-5">
      <img
        className="w-full h-48 object-cover"
        src={userImage}
        alt={`${user.name}'s avatar`}
      />
      <div className="px-6 py-4 flex flex-col items-center ">
        <div className="font-bold text-xl mb-2">{user.name}</div>
        <p className="text-gray-700 text-base">{user.email}</p>
        <p className="text-gray-700 text-base">{user.phoneno}</p>
      </div>
      <div className="w-full flex justify-center">
        <button
          className="btn bg-blue-400 text-white hover:bg-blue-500 p-2 rounded-md"
          onClick={() => navigate("/")}
        >
          {" "}
          UsersList
        </button>
      </div>
    </div>
  );
};

export default UserCard;
