function openNav() {
 document.getElementById('sidenav').style.width = "50vw";
}

function closeNav() {
 document.getElementById('sidenav').style.width = "0";
}

function check() {
 const fig = "Rectangle";
 let l = document.getElementById('inp1').value;
 let w = document.getElementById('inp2').value;
 const rectangleArea = l * w;
 if (fig) {
  document.getElementById('para1').innerHTML = `The area of rectangle is ${rectangleArea}.`
 }
}