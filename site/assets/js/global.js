// generator
let divGenerator = document.getElementById("generator--border");

let divCode = document.getElementById("generator--code");

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutationRecord) {
    divCode.innerText = `border-width: ${divGenerator.style.borderWidth}
                        border-radius: ${divGenerator.style.borderRadius}
                        border-color: ${divGenerator.style.borderColor}
                        border-style: ${divGenerator.style.borderStyle}
                        `;
  });
});

var target = document.getElementById("generator--border");
observer.observe(target, { attributes: true, attributeFilter: ["style"] });
