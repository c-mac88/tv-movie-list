import { ref, Ref, computed } from "vue";
import _ from "lodash";
import OmdbRepository, { SearchResult, Movie } from "@/api/omdb";

export interface State {
  loading: boolean;
  movie?: Movie;
  searchResults: SearchResult[];
}

const state: Ref<State> = ref({
  loading: false,
  movie: undefined,
  searchResults: []
});

export function useOmdb() {
  function search(searchTerm: string) {
    state.value.loading = true;
    OmdbRepository.search(searchTerm).then(response => {
      state.value.searchResults = _.uniqBy(response.data.Search, "imdbID");
    });
    state.value.loading = false;
  }

  function getByImdbId(id: string) {
    state.value.loading = true;
    OmdbRepository.getByImdbId(id).then(response => {
      state.value.movie = response.data;
    });
    state.value.loading = false;
  }

  function clearSearchResults() {
    state.value.searchResults = [];
    state.value.movie = undefined;
  }

  return {
    loading: computed(() => state.value.loading),
    movie: computed(() => state.value.movie),
    searchResults: computed(() => state.value.searchResults),
    search,
    getByImdbId,
    clearSearchResults
  };
}
