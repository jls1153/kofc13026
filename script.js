// Listener to toggle sidebar and section
var sidebar = document.querySelector(".sidebar");
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
	document.querySelector("body").classList.toggle("active");
    console.log(hamburger);
    console.log(officersId);
    console.log(sidebar);
})
var officersId = document.getElementById("officers");
var sectionCont = document.querySelector(".container");
console.log(sectionCont);
officersId.addEventListener("click", function(){
    // Get the container element
//var sidebarContainer = document.getElementById("sidebar");


// Get all options with class="sidebar" inside the container
//var options = sidebarContainer.getElementsByClassName("btn");
    //document.querySelector("officers").classList.toggle("active");
    //document.querySelector("home").classList.toggle("");
    sectionCont.textContent = "This is the officers page."
})

homeId.addEventListener("click", function(){
    var homeId = document.getElementById("home");
    console.log(homeId);
    sectionCont.textContent = "This is the home page."
})