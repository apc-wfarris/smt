This route is for posting the hours remaining of a component.

Component IDs:
oil=1
filter=2
rebuild=3
flush=4

The body should be URI encoded and in the following format:
  {component}={hrs}

Example using fetch:

  fetch("name-type.cgi", {
    method: "POST",
    headers: {
      "Content-Type": "application-x-www-formurlencoded",
    },
    body: encodeURI("4=50")
  })
