POST remoteData to this route to create a remote.
(blank data will effectively delete a remote)

The request body is formurlencoded and formatted like so:
remoteData={id},{description}

fetch Ex:
fetch("/rem-man.cgi", {
  method: "POST",
  headers: {
    "Content-Type": "application-x-www-formurlencoded",
  },
  body: "remoteData=1,West Wing"
})
