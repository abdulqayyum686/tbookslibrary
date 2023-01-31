import axios from "axios";
export const fetchData = async (url) => {
  return await axios.get(url);
};
export const postData = async (url, data) => {
  return await axios.post(url, data);
};
export const updateData = async (url,data) => {
  return await axios.put(url, data);
};
export const deleteData = async (url) => {
  return await axios.delete(url);
};
