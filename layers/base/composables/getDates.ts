import { Timeslot } from "@/types/timeslot";
export const getDates = async () => {
  const config = useRuntimeConfig();
  const options = {
    method: "GET",
    headers: {
      Host: `${config.FETCH_HOST}`,
      Authorization: `${config.API_TOKEN}`,
    },
  } as any;
  const dates = await useFetch(
    `${config.API_URL}api/v1/simple_dates/`,
    options
  ).then((res) => {
    const data: any = res.data.value;
    const mappedData = data.map((obj: any) => ({
      id: obj.id,
      date: new Date(obj.date),
      is_open: obj.is_open,
      workable_times: obj.workable_times,
      timeslots: obj.timeslots,
    }));
    const error = res.error.value;
    if (error) {
      // dealing error
      console.log(error);
    } else {
      return mappedData;
    }
  });

  return dates;
};
