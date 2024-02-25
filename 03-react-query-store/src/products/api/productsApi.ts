import axios from "axios";

const API_URL = "http://localhost:3100";

const productsApi = axios.create({
  baseURL: API_URL,
});

export { productsApi };
