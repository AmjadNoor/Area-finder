function openNav(){
  document.getElementById('sidenav').style.width = "50vw";
}

function closeNav(){
  document.getElementById('sidenav').style.width = "0";
}
function check(){
  const fig = "Triangle"
  let b = document.getElementById('inp1').value;
  let h = document.getElementById('inp2').value;
  const triangleArea = (b * h) / 2;
  if(fig){
    document.getElementById('para1').innerHTML = `The area of triangle is ${triangleArea}.`
  }
}