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
    //var current = document.getElementsByClassName("active");
    //console.log(current);
    //var options = document.getElementsByClassName("options");
    //console.log(options);
    sectionCont.textContent = "This is the officers page."
})

var homeId = document.getElementById("home");
homeId.addEventListener("click", function(){
    console.log(homeId);
    var homeHtml = `<p> Welcome to Council 13026 </p>`;
    //var current = document.getElementsByClassName("active");
    //console.log(current);

    sectionCont.textContent = (homeHtml);

    document.getElementById("display").innerHTML = (homeHtml);
    //const homeText = document.querySelector("#homeText").innerHTML;
    //console.log(homeText);
    //container.innerHTML = homeText;
})