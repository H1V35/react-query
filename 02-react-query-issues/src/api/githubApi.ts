import axios from "axios";

const API_URL = "https://api.github.com/repos/facebook/react";

export const githubApi = axios.create({
  baseURL: API_URL,
  headers: {
    // Authorization:
    //   "Bearer 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",
  },
});
