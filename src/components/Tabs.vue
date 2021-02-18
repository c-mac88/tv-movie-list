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
  margin: 30px 0;
  display: flex;
  height: 50px;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(31, 62, 90, 0.5);
  border-radius: 4px;
}
.tab {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &.selected {
    border-radius: 4px;
    background-color: #1f3e5a;
    color: #fcfbfe;
  }
}
</style>
