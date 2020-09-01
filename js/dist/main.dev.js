"use strict";

document.queryselector('header > h1').innerText = "inspector clouse";
document.querySelector('header > h2').innerText = "this is chief inspector clouse speakig on the phone";

function reDisplay() {
  var windowSizes = "Window size is ".concat(window.innerWidth, " pixes wide by ").concat(window.innerHeight, " pixes tall.");
  var offset = "window offset is ".concat(window.screenX, " from the left edge and ").concat(window.screenY, " pixels from the top of the display.");
  var myWindow = document.querySelector('#myWindow').innertext = "".concat(windowSizes, " = \n ").concat(offset);
}

reDisplay();