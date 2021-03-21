<template>
  <div class="movies">
    <h2 class="title">Movie List</h2>
    <Search />
    <p class="subtitle">Search for a movie to add it to the list!</p>
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
  name: "Movies",
  components: {
    Search,
    Tabs,
    Complete,
    Incomplete
  }
});
</script>

<style scoped>
.subtitle {
  text-align: center;
}

.title {
  cursor: pointer;
  text-align: center;
}
</style>
