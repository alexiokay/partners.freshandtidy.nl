// activating carrier if not activated or deactivating if activated
export const activateAccount = async (email: string, token: string) => {
  const config = useRuntimeConfig();
  const options = {
    method: "POST",
    headers: {
      Host: `${config.FETCH_HOST}`,
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ email: email }),
  } as any;
  const response = await useFetch(
    `${config.API_URL}api/v1/activate_user`,
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

  return response;
};
