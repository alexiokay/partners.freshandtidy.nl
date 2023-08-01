//import google
import { Client } from "@googlemaps/google-maps-services-js";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const zipCode = body.zipCode;
  console.log("zipCode", zipCode);

  // Get the API key from the app config
  const config = useRuntimeConfig();
  const apiKey = config.GOOGLE_MAPS_API_KEY;

  console.log("apiKey", apiKey);

  // Create a Google Maps client instance
  const client = new Client({ apiKey });

  try {
    // Perform geocoding using the Google Maps client
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&components=country:NL&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log("err", err);
      });

    console.log("response", response);

    // Handle the geocoding results
    if (response.results.length > 0) {
      const result = response.results[0];
      const province = result.address_components.find((component) =>
        component.types.includes("administrative_area_level_1")
      );

      console.log("province", province.long_name);

      if (province) {
        return {
          province: province.long_name,
          status: "OK",
        };
      } else {
        return {
          province: "Province not found",
        };
      }
    } else {
      return {
        province: "No results found",
      };
    }
  } catch (error) {
    console.error("Error:", error.message);
    return {
      province: "Error occurred",
    };
  }
});
