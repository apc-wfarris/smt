const faker = require("faker");
const PROD = process.env.ELEVENTY_ENV == "PRODUCTION";

module.exports = {
  chem_1_brand: PROD ? "~chem_1_brand~" : faker.company.bsNoun(),
  chem_1_dilution: PROD ? "~chem_1_dilution~" : "1 oz/G",
  chem_2_brand: PROD ? "~chem_2_brand~" : faker.company.bsNoun(),
  chem_2_dilution: PROD ? "~chem_2_dilution~" : "1 oz/G",
};
