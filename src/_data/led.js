const faker = require("faker");
const PROD = process.env.ELEVENTY_ENV == "PRODUCTION";

module.exports = {
  flow: PROD ? "~flow~" : faker.datatype.boolean(),
  sensors: PROD ? "~sensors~" : faker.datatype.boolean(),
  rinse_on: PROD ? "~rinse_on~" : faker.datatype.boolean(),
  ch1: PROD ? "~ch1~" : faker.datatype.boolean(),
  ch2: PROD ? "~ch2~" : faker.datatype.boolean(),
  ch1_on: PROD ? "~ch1_on~" : faker.datatype.boolean(),
  ch2_on: PROD ? "~ch2_on~" : faker.datatype.boolean(),
};
