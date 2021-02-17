import httpClient from "./http-client";
import { SearchResponse, Movie } from "./types";
const apikey = process.env.VUE_APP_OMDB_API_KEY || "387e7d1c";

async function search(searchTerm: string) {
  const endpoint = "/";
  const params = {
    apikey,
    s: searchTerm
  };
  return httpClient.get<SearchResponse>(endpoint, { params });
}

async function getByImdbId(imdbId: string) {
  const endpoint = "/";
  const params = {
    apikey,
    i: imdbId
  };
  return httpClient.get<Movie>(endpoint, { params });
}

export default {
  search,
  getByImdbId
};
