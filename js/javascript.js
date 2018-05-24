//right click message, include:
//onMouseDown="popupMsg('your message')"
//in whatever element you want it to display when rightclicked
function popupMsg(theMsg) {
alert(theMsg);
}

function buttonCycling() {
  var description = document.getElementById("freelancing-description");
  var price = document.getElementById("freelancing-price");

  description.textContent = "cycling text!";
  price.textContent = "invitation"

  document.getElementById('freelancing-image').src="images/cyclists/Frank-Kunkle.jpg";
}

function buttonPortraits() {
  var description = document.getElementById("freelancing-description");
  var price = document.getElementById("freelancing-price");

  description.textContent = "portrait text!";
  price.textContent = "$75"

  document.getElementById('freelancing-image').src="images/freelancing/portrait.jpg";
}

function buttonGraduation() {
  var description = document.getElementById("freelancing-description");
  var price = document.getElementById("freelancing-price");

  description.textContent = "graduation text!";
  price.textContent = "$75"

  document.getElementById('freelancing-image').src="images/freelancing/graduation.jpg";
}

function buttonEngagement() {
  var description = document.getElementById("freelancing-description");
  var price = document.getElementById("freelancing-price");

  description.textContent = "Engagement text!";
  price.textContent = "$125"
  
  document.getElementById('freelancing-image').src="images/freelancing/engagement.jpg";
}

function buttonWedding() {
  var description = document.getElementById("freelancing-description");
  var price = document.getElementById("freelancing-price");

  description.textContent = "wedding text!";
  price.textContent = "$75"
  
  document.getElementById('freelancing-image').src="images/freelancing/wedding.jpg";
}