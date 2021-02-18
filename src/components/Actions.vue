<template>
  <div class="actions">
    <button class="primary" @click="createOrUpdateMovieRecord(true, false)">
      Seen it
    </button>
    <button class="clear" @click="createOrUpdateMovieRecord(false, false)">
      Haven't seen it
    </button>
    <button class="dark" @click="createOrUpdateMovieRecord(false, true)">
      Never see it
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useOmdb } from "@/store";
import { useMoviesCollection } from "@/firebase";
import { useRouter } from "vue-router";

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

    const router = useRouter();
    const movie = omdbStore.movie;
    const imdbID = movie.value ? movie.value.imdbID : "";

    onMounted(async () => await getMovie(imdbID));

    const createOrUpdateMovieRecord = async (
      complete: boolean,
      never: boolean
    ) => {
      if (movieRecord.value) {
        await updateMovie(movieRecord.value, complete, never);
      } else {
        const newMovieRequest = getNewMovieRequest(movie.value);
        await createMovie(newMovieRequest, complete, never);
      }
      router.push("/movies");
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
<style scoped lang="scss">
button {
  height: 50px;
  width: 100%;
  background-color: #fcfbfe;
  border-radius: 4px;
  border: none;
  margin-bottom: 15px;
  font-family: "Architects Daughter", cursive;
  &.primary {
    background-color: #1f3e5a;
    box-shadow: 0 2px 4px 0 rgba(31, 62, 90, 0.5);
    color: #fcfbfe;
  }
  &.clear {
    color: #1f3e5a;
    box-shadow: 0 2px 4px 0 rgba(31, 62, 90, 0.5);
  }
  &.dark {
    color: black;
    box-shadow: 0 2px 4px 0 rgba(28, 37, 60, 0.5);
  }
}
</style>
