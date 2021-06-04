POST userData to this route to create a user.

The request body is formurlencoded and formatted like so:
userData={id},{firstName},{lastName},{permit}

fetch Ex:
fetch("/user-man.cgi", {
  method: "POST",
  headers: {
    "Content-Type": "application-x-www-formurlencoded",
  },
  body: "userData=1,John,Doe,1234,1"
})