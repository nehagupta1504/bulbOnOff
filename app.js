let bulbOnOff = 0;

function buttonOnOFF() {
  var x = document.querySelectorAll(".bulb");
  if (bulbOnOff == 0) {
    for (let i = 0; i < x.length; i++) {
      x[i].src = "assets/onsamesize.jpg";
    }
    bulbOnOff = 1;
  } else {
    for (let i = 0; i < x.length; i++) {
      x[i].src = "./assets/off_samesize.jpg";
    }
    bulbOnOff = 0;
  }
}
