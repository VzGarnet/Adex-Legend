var slider = 1;
show(slider);

function plusSlides(n) {
  show(slider = n);
}

function show(n) {
  var j;
  var y = document.getElementsByClassName("maps-btle");
  var dots = document.getElementsByClassName("bt-br");
  if (n > y.length) {slider = 1}    
  if (n < 1) {slider = y.length}
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  for (j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace("", "");
  }
  y[slider-1].style.display = "block";  
  dots[slider-1].className += "";
}