<template>
  <router-link :to="`/movies/${searchResult.imdbID}`" class="search-result">
    <div>{{ searchResult.Title }}</div>
    <div>{{ searchResult.Year }}</div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { SearchResult } from "@/api/omdb/types";

export default defineComponent({
  name: "SearchResult",
  props: {
    searchResult: {
      type: Object as PropType<SearchResult>,
      default: (): SearchResult => ({
        Title: "No Results",
        Year: "1999",
        imdbID: "0",
        Type: "movie",
        Poster: ""
      })
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search-result {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
}
</style>
