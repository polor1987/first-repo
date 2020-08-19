//NAVBAR
const nav = document.querySelector("nav");

window.addEventListener("scroll", function(){
	nav.classList.toggle("downer",window.scrollY > 0);
})