// input border width
let inputBorderWidth = document.getElementById("border--size__width-value");
inputBorderWidth.addEventListener("keyup", (event) => {
  changeBorderWidthSize();
});

var sliderWidth = document.getElementById("border--size__width");

inputBorderWidth.value = sliderWidth.value;

sliderWidth.oninput = function () {
  inputBorderWidth.value = this.value;
  divGenerator.style.borderWidth = `${this.value}px`;
};

function changeBorderWidthSize() {
  let value = inputBorderWidth.value;
  const DEFAULT_WIDTH_VALUE = 1;
  if (value === undefined || value === null || value === 0 || value === "") {
    divGenerator.style.borderWidth = `${DEFAULT_WIDTH_VALUE}px`;
  } else {
    sliderWidth.value = inputBorderWidth.value;
    divGenerator.style.borderWidth = `${value}px`;
  }
}
