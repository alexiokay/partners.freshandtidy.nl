const fs = require("fs");

const inputFilePath = "../assets/netherlands2.json";
const outputFilePath = "./gementees.json";

// Read input JSON data from the file
fs.readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  const jsonData = JSON.parse(data);

  // Extract NAME_2 values
  const name2Values = jsonData.features.map(
    (feature) => feature.properties.NAME_2
  );

  const outputData = { gementees: name2Values };

  // Write the output JSON data to the file
  fs.writeFile(outputFilePath, JSON.stringify(outputData, null, 2), (err) => {
    if (err) {
      console.error("Error writing output file:", err);
      return;
    }
    console.log(
      `Extracted ${name2Values.length} NAME_2 values and saved to ${outputFilePath}`
    );
  });
});
