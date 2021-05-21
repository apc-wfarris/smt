import { createStatefulForm } from "./forms.js";
import { createLight } from "./lights.js";
import { fillUserTable } from "./user-table.js";
import { fillRemoteTable } from "./remote-table.js";

const sysInfoId = "sys-info-form";
const chem1Id = "chem-1-form";
const chem2Id = "chem-2-form";
const hoursFormId = "hrs-form";

// set up an event listener for the reset buttons
// on the hours remaining section
const hoursFormButtons = document
  .getElementById(hoursFormId)
  .querySelectorAll("button");
hoursFormButtons.forEach((b) => {
  const compId = b.parentNode.dataset.compId;
  b.addEventListener("click", async (e) => {
    e.preventDefault();
    await fetch("/reset.cgi", {
      method: "POST",
      headers: {
        "Content-Type": "application-x-www-formurlencoded",
      },
      body: encodeURI(`component=${compId}`),
    });
    window.location.reload();
  });
});

// sends requests to update the info stored
// about the system name and the system type
const sysInfoSubmitter = (form) => {
  const data = Object.fromEntries(new FormData(form).entries());
  const requestBody = `sysData=${data["sys-name-input"]},${data["sys-type-input"]}`;
  fetch("name-type.cgi", {
    method: "POST",
    headers: {
      "Content-Type": "application-x-www-formurlencoded",
    },
    body: encodeURI(requestBody),
  });
};

// sends requests to update a given
// chemical's brand/dilution
const chemSubmitter = (form) => {
  const data = Array.from(new FormData(form).entries());
  const requests = data.map((d) => d.join("="));
  console.log(requests);
};

// the function that runs when the hours form is submitted
const hoursSubmitter = (form) => {
  const nameMap = {
    "pump-oil-hrs": 1,
    "water-filter-hrs": 2,
    "pump-rebuild-hrs": 3,
    "system-flush-hrs": 4,
  };
  const data = Array.from(new FormData(form).entries());
  // get the id of the component from the name map
  const requests = data.map((d) => [nameMap[d[0]], d[1]].join("="));
  console.log(requests);
};

// create an object whose key is the id of the led element
// and whose value is the updater function
const leds = [
  "flow-led",
  "sensors-led",
  "rinse-led",
  "chem1-led",
  "chem2-led",
  "motor-led",
  "chem1-on-led",
  "chem2-on-led",
].reduce(
  (ledUpdaters, ledId) => ({
    ...ledUpdaters,
    [ledId]: createLight(ledId),
  }),
  {}
);

// fetch the status of each led then find the corresponding
// kv pair in the above object and run the updater with
// the value from the api call
const updateLeds = async () => {
  const ledStatus = await (await fetch("/api/led-status.json")).json();
  for (const [led, isOn] of Object.entries(ledStatus)) {
    leds[led](isOn);
  }
};

updateLeds();
setInterval(updateLeds, 1000);
createStatefulForm(sysInfoId, sysInfoSubmitter);
createStatefulForm(chem1Id, chemSubmitter);
createStatefulForm(chem2Id, chemSubmitter);
createStatefulForm(hoursFormId, hoursSubmitter);
fillUserTable();
fillRemoteTable();
