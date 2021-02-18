<template>
  <router-link to="/movies">Back</router-link>
  <div class="movie" v-if="movie">
    <img :src="movie.Poster" />
    <div class="details">
      <div>
        <span class="detail title">{{ movie.Title }}</span>
        <span class="detail year"> ({{ movie.Year }})</span>
        <span class="detail runtime"> {{ movie.Runtime }}</span>
      </div>
      <div class="detail actors">{{ movie.Actors }}</div>
      <div class="detail ratings">
        <div
          v-for="rating in movie.Ratings"
          :key="rating.Source"
          class="rating"
        >
          {{ rating.Value }}
        </div>
      </div>
      <div class="detail plot">{{ movie.Plot }}</div>
      <Actions />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useOmdb } from "@/store";
import Actions from "@/components/Actions.vue";

export default defineComponent({
  name: "Movie",
  components: {
    Actions
  },
  props: {
    imdbID: {
      type: String,
      default: (): string => "tt3896198"
    }
  },
  setup(props) {
    const omdbStore = useOmdb();
    const movie = omdbStore.movie;
    async function init() {
      await omdbStore.getByImdbId(props.imdbID);
    }
    onMounted(init);
    return {
      movie
    };
  }
});
</script>

<style scoped>
* {
  font-family: "Architects Daughter", cursive;
}
.movie {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}
img {
  width: 100%;
  max-width: 500px;
  margin-bottom: 15px;
}
@media screen and (min-width: 768px) {
  .movie {
    flex-direction: row;
  }
  .details {
    padding: 30px;
  }
  img {
    margin: 0;
  }
}
.detail {
  margin: 10px 0;
}
.ratings {
  display: flex;
  justify-content: space-between;
}
</style>
