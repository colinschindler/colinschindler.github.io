//right click message, include:
//onMouseDown="popupMsg('your message')"
//in whatever element you want it to display when rightclicked
function popupMsg(theMsg) {
alert(theMsg);
}

function buttonCycling() {
  var description = document.getElementById("freelancing-description");
  var price = document.getElementById("freelancing-price");
  var instagram = document.getElementById("instagram-link");
  var instagramAnchor = price.getElementsByTagName('a');

  description.textContent = "An instagram project to showcase the cycling characters of Charleston and the bikes they ride.";
  price.textContent = "Follow Along";
  instagram.href = "https://www.instagram.com/charlestoncyclists/";
  instagram.text = "@charlestoncyclists";

  document.getElementById('freelancing-image').src="images/cyclists/Frank-Kunkle.jpg";
}

function buttonPortraits() {
  var description = document.getElementById("freelancing-description");
  var price = document.getElementById("freelancing-price");
  var instagram = document.getElementById("instagram-link");
  var instagramAnchor = price.getElementsByTagName('a');

  description.textContent = "Portrait sessions typically run an hour, allowing for a few locations and generally result in 5-10 frame-worthy shots.";
  price.textContent = "$75";
  instagram.href = "mailto:schindlercolin@gmail.com";
  instagram.text = "Book Session";

  document.getElementById('freelancing-image').src="images/freelancing/portraits.jpg";
}

function buttonGraduation() {
  var description = document.getElementById("freelancing-description");
  var price = document.getElementById("freelancing-price");
  var instagram = document.getElementById("instagram-link");
  var instagramAnchor = price.getElementsByTagName('a');

  description.textContent = "High school and college seniors benefit from a set of high quality images of their young and free selfs.";
  price.textContent = "$75"
  instagram.href = "mailto:schindlercolin@gmail.com";
  instagram.text = "Book Session";

  document.getElementById('freelancing-image').src="images/freelancing/graduation.jpg";
}

function buttonEngagement() {
  var description = document.getElementById("freelancing-description");
  var price = document.getElementById("freelancing-price");

  description.textContent = "Charleston is the perfect backdrop to capture the start of your relationship. ";
  price.textContent = "$100/hr"
  
  document.getElementById('freelancing-image').src="images/freelancing/engagement.jpg";
}

function buttonWedding() {
  var description = document.getElementById("freelancing-description");
  var price = document.getElementById("freelancing-price");

  description.textContent = "Work with a flexible photographer to capture what matters on one of the most important days of your life.";
  price.textContent = "To Be Determined"
  
  document.getElementById('freelancing-image').src="images/freelancing/wedding.jpg";
}