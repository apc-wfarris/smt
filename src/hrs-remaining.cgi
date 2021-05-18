This route is for posting the hours remaining of a component.

The components are:
water-filter-hrs
pump-oil-hrs
pump-rebuild-hrs
system-flush-hrs

The body should be URI encoded and in the following format:
  {component}={hrs}

Example using fetch:

  fetch("name-type.cgi", {
    method: "POST",
    headers: {
      "Content-Type": "application-x-www-formurlencoded",
    },
    body: encodeURI("water-filter-hrs=50")
  })
