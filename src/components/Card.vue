<template>
  <div class="card">
    {{ searchResult.Title }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { SearchResult } from "@/api/omdb/types";

export default defineComponent({
  name: "Card",
  props: {
    searchResult: {
      type: Object as PropType<SearchResult>,
      default: (): SearchResult => ({
        Title: "Not Available",
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
.card {
  display: flex;
  align-items: center;
  justify-content: flex;
}
</style>
