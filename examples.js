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
//changeTab-section1
function changeTab(evt, name, tabContent, tabLinks){
	'use strict';
	var i, tabContent, tabLinks;
	tabContent = document.getElementsByClassName("tabContent");
	for (i = 0; i < tabContent.length; i++){
		tabContent[i].style.display="none";
	}
	tabLinks = document.getElementsByClassName("tabLinks");
	for (i = 0; i < tabLinks.length; i++){
		tabLinks[i].className = tabLinks[i].className.replace(" active","");
	}
	document.getElementById(name).style.display = "block";
	evt.currentTarget.className += " active";
}
//changeLogo-section3
function changeLogo(evt, logo, container, logoLinks){
	'use strict';
	var i, container, logoLinks;
	container = document.getElementsByClassName("container");
	for (i = 0; i < container.length; i++){
		container[i].style.display="none";
	}
	logoLinks = document.getElementsByClassName("logoLinks");
	for (i = 0; i < logoLinks.length; i++){
		logoLinks[i].className = logoLinks[i].className.replace(" active","");
	}
	document.getElementById(logo).style.display = "block";
	evt.currentTarget.className += " active";
}
//changeMap-section4
function changeMap(evt, map, mapContent, mapLinks){
	'use strict';
	var i, mapContent, mapLinks;
	mapContent = document.getElementsByClassName("mapContent");
	for (i = 0; i < mapContent.length; i++){
		mapContent[i].style.display="none";
	}
	mapLinks = document.getElementsByClassName("mapLinks");
	for (i = 0; i < mapLinks.length; i++){
		mapLinks[i].className = mapLinks[i].className.replace(" active","");
	}
	document.getElementById(map).style.display = "block";
	evt.currentTarget.className += " active";
}
document.getElementsByClassName("defaultOpen")[0].click();
document.getElementsByClassName("defaultOpen")[1].click();
document.getElementsByClassName("defaultOpen")[2].click();

