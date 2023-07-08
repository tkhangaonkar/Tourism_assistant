import axios from "axios";
import { API_URL } from "../Common/Constants";

export const registerUser = async (data) => {
  return axios.post(`${API_URL}/register`, data);
};

export const loginUser = async (data) => {
  return axios.post(`${API_URL}/login`, data);
};
