const faker = require("faker");
const PROD = process.env.ELEVENTY_ENV == "PRODUCTION";

const NUM_OF_REMOTES = 20;

const remoteTildeCalls = Array.from(
  new Array(NUM_OF_REMOTES),
  (_, index) => index + 1
).map((i) => ({
  id: i,
  description: PROD ? `~remote${i}_description~` : faker.company.bsNoun(),
  visible: PROD ? `~remote${i}_visible~` : faker.datatype.boolean(),
}));

module.exports = remoteTildeCalls;
