// Initialize the Home Page
   var homeHtml = `<h1><center>Welcome to Council 13026</center></h1>
    <p><center><i>Serving Saint Francis Parish and the Litchfield NH Community</center></i></p>
    <br>
    <div>
        <img src="HomeCross.jpg" width="300" height="300">
        <p>Founded in 2001, our Council strives to follow the Knights of Columbus' principles of Charity, Unity, Fraternity and Patriotism which serve as the basis of the Order's core values which are Integrity, Professionalism, Excellence, and Respect.</p>
    </div>`;
    document.getElementById("display").innerHTML = (homeHtml);

// Listener to toggle sidebar and container section
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
	document.querySelector("body").classList.toggle("active");
})
// Listener for Home Selection
var homeId = document.getElementById("home");
homeId.addEventListener("click", function(){
    document.getElementById("display").innerHTML = (homeHtml);
})
// Listener for Membership Selection
var membershipId = document.getElementById("membership");
membershipId.addEventListener("click", function(){
    var membershipHtml = `<h1><center>Membership</center></h1>`;
    document.getElementById("display").innerHTML = (membershipHtml);
})
// Listener for Officers Selection
var officersId = document.getElementById("officers");
officersId.addEventListener("click", function(){
    var officersHtml = `<h1><center>2023-2024 Council Officers</center></h1>`;
    document.getElementById("display").innerHTML = (officersHtml);
})
// Listener for Activities Selection
var activitiesId = document.getElementById("activities");
activitiesId.addEventListener("click", function(){
    var activitiesHtml = `<h1><center>Activities</center></h1>`;
    document.getElementById("display").innerHTML = (activitiesHtml);
})    
// Listener for Insurance Selection
var insuranceId = document.getElementById("insurance");
insuranceId.addEventListener("click", function(){
    var insuranceHtml = `<h1><center>Insurance</center></h1>`;
    document.getElementById("display").innerHTML = (insuranceHtml);
})
// Listener for Reports Selection
var reportsId = document.getElementById("reports");
reportsId.addEventListener("click", function(){
    var reportsHtml = `<h1><center>Reports</center></h1>`;
    document.getElementById("display").innerHTML = (reportsHtml);
})
// Listener for Links Selection
var linksId = document.getElementById("links");
linksId.addEventListener("click", function(){
    var linksHtml = `<h1><center>Links</center></h1>`;
    document.getElementById("display").innerHTML = (linksHtml);
})