const languageOption = document.getElementsByName("language");

//console logs to check
console.log("first button value : " + languageOption[0].value); //en-US
console.log("second button value : " + languageOption[1].value); //ro-RO

//set a cookie
document.cookie = "language=en-US";

//read cookies
const myCookies = document.cookie;

//console log to check
console.log("cookies : " + myCookies);

var cookiePart = window.document.cookie.split("=");

//console logs to check
console.log(cookiePart); //returns an array
console.log("cookieKey : " + cookiePart[0]);
console.log("cookieValue : " + cookiePart[1]);

//create an empty cookieObject
var cookieObject = [];

//if en-US === en-US then check
if (languageOption[0].value === cookiePart[1]) {
  languageOption[0].checked = true;
}

languageOption[1].addEventListener("click", function () {
  if (languageOption[1].checked === true) {
    cookiePart[1] = languageOption[1].value;
    cookieObject.push({
      key: cookiePart[0],
      value: cookiePart[1],
    });
    console.log(cookiePart);
    document.cookie = cookiePart[0] + "=" + cookiePart[1];
    console.log(document.cookie);
  }
});

languageOption[0].addEventListener("click", function () {
  if (languageOption[0].checked === true) {
    cookiePart[1] = languageOption[0].value;
    cookieObject.push({
      key: cookiePart[0],
      value: cookiePart[1],
    });
    console.log(cookiePart);
    document.cookie = cookiePart[0] + "=" + cookiePart[1];
    console.log(document.cookie);
  }
});
