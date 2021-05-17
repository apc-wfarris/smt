import { createStatefulForm } from "./forms.js";
import { createLight } from "./lights.js";
import { fillUserTable } from "./user-table.js";
import { fillRemoteTable } from "./remote-table.js";

const sysInfoId = "sys-info-form";
const chem1Id = "chem-1-form";
const chem2Id = "chem-2-form";

// sends requests to update the info stored
// about the system name and the system type
const sysInfoFormSubmit = (form) => {
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

createStatefulForm(sysInfoId, sysInfoFormSubmit);
createStatefulForm(chem1Id, chemSubmitter);
createStatefulForm(chem2Id, chemSubmitter);
fillUserTable();
fillRemoteTable();
