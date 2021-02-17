<template>
  <div class="home">
    <h2 class="title" @click="reverseTitle">{{ title }}</h2>
    <Search />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Search from "@/components/Search.vue";

export default defineComponent({
  name: "Home",
  components: {
    Search
  },
  setup() {
    let reverse = false;
    const title = ref("D & C's Movie List");

    function setTitle() {
      title.value = reverse ? `C & D's` : `D & C's`;
      title.value += " Movie List";
    }

    function reverseTitle() {
      reverse = !reverse;
      setTitle();
    }
    return {
      title,
      reverseTitle
    };
  }
});
</script>

<style scoped>
.title {
  cursor: pointer;
  text-align: center;
}
</style>
