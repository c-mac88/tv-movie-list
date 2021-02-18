<template>
  <div class="list-item">
    <router-link :to="`/movies/${id}`">{{ value }}</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "ListItem",
  props: {
    value: {
      type: String,
      default: (): string => ""
    },
    id: {
      type: String,
      default: (): string => ""
    }
  },
  setup(props) {
    onMounted(() => console.log(props.id));
  }
});
</script>

<style scoped lang="scss">
.list-item {
  padding: 15px;
}
</style>
