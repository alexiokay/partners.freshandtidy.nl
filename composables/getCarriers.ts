export const getCarriers = async () => {
  const config = useRuntimeConfig();
  const options = {
    method: "GET",
    headers: {
      Host: `${config.FETCH_HOST}`,
    },
  } as any;
  const carriers = await useFetch(
    `${config.API_URL}api/v1/get_carriers`,
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

  return carriers;
};
