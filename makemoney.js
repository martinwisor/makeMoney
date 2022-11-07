function myFunction(){
  let x = document.createElement("circle");
  let t = document.createTextNode("circle");
  x.appendChild(t);
  document.body.appendChild(x)
}


function removeCircle(){
 document.getElementById("circle").addEventListener(click);
 circle.remove()
}