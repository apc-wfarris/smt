import { setSystemDateSpan, setSystemTimeSpan } from "./date-time.js";
setSystemDateSpan();
setSystemTimeSpan();
window.setInterval(setSystemTimeSpan, 1000);
