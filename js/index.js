import { setSystemDateSpan, setSystemTimeSpan } from "/js/date-time.js";

setSystemDateSpan();
setSystemTimeSpan();
window.setInterval(setSystemTimeSpan, 1000);
