import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
const url = "http://localhost:2025";
const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [howDidYouHear, setHowDidYouHear] = useState([]);
  const [city, setCity] = useState("Mumbai");
  const [state, setState] = useState("");
  const [stateOptions] = useState([
    { value: "Gujarat", label: "Gujarat" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Karnataka", label: "Karnataka" },
  ]);
  const navigate = useNavigate();
  const handleSave = async () => {
    try {
      const data1 = {
        name,
        email,
        password,
        phone,
        gender,
        howDidYouHear,
        city,
        state,
      };
      const response = await axios.post(`${url}/signup`, data1);
      console.log("this is response " + response.data.success);
      if (response.data.success) {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        navigate("/singnup");
      } else {
        toast.error("email already exits  ", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      console.log(response);
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
      <ToastContainer />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
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
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-600"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Gender
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3">
            <label className="mr-4">
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="mr-4">
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />
              <span className="ml-2">Female</span>
            </label>
            <label>
              <input
                type="radio"
                value="others"
                checked={gender === "others"}
                onChange={() => setGender("others")}
              />
              <span className="ml-2">Others</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            How did you hear about this?
          </label>
          <div className="grid grid-cols-2 sm: grid-col-4">
            <label className="mr-4">
              <input
                type="checkbox"
                value="LinkedIn"
                checked={howDidYouHear.includes("LinkedIn")}
                onChange={() =>
                  setHowDidYouHear((prev) =>
                    prev.includes("LinkedIn")
                      ? prev.filter((item) => item !== "LinkedIn")
                      : [...prev, "LinkedIn"]
                  )
                }
              />
              <span className="ml-2">LinkedIn</span>
            </label>
            <label className="mr-4">
              <input
                type="checkbox"
                value="Friends"
                checked={howDidYouHear.includes("Friends")}
                onChange={() =>
                  setHowDidYouHear((prev) =>
                    prev.includes("Friends")
                      ? prev.filter((item) => item !== "Friends")
                      : [...prev, "Friends"]
                  )
                }
              />
              <span className="ml-2">Friends</span>
            </label>
            <label className="mr-4">
              <input
                type="checkbox"
                value="JobPortal"
                checked={howDidYouHear.includes("JobPortal")}
                onChange={() =>
                  setHowDidYouHear((prev) =>
                    prev.includes("JobPortal")
                      ? prev.filter((item) => item !== "JobPortal")
                      : [...prev, "JobPortal"]
                  )
                }
              />
              <span className="ml-2">Job Portal</span>
            </label>
            <label>
              <input
                type="checkbox"
                value="Others"
                checked={howDidYouHear.includes("Others")}
                onChange={() =>
                  setHowDidYouHear((prev) =>
                    prev.includes("Others")
                      ? prev.filter((item) => item !== "Others")
                      : [...prev, "Others"]
                  )
                }
              />
              <span className="ml-2">Others</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-600"
          >
            City
          </label>
          <select
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>
        </div>
        {/* <div className="mb-4">
        <label
          htmlFor="state"
          className="block text-sm font-medium text-gray-600"
        >
          State
        </label>
        <input
          type="text"
          id="state"
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div> */}
        <div className="mb-4">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-600"
          >
            State
          </label>
          <Select
            id="state"
            name="state"
            options={stateOptions}
            value={{ value: state, label: state }}
            onChange={(selectedOption) => setState(selectedOption.value)}
            className="mt-1"
          />
        </div>
        <div className=" flex justify-between">
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 text-white p-2 rounded-md mx-10 px-6 hover:bg-blue-600"
          >
            Save
          </button>
          <Link
            to="/login"
            className="underline mx-auto text-black p-2 rounded-md hover:scale-105"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
