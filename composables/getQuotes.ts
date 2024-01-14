export const getQuotes = async (token: string) => {
  const config = useRuntimeConfig();
  const options = {
    method: "GET",
    headers: {
      Host: `${config.public.FETCH_HOST}`,
      Authorization: `Token ${token}`,
    },
  } as any;
  let quotes = await useFetch(
    `${config.public.API_URL}api/v1/quotes/`,
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

  return quotes;
};
