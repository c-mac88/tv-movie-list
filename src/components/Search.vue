<template>
  <div class="search">
    <input
      class="search-input"
      placeholder="Search"
      type="text"
      :value="searchTerm"
      @input="debounce(() => handleSearch($event.target.value), 500)"
    />
    <div class="button-group">
      <button v-if="showClearButton" class="clear" @click="handleClear">
        Clear
      </button>
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
import { defineComponent, ref, computed, onMounted } from "vue";
import { useOmdb } from "@/store";
import SearchResult from "@/components/SearchResult.vue";
import { createDebounce } from "@/helpers";

export default defineComponent({
  name: "Search",
  components: {
    SearchResult
  },
  setup() {
    const { search, searchResults, clearSearchResults } = useOmdb();
    const searchTerm = ref("");
    const showClearButton = computed(() => {
      return searchTerm.value.length > 0 || searchResults.value.length > 0;
    });

    onMounted(clearSearchResults);

    async function handleSearch(value: string) {
      searchTerm.value = value;
      await search(searchTerm.value);
    }

    function handleClear() {
      searchTerm.value = "";
      clearSearchResults();
    }

    return {
      searchTerm,
      handleSearch,
      handleClear,
      searchResults,
      showClearButton,
      debounce: createDebounce()
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search {
  width: 100%;
  position: relative;
  z-index: 1;
}
.search-input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  font-family: "Architects Daughter", cursive;
  color: grey;
}
.search-input::-moz-placeholder {
  /* Firefox 19+ */
  font-family: "Architects Daughter", cursive;
  color: grey;
}
.search-input::-ms-input-placeholder {
  /* IE 10+ */
  font-family: "Architects Daughter", cursive;
  color: grey;
}
.search-input::-moz-placeholder {
  /* Firefox 18- */
  font-family: "Architects Daughter", cursive;
  color: grey;
}
.search-input {
  width: 100%;
  padding: 15px;
  border: none;
  box-shadow: 0 2px 4px 0 rgba(31, 62, 90, 0.5);
  border-radius: 4px;
  font-family: "Architects Daughter", cursive;
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
  font-family: "Architects Daughter", cursive;
  &.clear {
    color: grey;
    background: none;
  }
  &.primary {
    background: #1f3e5a;
    color: #fcfbfe;
  }
}
.search-results {
  width: 100%;
  padding: 10px;
  background-color: #fcfbfe;
  box-shadow: 0 2px 4px 0 rgba(28, 37, 60, 0.5);
  border-radius: 0px 0px 4px 4px;
  position: absolute;
  top: 100%;
}
</style>
