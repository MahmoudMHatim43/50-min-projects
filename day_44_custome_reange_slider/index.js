const range = document.querySelector("#range");
const label = document.querySelector("#range-value");

range.addEventListener("input", (e) => {
  const value = e.target.value;
  const max = e.target.max;
  const min = e.target.min;

  label.style.left = `${scale(value, min, max, 2.5, 97.5)}%`;
  label.innerHTML = `${value}`;
});
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
