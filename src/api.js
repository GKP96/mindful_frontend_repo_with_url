import axios from "axios";

const url = "http://localhost:2025"
export const getUsers = async()=>{
    const data =  await axios.get(`${url}/users`);
    return data.data;
}

export const addUser = async(data)=>{
   return await axios.post(`${url}/users`, data);
}

export const deleteUser = async(data)=>{
    return await axios.delete(`${url}/users/${data}`);
}

export const updateUser = async(email,data)=>{
    return await axios.put(`${url}/users/${email}`, data);
}
