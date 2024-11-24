import { useUserStore } from "@/stores/User";
export default defineNuxtRouteMiddleware((from, to) => {
  const userStore = useUserStore();

  // if user is not activated, redirect to activation page
  if (from.path === "/signup/activation") return;
  if (userStore.getAccountType === "carrier") {
    // if (!userStore.carrier.is_activated) {
    //   console.log("not activated");
    //   return navigateTo("/signup/activation");
    console.log("not activated");
    // }
  }
});
