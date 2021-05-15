This route is for posting the Chemical details of the SMT system.
The body should be URI encoded and in the following format:
  chem{1|2}_{brand|dilution}=value

Example using fetch:

  fetch("name-type.cgi", {
    method: "POST",
    headers: {
      "Content-Type": "application-x-www-formurlencoded",
    },
    body: encodeURI("chem1_brand=Dawn")

  })
