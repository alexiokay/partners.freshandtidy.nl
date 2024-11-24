export const getSettings = async (token) => {
  const config = useRuntimeConfig();
  const options = {
    method: "GET",
    headers: {
      Host: `${config.FETCH_HOST}`,
      Authorization: `Token ${token}`,
    },
  } as any;
  const data = await useFetch(
    `${config.API_URL}api/v1/arrows_settings/`,
    options
  ).then((res) => {
    const data: any = res.data.value;
    console.log(data);
    const error = res.error.value;
    if (error) {
      // dealing error
      console.log(error);
    } else {
      return data;
    }
  });
  return data;
};
