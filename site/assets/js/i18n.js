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
          if (prop == "id") {
            if (theObject[prop] == 1) {
              return theObject;
            }
          }
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

    console.log(getObject(i18n));

    // Object.keys(i18n).forEach(function (k) {
    //   console.log(k);
    //   var entry = i18n[k];
    //   Object.keys(entry).forEach(function (a) {
    //     console.log(a);
    //   });
    // });

    // function i18nToJSON(i18nstring) {
    //   var i18n = {};
    //   i18n.map = function (lang, obj) {
    //     return JSON.stringify(obj);
    //   };
    //   return eval(i18nstring);
    // }

    // var x = 'i18n.map("it", {a: "123", b: "456"});';
    // var JSONstring = i18nToJSON(x);
    // console.log(JSONstring);
  });
}
