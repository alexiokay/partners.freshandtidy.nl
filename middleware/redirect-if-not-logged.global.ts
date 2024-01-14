import { useUserStore } from "@/stores/User";
export default defineNuxtRouteMiddleware((from, to) => {
  const userStore = useUserStore();
  console.log(userStore.getIsLogged);
  if (userStore.getIsLogged) {
    if (from.path === "/login") return "/";
  }
});
