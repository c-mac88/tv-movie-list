<template>
  <div class="actions">
    <button class="primary" @click="createOrUpdateMovieRecord(true, false)">
      Seen it
    </button>
    <button class="primary" @click="createOrUpdateMovieRecord(false, false)">
      Haven't seen it
    </button>
    <button class="primary" @click="createOrUpdateMovieRecord(false, true)">
      Never see it
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useOmdb } from "@/store";
import { useMoviesCollection } from "@/firebase";

export default defineComponent({
  name: "Actions",
  setup() {
    const omdbStore = useOmdb();
    const {
      getMovie,
      createMovie,
      updateMovie,
      movieRecord,
      getNewMovieRequest
    } = useMoviesCollection();

    const movie = omdbStore.movie;
    const imdbID = movie.value ? movie.value.imdbID : "";

    onMounted(async () => await getMovie(imdbID));

    const createOrUpdateMovieRecord = (complete: boolean, never: boolean) => {
      if (movieRecord.value) {
        updateMovie(movieRecord.value, complete, never);
      } else {
        const newMovieRequest = getNewMovieRequest(movie.value);
        createMovie(newMovieRequest, complete, never);
      }
    };

    return {
      movie,
      movieRecord,
      createOrUpdateMovieRecord
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
