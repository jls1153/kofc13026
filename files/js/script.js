// Listener to toggle sidebar and section
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
	document.querySelector("body").classList.toggle("active");
    console.log(hamburger);
    console.log(officersId);
    console.log(sidebar);
})
var sectionCont = document.querySelector(".container");
console.log(sectionCont);

var officersId = document.getElementById("officers");
officersId.addEventListener("click", function(){
    sectionCont.textContent = "This is the officers page."
})
var homeId = document.getElementById("home");
homeId.addEventListener("click", function(){
    sectionCont.textContent = "This is the home page."
})
