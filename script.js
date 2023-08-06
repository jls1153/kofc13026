// New code
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const hamburger = document.querySelector(".hamburger");
const homeId = document.getElementById("home");
const membershipId = document.getElementById("membership");
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
    var insuranceHtml = `<h1><center>Insurance</center></h1>
        <br>
        <p>Guided by our Catholic faith, we are on a mission to help expand
        your financial security at every step of your family's journey.</p>
        <br>
        <div class="insOptions">
            <ul>
                <li>Life Insurance</li>
                <li>Disability Income Insurance</li>
                <li>Long-Term Care Insurance</li>
                <li>Retirement Annuities</li>
                <li>And more...</li> 
                </ul>
        </div>
        <br>
        <p>Call your local agent today!</p>
        <br>
        <div class=<insContact">
            <ul>
                <li>Kevin Brown</li>
                <li>Field Agent</li>
                <li>Office: (603)305-0204</li>
                <li>kevin.brown@kofc.org</li>
            </ul>
        </div>`;
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