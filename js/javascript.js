import lozad from 'lozad'

//right click message, include:
//onMouseDown="popupMsg('your message')"
//in whatever element you want it to display when rightclicked
function popupMsg(theMsg) {
alert(theMsg);
}

//Initializes lozad to lazy load all offscreen elements with a class of lozad
var lozad = require('lozad')

const observer = lozad(); // lazy loads elements with default selector as ".lozad"
observer.observe();