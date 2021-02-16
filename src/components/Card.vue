<template>
  <div class="card">
    {{ movie.title }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export type Movie = {
  title: string;
};

export default defineComponent({
  name: "Card",
  props: {
    movie: {
      type: Object as PropType<Movie>,
      default: (): Movie => ({
        title: "Not Available"
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
