import axios from "axios";

const API_URL = "https://api.github.com/repos/facebook/react";
const TOKEN = import.meta.env.VITE_GITHUB_BEARER_TOKEN;

export const githubApi = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
