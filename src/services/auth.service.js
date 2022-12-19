import axios from "axios";

const API_URL = "http://localhost:3000/user/";

const register = (name, email, password, type) => {
  return axios.post(API_URL + "sign-up", {
    name,
    email,
    password,
    type
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};