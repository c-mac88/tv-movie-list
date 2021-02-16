import axios from "axios";

interface AuthHeaders {
  Authorization: string | null;
  manufacturerId: number | null;
}

export function createAuthHeaders(
  accessToken: string | null,
  manufacturerId: string | null
): AuthHeaders {
  return {
    Authorization: accessToken,
    manufacturerId: Number(manufacturerId)
  };
}

const httpClient = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${process.env.VUE_APP_OMDB_API_KEY}`
});

export default httpClient;
