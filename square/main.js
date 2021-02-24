function openNav() {
 document.getElementById('sidenav').style.width = "50vw";
}

function closeNav() {
 document.getElementById('sidenav').style.width = "0";
}

function check() {
 const fig = "Square";
 let s = document.getElementById('inp1').value;
 const squareArea = s ** 2;

 if (fig) {
  document.getElementById('para1').innerHTML = `The area of square is ${squareArea}.`
 }
}