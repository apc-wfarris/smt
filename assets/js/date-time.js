/**
 *
 * @param {number} num the number to pad
 * @returns {string} If num has 1 character will pad with a zero for better looking dates/times
 */
function padZero(num) {
  return num.toString().length == 1 ? `0${num}` : num.toString();
}

/**
 * Sets the system date the site displays on the right side
 */
export function setSystemDateSpan() {
  const date = new Date();
  const dateSpan = document.getElementById("system-date");
  dateSpan.textContent = date.toDateString();
}

/**
 * Sets the system clock the site displays on the right side
 */
export function setSystemTimeSpan() {
  const date = new Date();
  const h = ((date.getHours() + 11) % 12) + 1;
  const m = date.getMinutes();
  const s = date.getSeconds();

  const timeString = [h, m, s].map(padZero).join(":");

  const timeSpan = document.getElementById("system-time");
  timeSpan.textContent = timeString;
}
