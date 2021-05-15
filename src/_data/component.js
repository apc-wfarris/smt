const faker = require("faker");
const PROD = process.env.ELEVENTY_ENV == "PRODUCTION";

module.exports = {
  water_filter_hrs_remaining: PROD
    ? "~water_filter_hrs_remaining~"
    : faker.datatype.number(150),
  pump_oil_hrs_remaining: PROD
    ? "~water_filter_hrs_remaining~"
    : faker.datatype.number(150),
  pump_rebuild_hrs_remaining: PROD
    ? "~pump_rebuild_hrs_remaining~"
    : faker.datatype.number(150),
  system_flush_hrs_remaining: PROD
    ? "~system_flush_hrs_remaining~"
    : faker.datatype.number(150),
};
