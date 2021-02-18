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

export const createDebounce = () => {
  let timeout: number | undefined = undefined;
  return function(fnc: Function, delayMs: number) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fnc();
    }, delayMs || 500);
  };
};
