import axios from "axios";
import { ApiUrl } from "../constants/apiurl.constant";

/**
 * Login user
 * POST /api/v1/login
 */
const login = async (email, password) => {
  const response = await axios.post(`${ApiUrl}/login`, { email, password });
  return response.data;
};

/**
 * Get the currently logged-in user from localStorage
 * @returns {{ id, full_name, email, role } | null}
 */
const getUserByLocalStorage = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

/**
 * Clear all auth data from localStorage (logout)
 */
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const authService = {
  login,
  getUserByLocalStorage,
  logout,
};

export default authService;
