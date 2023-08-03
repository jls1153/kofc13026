// Initialize the Home Page
   var homeHtml = `<h1><center>Welcome to Council 13026</center></h1>
    <p><center><i>Serving Saint Francis Parish and the Litchfield NH Community</center></i></p>
    <div>
        <p style="backgound-image:url('HomeCrossBackground.jpg');">
        The Knights of Columbus' principles of Charity, Unity, Fraternity and Patriotism serve as the basis of the Order's core values which are Integrity, Professionalism, Excellence, and Respect.
        </p>
    </div>`;
    document.getElementById("display").innerHTML = (homeHtml);

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
//var sectionCont = document.querySelector(".container");
//console.log(sectionCont);
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
    var OfficersHtml = `<h1><center>2023-2024 Council Officers</center></h1>`;
    document.getElementById("display").innerHTML = (OfficersHtml);
    //sectionCont.textContent = "This is the officers page."
})

var homeId = document.getElementById("home");
homeId.addEventListener("click", function(){
 //   var homeHtml = `<h1><center>Welcome to Council 13026</center></h1>
  //  <p><center><i>Serving Saint Francis Parish and the Litchfield NH Community</center></i></p>`;
    //var current = document.getElementsByClassName("active");
    //console.log(current);
    document.getElementById("display").innerHTML = (homeHtml);
})