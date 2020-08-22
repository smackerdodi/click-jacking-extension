var client = new XMLHttpRequest();
client.open("HEAD", document.location , false);
client.send(null);
var clickJacking = client.getAllResponseHeaders();
var upper = clickJacking.toUpperCase()
if (upper.includes("X-FRAME-OPTIONS") !== true){
   document.body.style.border = "5px solid red";
} 


