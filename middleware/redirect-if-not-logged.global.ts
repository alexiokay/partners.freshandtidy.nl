import { useUserStore } from "@/stores/User";
export default defineNuxtRouteMiddleware((from, to) => {
  const userStore = useUserStore();
  console.log(userStore.getIsLogged);
  if (userStore.getIsLogged) {
    if (from.path === "/login") return "/";
    if (from.path === "/sign-up") return "/";
    if (from.path === "/waiting-list") return "/";
  }

  if (!userStore.getIsLogged) {
    if (from.path === "/login") return;
    if (from.path === "/sign-up") return;
    // if (from.path === "/forgot-password") return;
    if (from.path === "/waiting-list") return;
    return "/waiting-list";
  }
});
