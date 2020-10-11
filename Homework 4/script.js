const languageOption = document.getElementsByName("language");

//store value in session Storage
window.sessionStorage.setItem("language", languageOption[0].value);

const initialRadioValue = window.sessionStorage.getItem("language");
console.log("initial value : " + initialRadioValue);

//pre-selected
if (languageOption[0].value === initialRadioValue) {
  languageOption[0].checked = true;
}

//option saved in session storage
languageOption[1].addEventListener("click", function () {
  if (languageOption[1].checked === true) {
    window.sessionStorage.setItem("language", languageOption[1].value);
    const roRadioValue = window.sessionStorage.getItem("language");
    console.log("value : " + roRadioValue);
    console.log(sessionStorage);
  }
});

languageOption[0].addEventListener("click", function () {
  if (languageOption[0].checked === true) {
    window.sessionStorage.setItem("language", languageOption[0].value);
    const enRadioValue = window.sessionStorage.getItem("language");
    console.log("value : " + enRadioValue);
    console.log(sessionStorage);
  }
});
