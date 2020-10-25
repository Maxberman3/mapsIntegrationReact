import axios from "axios";

const baseUrl = "http://localhost:8000/details";

const get = async xid => {
  const response = await axios.get(`${baseUrl}/${xid}`);
  return response.data;
};

export default {get};
