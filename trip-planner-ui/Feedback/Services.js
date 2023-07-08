import axios from "axios";
import { API_URL } from "../Common/Constants";

export const getFeedback = (params) =>
  axios.get(`${API_URL}/feedback`, { params });

export const getAllFeedbacks = () => axios.get(`${API_URL}/all-feedbacks`);

export const saveFeedback = (data) => axios.post(`${API_URL}/feedback`, data);

export const getCategories = () => axios.get(`${API_URL}/category`);
