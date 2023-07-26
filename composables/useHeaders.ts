import { useUserStore } from "@/stores/User";

type Type = "GET" | "POST" | "PUT" | "DELETE";
export const useHeaders = (type: Type, body: Object) => {
  const userStore = useUserStore();
  const config = useRuntimeConfig();
  const headers = {
    method: type,
    headers: {
      "Content-Type": "application/json",
      Host: `${config.FETCH_HOST}`,
      Authorization: `Token ${userStore.getToken}`,
    },
    body: JSON.stringify(body),
  } as any;
  return headers;
};
