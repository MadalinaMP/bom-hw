const languageOptions = document.getElementsByName("language");

//console logs to check
console.log("first button value : " + languageOptions[0].value); //en-US
console.log("second button value : " + languageOptions[1].value); //ro-RO

//set a cookie
document.cookie = "language=en-US";

//read cookies
const myCookies = document.cookie;

//console log to check
console.log("cookie : " + myCookies);

var splitCookie = window.document.cookie.split("=");

//console logs to check
console.log(splitCookie); //returns an array
console.log("cookieKey : " + splitCookie[0]);
console.log("cookieValue : " + splitCookie[1]);

//if en-US === en-US then check
if (languageOptions[0].value === splitCookie[1]) {
  languageOptions[0].checked = true;
}

languageOptions[1].addEventListener("click", function () {
  if (languageOptions[1].checked === true) {
    splitCookie[1] = languageOptions[1].value;
    var cookieObject = [];
    cookieObject.push({
      key: splitCookie[0],
      value: splitCookie[1],
    });
    console.log(splitCookie);
    console.log("cookie : " + myCookies);
  }
});
