// New code
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const hamburger = document.querySelector(".hamburger");
const homeId = document.getElementById("home");
const membershipId = document.getElementById("membership");
const officersId = document.getElementById("officers");
const activitiesId = document.getElementById("activities");
const insuranceId = document.getElementById("insurance");

window.addEventListener('load', function() {
  showSection(section1);
});
function showSection(section) {
  section1.style.display = 'none';
  section2.style.display = 'none';
  section3.style.display = 'none';
  section.style.display = 'block';
}


// Listener to toggle sidebar and container section
hamburger.addEventListener("click", function(){
	document.querySelector("body").classList.toggle("active");
})
// Listener for Home Selection
homeId.addEventListener("click", function(){
    showSection(section1);
})
// Listener for Membership Selection
membershipId.addEventListener("click", function(){
    showSection(section2);
})
// Listener for Officers Selection
officersId.addEventListener("click", function(){
    showSection(section3);
})
// Listener for Activities Selection

activitiesId.addEventListener("click", function(){
    showSection(section4);
})    
// Listener for Insurance Selection
insuranceId.addEventListener("click", function(){
     showSection(section5);
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