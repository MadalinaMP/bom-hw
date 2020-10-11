const languageOption = document.getElementsByName("language");

//store value in local Storage
window.localStorage.setItem("language", languageOption[0].value);

const initialRadioValue = window.localStorage.getItem("language");
console.log("value : " + initialRadioValue);

//pre-selected
if (languageOption[0].value === initialRadioValue) {
  languageOption[0].checked = true;
}

//option saved in local storage
languageOption[1].addEventListener("click", function () {
  if (languageOption[1].checked === true) {
    window.localStorage.setItem("language", languageOption[1].value);
    const roRadioValue = window.localStorage.getItem("language");
    console.log("value : " + roRadioValue);
    console.log(localStorage);
  }
});

languageOption[0].addEventListener("click", function () {
  if (languageOption[0].checked === true) {
    window.localStorage.setItem("language", languageOption[0].value);
    const enRadioValue = window.localStorage.getItem("language");
    console.log("value : " + enRadioValue);
    console.log(localStorage);
  }
});
