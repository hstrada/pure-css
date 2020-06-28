let borderColor = document.querySelector("#border--color-value");

borderColor.addEventListener("keyup", (event) => {
  divGenerator.style.borderColor = `#` + borderColor.value;
});
