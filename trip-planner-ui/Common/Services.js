import axios from "axios";
import { getItem } from "./Store";
import { SMS_API, STORE_API_URL } from "./Constants";

export const getApiEndpoint = () =>
  axios.get(`http://myne.bucket.s3-website-us-east-1.amazonaws.com/api.txt`);

export const sendEmergencySMS = (numbers, message) =>
  axios.get(`${SMS_API}&numbers=${numbers?.join(",")}&message=${message}`);

export const updateUserLocation = async (data) => {
  const URL = await getItem(STORE_API_URL);
  return axios.put(`${URL}/location`, data);
};

export const sendEmergencyEmail = async (id) => {
  const API_URL = await getItem(STORE_API_URL);
  return axios.get(`${API_URL}/emergency?id=${id}`);
};
