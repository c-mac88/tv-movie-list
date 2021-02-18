<template>
  <div class="search">
    <input placeholder="Search" type="text" v-model="searchTerm" />
    <div class="button-group">
      <button v-if="showClearButton" class="clear" @click="handleClear">
        Clear
      </button>
      <button class="primary" @click="handleSearch">Go</button>
    </div>
    <div class="search-results" v-if="searchResults?.length > 0">
      <SearchResult
        v-for="result in searchResults"
        :searchResult="result"
        :key="result.imdbID"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useOmdb } from "@/store";
import SearchResult from "@/components/SearchResult.vue";

export default defineComponent({
  name: "Search",
  components: {
    SearchResult
  },
  setup() {
    const omdbStore = useOmdb();
    const searchTerm = ref("");
    const searchResults = omdbStore.searchResults;
    const showClearButton = computed(() => {
      return searchTerm.value.length > 0 || searchResults.value.length > 0;
    });

    async function handleSearch() {
      await omdbStore.search(searchTerm.value);
    }

    function handleClear() {
      searchTerm.value = "";
      omdbStore.clearSearchResults();
    }

    return {
      searchTerm,
      handleSearch,
      handleClear,
      searchResults,
      showClearButton
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search {
  width: 100%;
  position: relative;
  z-inedx: 1;
}
input {
  width: 100%;
  padding: 15px;
  border: 1px solid blue;
  border-radius: 4px;
}
.button-group {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
}
button {
  height: 100%;
  padding: 15px;
  border: none;
  border-radius: 4px;
  &.clear {
    color: grey;
    background: none;
  }
  &.primary {
    background: blue;
    color: white;
  }
}
.search-results {
  width: 100%;
  padding: 10px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.21);
  border-radius: 0px 0px 4px 4px;
  position: absolute;
  top: 100%;
}
</style>
