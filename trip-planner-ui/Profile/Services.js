import axios from "axios";
import { API_URL } from "../Common/Constants";

export const updateUserPicture = async (data) => {
  return axios.put(`${API_URL}/profile/picture`, data);
};

export const updateUserDetails = async (data) => {
  return axios.put(`${API_URL}/details`, data);
};

export const resetUserPassword = async (data) => {
  return axios.put(`${API_URL}/profile/reset`, data);
};

export const getCategories = () => axios.get(`${API_URL}/category`);
