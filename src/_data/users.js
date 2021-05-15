const faker = require("faker");

const PROD = process.env.ELEVENTY_ENV == "PRODUCTION";
const NUM_OF_USERS = 20;

const userTildeCalls = Array.from(
  new Array(NUM_OF_USERS),
  (_, index) => index + 1
).map((i) => ({
  id: i,
  fname: PROD ? `~user${i}_fname~` : faker.name.firstName(),
  lname: PROD ? `~user${i}_lname~` : faker.name.lastName(),
  password: PROD ? `~user${i}_password~` : "1234",
  permit: PROD ? `~user${i}_permit~` : faker.datatype.boolean(),
}));

module.exports = userTildeCalls;
