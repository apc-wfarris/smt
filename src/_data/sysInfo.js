const faker = require("faker");
const PROD = process.env.ELEVENTY_ENV == "PRODUCTION";

const typeOptions = ["Power Clean 2.0", "Power Clean 5.0", "Impulse 2.0"];

module.exports = {
  name: PROD ? "~name~" : faker.commerce.department(),
  type: PROD ? "~type~" : Math.ceil(Math.random() * typeOptions.length),
  hours: PROD ? "~hours~" : faker.datatype.number(150),
  mac: PROD ? "~mac~" : faker.internet.mac(),
  rem: PROD ? "~rem~" : faker.hacker.abbreviation(),
  typeOptions,
};
