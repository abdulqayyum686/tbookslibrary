import axios from "axios";
export const fetchData = async (url) => {
  return await axios.get(url);
};
export const postData = async (url, data) => {
  return await axios.post(url, data);
};
export const updateData = async (url,data) => {
  console.log();
  return await axios.put("http://localhost:3000/api/user/books/63d641b75e09e252d0d44346", data);
};
export const deleteData = async (url) => {
  return await axios.delete(url);
};
