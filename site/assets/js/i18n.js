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
        Object.keys(i18n).forEach(function (k) {
          element.innerHTML = i18n[k];
        });
      } else {
        if (index !== newElement.length - 1) {
          result = result.concat(`["${value}"]`);
          console.log(i18n + `${result}`);
        } else {
          result = result.concat(`.${value}`);
        }
      }
    });

    function getObject(theObject) {
      var result = null;
      if (theObject instanceof Array) {
        for (var i = 0; i < theObject.length; i++) {
          result = getObject(theObject[i]);
          if (result) {
            break;
          }
        }
      } else {
        for (var prop in theObject) {
          console.log(prop + ": " + theObject[prop]);
          if (
            theObject[prop] instanceof Object ||
            theObject[prop] instanceof Array
          ) {
            result = getObject(theObject[prop]);
            if (result) {
              break;
            }
          }
        }
      }
      return result;
    }

    getObject(i18n);

  });
}
