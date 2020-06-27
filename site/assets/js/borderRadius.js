let inputBorderRadius = document.getElementById("border--size__radius-value");
inputBorderRadius.addEventListener("keyup", (event) => {
  changeBorderRadiusSize();
});

var sliderRadius = document.getElementById("border--size__radius");

inputBorderRadius.value = sliderRadius.value;

sliderRadius.oninput = function () {
  inputBorderRadius.value = this.value;
  divGenerator.style.borderRadius = `${this.value}px`;
};

function changeBorderRadiusSize() {
  let value = inputBorderRadius.value;
  const DEFAULT_RADIUS_VALUE = 1;
  if (value === undefined || value === null || value === 0 || value === "") {
    divGenerator.style.borderRadius = `${DEFAULT_RADIUS_VALUE}px`;
  } else {
    sliderRadius.value = inputBorderRadius.value;
    divGenerator.style.borderRadius = `${value}px`;
  }
}
