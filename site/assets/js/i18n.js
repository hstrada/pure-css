let selectedLanguage = ptbr;

window.onload = loadLanguage(selectedLanguage);

function loadLanguage(language) {
  let translation = JSON.stringify(language);
  let i18n = JSON.parse(translation);

  let data = document.querySelectorAll("[data-i18n]");
  //   console.log(i18n["header"].description);
  //   console.log(i18n["header"]["menu"].properties);
  data.forEach((element) => {
    // console.log(element.dataset.i18n.split(".").length);
    let newElement = element.dataset.i18n.split(".");
    let result = "";
    newElement.map((value, index) => {
      if (newElement.length === 1) {
        element.innerHTML = i18n[value];
      } else {
        if (index !== newElement.length - 1) {
          result = result.concat(`["${value}"]`);
        } else {
          result = result.concat(`.${value}`);
        }
      }
    });
    // element.innerHTML = i18n[result];
    console.log(i18n.title);
    console.log(result);

    console.log(result);
    // element.dataset.i18n
    //   .split(".")
    //   .forEach((customElement) => console.log(customElement));

  });
}
