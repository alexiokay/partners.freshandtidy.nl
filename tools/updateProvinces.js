const fs = require("fs");
require("dotenv").config();

// activating carrier if not activated or deactivating if activated
const addProvinces = async (province) => {
  const config = process.env;
  console.log(province);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      gid_2: province.gid_2,
      name: province.name,
      country_code: province.country_code,
    }),
  };
  const response = await fetch(
    `http://127.0.0.1:8001/api/v1/localizations-province/`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });

  return response;
};

// Function to read JSON data from file
function readJsonFromFile(filePath) {
  try {
    // Read the content of the file synchronously
    const jsonData = fs.readFileSync(filePath, "utf-8");
    // Parse the JSON data into a JavaScript object
    const parsedData = JSON.parse(jsonData);
    return parsedData;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return null;
  }
}

const getProvincesJson = async () => {
  const jsonData = readJsonFromFile("../assets/netherlands2.json");

  // Check if JSON data was successfully read
  if (jsonData) {
    // Now you can work with the jsonData object, for example:
    // console.log(jsonData); // Output the entire JSON data
    // console.log(jsonData.features); // Output the "features" array
    // Perform any other operations with the jsonData as needed.
  } else {
    console.log("Failed to read JSON data from file.");
  }

  const mappedFeatures = [];

  // Iterate over each feature in the JSON
  jsonData.features.forEach((feature) => {
    // Get the GID_2 and NAME_2 from properties feature
    const { properties } = feature;
    const GID_2 = properties.GID_2;
    const NAME_2 = properties.NAME_2;

    // Get the NAME_2 property as the key for the mappedFeatures object
    const key = properties.GID_2;

    // Save the properties and geometry to the mappedFeatures object
    mappedFeatures[key] = { GID_2, NAME_2 };
  });

  // Now, the mappedFeatures object will contain all the features mapped by the NAME_2 property

  return mappedFeatures;
};

// check json file to search for each probinvces and add it to the database
const updateProvinces = async () => {
  const country_code = "NL";

  const provinces = await getProvincesJson();

  for (const [key, value] of Object.entries(provinces)) {
    console.log("Key:", key);
    console.log("Value:", value);
    console.log("GID_2:", value.GID_2);
    console.log("NAME_2:", value.NAME_2);

    const provinceObject = {
      name: value.NAME_2,
      country_code: country_code,
      gid_2: value.GID_2,
    };

    console.log(provinceObject);

    try {
      const response = await addProvinces(provinceObject);
      console.log(response);
    } catch (error) {
      console.error("Error adding province:", error);
    }
  }
};

updateProvinces();
