export const useGeolocation2 = async (latitude: number, longitude: number) => {
  const config = useRuntimeConfig();

  const options = {
    method: "POST",
    headers: {
      Host: `${config.FETCH_HOST}`,
      Authorization: `${config.API_TOKEN}`,
    },
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude,
    }),
  };

  console.log(options);

  const response = await useFetch(
    `${config.API_URL}api/v1/get_geolocation/`,
    options
  ).then((res) => {
    const data: any = res.data.value;
    const error = res.error.value;
    if (error) {
      console.log(error);
    } else {
      return data;
    }
  });
  try {
    console.log("user geo data: ");
    console.log(response);
  } catch (error) {
    console.log(error);
  }

  return response;
};
