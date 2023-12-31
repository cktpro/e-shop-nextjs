import axios from "axios";
const endpoint = "https://cktdev.vercel.app";
const login = async (data) => {
  try {
   
    const result = await axios.post(
      "https://cktdev.vercel.app/auth/login/",
      data
    );

    localStorage.setItem("Access_Token", result.data.payload.token);
    localStorage.setItem("Refresh_Token", result.data.payload.refreshToken);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${result.data.payload.token}`;
  
    const profile = await getMe();
    return profile
  } catch (error) {
    return false;
  }
};
const logout = async () => {
  try {
    localStorage.removeItem("Access_Token");
    localStorage.removeItem("Refresh_Token");
    axios.defaults.headers.delete["Authorization"];
    return true;
  } catch (error) {
    return error;
  }
};
const getMe = async () => {
  try {
    const token = localStorage.getItem("Access_Token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get(`${endpoint}/auth/profile/`);
      return res.data.payload;
    }
    return false;
    // localStorage.removeItem("Access_Token");
    // localStorage.removeItem("Refresh_Token");
    // axios.defaults.headers.delete["Authorization"];
  } catch (error) {
    return error;
  }
};

export { login, logout, getMe };
