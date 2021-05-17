/**
 * Sets up the light svg for turning on/off
 * @param {string} lightId ID of the light to set up
 */
export const createLight = (lightId) => {
  const lightDiv = document.getElementById(lightId);
  const lightElement = lightDiv.querySelector("svg");
  /**
   * Returns a closure to update the light.
   * false => light turns red
   * true => light turns green
   * @param {boolean} isOn
   */
  const updater = (isOn) => {
    lightElement.classList.remove("led-on");
    if (isOn) {
      lightElement.classList.add("led-on");
    }
  };
  return updater;
};
