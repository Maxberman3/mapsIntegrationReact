import axios from "axios";

const baseUrl = "http://localhost:8000/search";

const get = async (placeName, radius) => {
  const config = {
    params: {
      placeName,
      radius
    }
  };
  const response = await axios.get(baseUrl, config);
  return response.data;
};

export default {get};
