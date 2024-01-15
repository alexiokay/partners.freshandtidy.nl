import Hotjar from "@hotjar/browser";

const siteId = 3610842;
const hotjarVersion = 6;

export default defineNuxtPlugin((nuxtApp) => {
  Hotjar.init(siteId, hotjarVersion);

  nuxtApp.vueApp.use(Hotjar);
});
