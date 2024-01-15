import { defineStore } from "pinia";

import { createPinia } from "pinia";
import uniqid from "uniqid";
import { useStorage } from "@vueuse/core";

type Layout = "default" | "accounts";
const pinia = createPinia();
import { useUserStore } from "./User";
export const useCookiesStore = defineStore("cookiesStore", {
  state: () => {
    return {
      // cookies settings
      isCookiesSet: false,
      isUserMobileDropdown: false,
      isUserDropdown: false,
      layout: "default" as Layout,
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
  getters: {
    getAnalitycs: (state) => {
      return state.acceptedCookies.analytics;
    },
    getPerformance: (state) => {
      return state.acceptedCookies.performance;
    },
    getAdvertisement: (state) => {
      return state.acceptedCookies.advertisement;
    },
    getLayout(state) {
      return state.layout;
    },
  },
  actions: {
    setUserDropdown(is) {
      this.isUserDropdown = is;
    },
    setLayout(layout: Layout) {
      this.layout = layout;
    },
  },
  persist: {
    storage: persistedState.cookies,
    // only save isCookiesSet as cookie
  },
  // other options...
});

export default pinia;
