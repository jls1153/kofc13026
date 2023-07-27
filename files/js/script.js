// Listener to toggle sidebar and section
var hamburger = document.querySelector(".hamburger");
var sidebar = document.querySelector(".sidebar");
var officersId = document.getElementById("officers");
hamburger.addEventListener("click", function(){
	document.querySelector("body").classList.toggle("active");
    console.log(hamburger);
    console.log(officersId);
    console.log(sidebar);
})
officersId.addEventListener("click", function(){
var sectionCont = document.querySelector(".container");
    console.log(sectionCont);
    sectionCont.textContent = "This is the officers page."
})
