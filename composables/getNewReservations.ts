import { useUserStore } from "@/stores/User";

export const getNewReservations = async () => {
  const userStore = useUserStore();
  const config = useRuntimeConfig();
  const options = {
    method: "GET",
    headers: {
      Host: `${config.FETCH_HOST}`,
      Authorization: `Token ${userStore.getToken}`,
    },
  } as any;
  const reservations = await useFetch(
    `${config.API_URL}api/v1/get_all_reservations`,
    options
  ).then((res) => {
    const data: any = res.data.value;
    const error = res.error.value;
    if (error) {
      // dealing error
      console.log(error);
    } else {
      return data;
    }
  });
  return reservations;
};
