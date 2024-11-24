// activating carrier if not activated or deactivating if activated
export const updateProvinces = async (
  selectedRegions: string,
  token: string
) => {
  const config = useRuntimeConfig();
  //console.log("selectedRegions", selectedRegions);
  console.log("token", token);
  console.log("api url", config.public.API_URL);
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Host: `${config.public.FETCH_HOST}`,
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ provinces: selectedRegions }),
  } as any;
  const response = await useFetch(
    `${config.public.API_URL}api/v1/localizations-province-set/update`,
    options
  ).then((res) => {
    const data: any = res.data.value;

    const error = res.error.value;
    if (error) {
      // dealing error
      console.log(error);
      return false;
    } else {
      console.log("data", data);
      return data;
    }
  });

  return response;
};
