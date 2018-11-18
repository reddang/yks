//Menu bar
if (window.matchMedia("(min-width: 120px)").matches){
	function openMenu() {
		'use strict';
		document.getElementById("menu").style.width = "100%";
		document.getElementById("menu").style.height = "100%";
}}
if (window.matchMedia("(min-width: 1024px)").matches){
	function openMenu() {
		'use strict';
		document.getElementById("menu").style.width = "calc(100%/6)";
}}
if (window.matchMedia("(min-width: 1920px)").matches){
	function openMenu() {
		'use strict';
		document.getElementById("menu").style.width = "calc(100%/16*3)";
}}
if (window.matchMedia("(min-width: 120px)").matches){
	function closeMenu() {
		'use strict';
		document.getElementById("menu").style.width = "0";
		document.getElementById("menu").style.height = "0%";
}}
if (window.matchMedia("(min-width: 1024px)").matches || window.matchMedia("(min-width: 1920px)").matches){
	function closeMenu() {
		'use strict';
  	document.getElementById("menu").style.width = "0";
}}
//slideshow-gallery
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeSlide";
}


