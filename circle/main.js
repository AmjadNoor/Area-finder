function openNav(){
  document.getElementById('sidenav').style.width = "50vw";
}

function closeNav(){
  document.getElementById('sidenav').style.width = "0";
}
function check() {
  const fig = 'Circle';
  const pi = 22/7;
  let r = document.getElementById('inp1').value;
  const circleArea = pi * r ** 2;

  if (fig) {
    document.getElementById('para1').innerHTML = `The area of circle is ${circleArea}.`;
  }
}