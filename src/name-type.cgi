This route is for posting the Name/Type of the SMT system.
The body should be URI encoded and in the following format:
  sysData={name},{type}

Example using fetch:

  fetch("name-type.cgi", {
    method: "POST",
    headers: {
      "Content-Type": "application-x-www-formurlencoded",
    },
    body: encodeURI(`sysData=West,Pulse 5.0)

  })