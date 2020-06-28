let borderStyle = document.querySelectorAll(".select-box__input-text");

let borderStyledSelected = document.querySelector(".select-box__current");

borderStyledSelected.addEventListener("click", (event) => {
  borderStyle.forEach((element) => {
    if (getComputedStyle(element).display === "block") {
      divGenerator.style.borderStyle = element.innerText;
    }
  });
});
