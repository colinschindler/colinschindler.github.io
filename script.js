function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}
      
var numContent = 15; // Update this number with amount of content in divs folder
var contentArr = [];

for(i=1;i<numContent+1;i++) {
  contentArr.push(i);
}

shuffle(contentArr);

function randContent() {
  if(contentArr.length != 0) {
    document.getElementById('content-generator').src = "divs/" + contentArr.pop() + ".html";
  } else {
    document.getElementById('content-generator').src = "divs/thatsallfolks.html";
  }
}