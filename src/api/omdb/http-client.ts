import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://www.omdbapi.com"
});

export default httpClient;
