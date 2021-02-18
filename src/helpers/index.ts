import { ref } from "vue";

export const useTabs = (tabs: string[]) => {
  const selectedTab = ref(tabs[0]);
  const isSelected = (tab: string) => {
    return selectedTab.value === tab;
  };
  const select = (tab: string) => {
    selectedTab.value = tab;
  };
  return {
    selectedTab,
    isSelected,
    select
  };
};