//open section1-aboutUs
if (window.matchMedia("(min-width: 1366px)").matches){
	function aboutUsOpenSide(){
	'use strict';
	var coverLayer = document.getElementsByClassName("coverLayer");
	coverLayer[0].style.opacity = "0";
	
	var extSide = document.getElementsByClassName("extSide");
	extSide[0].style.left = "calc(100%/3)";
	
	var closebtn = document.getElementsByClassName("closebtn");
	closebtn[1].style.display = "block";
}}
if (window.matchMedia("(min-width: 1920px)").matches){
	function aboutUsOpenSide(){
	'use strict';
	var coverLayer = document.getElementsByClassName("coverLayer");
	coverLayer[0].style.opacity = "0";
	
	var extSide = document.getElementsByClassName("extSide");
	extSide[0].style.left = "calc(100%/16*5)";
	
	var closebtn = document.getElementsByClassName("closebtn");
	closebtn[1].style.display = "block";
}}
//open section4-contactUs
if (window.matchMedia("(min-width: 320px)").matches){
		function contactOpenSide(){
		'use strict';
		var coverLayer = document.getElementsByClassName("coverLayer");
		coverLayer[1].style.opacity = "0";

		var extSide = document.getElementsByClassName("extSide");
		extSide[1].style.width = "100%";
		extSide[1].style.height = "50%";
		extSide[1].style.right = "0";
		extSide[1].style.bottom = "0";
			
		var mapContent = document.getElementsByClassName("mapContent");
		mapContent[0].style.width = "100%";
		mapContent[0].style.height = "100%";
		mapContent[1].style.width = "100%";
		mapContent[1].style.height = "100%";	

		var closebtn = document.getElementsByClassName("closebtn");
		closebtn[3].style.display = "block";
}}
if (window.matchMedia("(min-width: 1366px)").matches){
	function contactOpenSide(){
		'use strict';
		var coverLayer = document.getElementsByClassName("coverLayer");
		coverLayer[1].style.opacity = "0";

		var extSide = document.getElementsByClassName("extSide");
		extSide[1].style.left = "calc(100%/3)";

		var closebtn = document.getElementsByClassName("closebtn");
		closebtn[2].style.display = "block";
}}
if (window.matchMedia("(min-width: 1920px)").matches){
	function contactOpenSide(){
		'use strict';
		var coverLayer = document.getElementsByClassName("coverLayer");
		coverLayer[1].style.opacity = "0";

		var extSide = document.getElementsByClassName("extSide");
		extSide[1].style.left = "calc(100%/16*5)";

		var closebtn = document.getElementsByClassName("closebtn");
		closebtn[2].style.display = "block";
}}
//openForm-section4
if (window.matchMedia("(min-width: 320px)").matches){
	function openForm(){
		var formInfo = document.getElementsByClassName("formInfo");
		formInfo[0].style.height = "100%";
		formInfo[0].style.top = "0";
		var closebtn = document.getElementsByClassName("closebtn");
		closebtn[2].style.display = "block";
	}
	function setAutoScrolling(screen){
		var formInfo = document.getElementsByClassName("formInfo");
		formInfo[0].addEventListener('onmousedown',false);
		formInfo[0].addEventListener('onmousemove',false);
		formInfo[0].addEventListener('onmouseleave',false);
		formInfo[0].addEventListener('onmouseup',false);
	}
}
//close
if (window.matchMedia("(min-width: 320px)").matches){
	function closeSide(){
		var coverLayer = document.getElementsByClassName("coverLayer");
		coverLayer[0].style.opacity = "1";
		coverLayer[1].style.opacity = "1";

		var extSide = document.getElementsByClassName("extSide");
		extSide[0].style.left = "calc(100%/6*5)";
		extSide[1].style.width = "60px";
		extSide[1].style.height = "60px";
		extSide[1].style.right = "10px";
		extSide[1].style.bottom = "10px";
		
		var closebtn = document.getElementsByClassName("closebtn");
		closebtn[1].style.display = "none";
		closebtn[2].style.display = "none";
		closebtn[3].style.display = "none";
	}
	function closeForm(){
		var formInfo = document.getElementsByClassName("formInfo");
		formInfo[0].style.height = "0";
		formInfo[0].style.top = "100%";
	}
}
if (window.matchMedia("(min-width: 1366px)").matches){
	function closeSide(){	
		'use strict';
		var coverLayer = document.getElementsByClassName("coverLayer");
		coverLayer[0].style.opacity = "1";
		coverLayer[1].style.opacity = "1";

		var extSide = document.getElementsByClassName("extSide");
		extSide[0].style.left = "calc(100%/6*5)";
		extSide[1].style.left = "calc(100%/6*5)";
		
		var closebtn = document.getElementsByClassName("closebtn");
		closebtn[1].style.display = "none";
		closebtn[2].style.display = "none";
		}
}
if (window.matchMedia("(min-width: 1920px)").matches){
	function closeSide(){	
		'use strict';
		var coverLayer = document.getElementsByClassName("coverLayer");
		coverLayer[0].style.opacity = "1";
		coverLayer[1].style.opacity = "1";
	
		var extSide = document.getElementsByClassName("extSide");
		extSide[0].style.left = "calc(100%/16*14)";
		extSide[1].style.left = "calc(100%/16*14)";

		var closebtn = document.getElementsByClassName("closebtn");
		closebtn[1].style.display = "none";
		closebtn[2].style.display = "none";
		}
}
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

container.addEventListener('mousedown',(e)=>{
	isDown=true;
	container.classList.add('act');
	startX=e.pageX-container.offsetLeft;
	scrollLeft=container.scrollLeft;
});
container.addEventListener('mouseleave',()=>{
	isDown=false;
	container.classList.remove('act');
});
container.addEventListener('mouseup',()=>{
	isDown=false;
	container.classList.remove('act');
});
container.addEventListener('mousemove',(e)=>{
	if(!isDown) return; //stop th fn from running
	e.preventDefault();
	const x=e.pageX-container.offsetLeft;
	//console.log({x,startX});
	const walk=(x-startX)*3;
	container.scrollLeft=scrollLeft-walk;
});
//section4-Form
var elements = document.getElementsByTagName("input");
for (var i = 0; i < elements.length; i++) {
    elements[i].oninvalid = function(e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity(" ");
        }
    };
	elements[i].oninput = function(e) {
        e.target.setCustomValidity("");
    };
}
