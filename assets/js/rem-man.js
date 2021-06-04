function createRemoteLightUpdater() {
  const remoteLightElements = document.querySelectorAll(
    "#remote-management-form svg"
  );
  return async () => {
    const remoteStatusesRequest = await fetch("/api/remotes.json");
    const remoteStatuses = await remoteStatusesRequest.json();
    for (const [i, remote] of remoteLightElements.entries()) {
      remote.classList.remove("led-on", "led-off");
      const isOn = remoteStatuses[i].visible;
      remote.classList.add(isOn ? "led-on" : "led-off");
    }
  };
}

const updater = createRemoteLightUpdater();
updater();
setInterval(updater, 1000);
const remoteForm = document.getElementById("remote-management-form");
remoteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll("form input");
  inputs.forEach((el, i) => {
    const postBody = `remoteData=${i + 1},${el.value}`;
    fetch("/rem-man.cgi", {
      method: "POST",
      headers: {
        "Content-Type": "application-x-www-formurlencoded",
      },
      body: postBody,
    });
  });
});
