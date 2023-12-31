export const getUserAuthToken = () => {
  return localStorage.getItem("token");
};

export const getUserEmail = () => {
  return localStorage.getItem("email");
};

export const url = "http://localhost:2025";
