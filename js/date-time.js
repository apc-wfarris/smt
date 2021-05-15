const padZero = (num) => (num.toString().length == 1 ? `0${num}` : num);

export const setSystemDateSpan = () => {
  const date = new Date();
  const dateSpan = document.getElementById("system-date");
  dateSpan.textContent = date.toDateString();
};

export const setSystemTimeSpan = () => {
  const date = new Date();
  const h = ((date.getHours() + 11) % 12) + 1;
  const m = date.getMinutes();
  const s = date.getSeconds();

  const timeString = [h, m, s].map(padZero).join(":");

  const timeSpan = document.getElementById("system-time");
  timeSpan.textContent = timeString;
};
