<template v-if="moviesIncomplete">
  <ListItem
    v-for="movie in moviesIncomplete"
    :key="movie.imdbId"
    :imdbId="movie.imdbId"
    :id="movie.id"
    :value="movie.title"
  ></ListItem>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useMoviesCollection } from "@/firebase";
import ListItem from "@/components/ListItem.vue";

export default defineComponent({
  name: "Complete",
  components: {
    ListItem
  },
  setup() {
    const moviesCollection = useMoviesCollection();
    const { movies } = moviesCollection;
    const moviesIncomplete = computed(() =>
      movies.value.filter(movie => !movie.complete)
    );
    return {
      moviesIncomplete
    };
  }
});
</script>

<style scoped lang="scss"></style>
