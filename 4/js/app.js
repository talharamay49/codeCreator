function openNav() {
  document.getElementById("headerNav").style.width = "100%";
  document.getElementById("headerNav").style.display = "block";
}

function closeNav() {
  document.getElementById("headerNav").style.width = "0";
  document.getElementById("headerNav").style.display = "none";
}
function openList() {
  document.getElementById("list").style.display = "block";
  document.getElementById("grid").style.display = "none";
}
function openGrid() {
  document.getElementById("grid").style.display = "flex";
  document.getElementById("list").style.display = "none";
}

var slider = document.getElementById('range');
var output = document.getElementById('end');

output.innerHTML = slider.value;
slider.oninput = function(){
  output.innerHTML = this.value;
}

slider.addEventListener('mousemove' , function(){
  var x = slider.value;
  var color = slider.value;
})