import { setSystemDateSpan, setSystemTimeSpan } from "./date-time.js";
import { createLight } from "./lights.js";

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
const upateLeds = async () => {
  const ledStatus = await (await fetch("/api/led-status.json")).json();
  for (const [led, isOn] of Object.entries(ledStatus)) {
    leds[led](isOn);
  }
};

setInterval(upateLeds, 1000);
setSystemDateSpan();
setSystemTimeSpan();
window.setInterval(setSystemTimeSpan, 1000);
