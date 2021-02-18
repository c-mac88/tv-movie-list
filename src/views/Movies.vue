<template>
  <div class="home">
    <h2 class="title" @click="reverseTitle">{{ title }}</h2>
    <Search />
    <Tabs>
      <template v-slot:Complete>
        <Complete />
      </template>
      <template v-slot:Incomplete>
        <Incomplete />
      </template>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Search from "@/components/Search.vue";
import Tabs from "@/components/Tabs.vue";
import Complete from "@/components/Complete.vue";
import Incomplete from "@/components/Incomplete.vue";

export default defineComponent({
  name: "MovieList",
  components: {
    Search,
    Tabs,
    Complete,
    Incomplete
  },
  setup() {
    let reverse = false;
    const title = ref("C & D's Movie List");

    function setTitle() {
      title.value = reverse ? `D & C's` : `C & D's`;
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
* {
  font-family: "Architects Daughter", cursive;
}
.title {
  cursor: pointer;
  text-align: center;
}
</style>
