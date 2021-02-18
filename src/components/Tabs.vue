<template>
  <div class="tabs">
    <div
      v-for="tab in tabs"
      :key="tab"
      class="tab"
      :class="{ selected: isSelected(tab) }"
      @click="select(tab)"
    >
      {{ tab }}
    </div>
  </div>
  <slot :name="selectedTab" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useTabs } from "@/helpers";

export default defineComponent({
  name: "List",
  props: {
    tabs: {
      type: Array as PropType<string[]>,
      default: (): string[] => ["Complete", "Incomplete"]
    }
  },
  setup(props) {
    const tabsApi = useTabs(props.tabs);
    const selectedTab = tabsApi.selectedTab;
    const isSelected = tabsApi.isSelected;
    const select = tabsApi.select;
    return {
      selectedTab,
      isSelected,
      select
    };
  }
});
</script>

<style scoped lang="scss">
.tabs {
  margin-top: 30px;
  display: flex;
  height: 50px;
  width: 100%;
  border: 1px solid blue;
  border-radius: 4px;
}
.tab {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &.selected {
    border: 1px solid blue;
    border-radius: 4px;
    background-color: blue;
    color: white;
  }
}
</style>
