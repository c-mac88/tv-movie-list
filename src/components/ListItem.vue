<template>
  <div class="list-item">
    <router-link :to="`/movies/${imdbId}`">{{ value }}</router-link>
    <div class="delete" @click="deleteMovie(id)">X</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMoviesCollection } from "@/firebase";

export default defineComponent({
  name: "ListItem",
  props: {
    value: {
      type: String,
      default: (): string => ""
    },
    imdbId: {
      type: String,
      default: (): string => ""
    },
    id: {
      type: String,
      default: (): string => ""
    }
  },
  setup() {
    const { deleteMovie } = useMoviesCollection();
    return {
      deleteMovie
    };
  }
});
</script>

<style scoped lang="scss">
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  padding-top: 0;
}
.delete {
  color: grey;
}
</style>
