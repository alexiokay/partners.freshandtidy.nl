import { defineStore } from "pinia";

import { createPinia } from "pinia";
import uniqid from "uniqid";
import { useStorage } from "@vueuse/core";

const pinia = createPinia();
import { useUserStore } from "./User";
export const useNecessaryStore = defineStore("necessaryStore", {
  state: () => {
    return {
      // cookies settings
      isCookiesSet: false,
      isUserMobileDropdown: false,
      isUserDropdown: false,
      acceptedCookies: {
        necessary: true,
        functional: false,
        analytics: false,
        performance: false,
        advertisement: false,
        others: false,
      } as Record<string, boolean>,
    };
  },
  getters: {},
  actions: {
    setUserDropdown(is) {
      this.isUserDropdown = is;
    },
  },
  persist: {
    storage: persistedState.cookies,
    // only save isCookiesSet as cookie
  },
  // other options...
});

export default pinia;
