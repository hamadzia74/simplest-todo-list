// import api from "../../../utils/api";

import authenticateUser from "../../../utils/authenticateUsers";

// Login user
// const login = async (userData) => {
//   const response = await api.post("/login", userData);

//   if (response.data) {
//     localStorage.setItem("user", JSON.stringify(response.data));
//   }

//   return response.data;
// };

// Static User Login
const login = async (userData) => {
  const findUser = authenticateUser(userData);
  if (findUser) {
    localStorage.setItem(
      "reia_user",
      JSON.stringify({
        email: findUser.email,
        role: findUser.role,
      })
    );
  } else {
    throw new Error("Invalid Email or Password!");
  }
  return {
    email: findUser.email,
    role: findUser.role,
  };
};

// Logout user
const logout = () => {
  localStorage.removeItem("reia_user");
};

const authService = {
  logout,
  login,
};

export default authService;
