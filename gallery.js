if((window.matchMedia('(min-width: 320px) and (max-width: 1023px)').matches) && (window.innerHeight < window.innerWidth)){
	document.body.innerHTML = "Please view in Potrait!";
}

//Menu bar
if (window.matchMedia("(min-width: 120px)").matches){
	function openMenu() {
		'use strict';
		document.getElementById("menu").style.width = "100%";
		document.getElementById("menu").style.height = "100%";
}}
if (window.matchMedia("(min-width: 1366px)").matches){
	function openMenu() {
		'use strict';
		document.getElementById("menu").style.width = "calc(100%/6)";
}}
if (window.matchMedia("(min-width: 1920px)").matches){
	function openMenu() {
		'use strict';
		document.getElementById("menu").style.width = "calc(100%/16*2)";
}}
if (window.matchMedia("(min-width: 120px)").matches){
	function closeMenu() {
		'use strict';
		document.getElementById("menu").style.width = "0";
		document.getElementById("menu").style.height = "0%";
}}
if (window.matchMedia("(min-width: 1366px)").matches || window.matchMedia("(min-width: 1920px)").matches){
	function closeMenu() {
		'use strict';
  	document.getElementById("menu").style.width = "0";
}}
//section2-galleryExtendSlide
const items=document.querySelector('.items');
const container=document.querySelector('.container');
var isDown=false;
var startX;
var scrollLeft;
items.addEventListener('mousedown',(e)=>{
	isDown=true;
	items.classList.add('act');
	startX=e.pageX-items.offsetLeft;
	scrollLeft=items.scrollLeft;
});
items.addEventListener('mouseleave',()=>{
	isDown=false;
	items.classList.remove('act');
});
items.addEventListener('mouseup',()=>{
	isDown=false;
	items.classList.remove('act');
});
items.addEventListener('mousemove',(e)=>{
	if(!isDown) return; //stop th fn from running
	e.preventDefault();
	const x=e.pageX-items.offsetLeft;
	//console.log({x,startX});
	const walk=(x-startX)*3;
	items.scrollLeft=scrollLeft-walk;
});
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