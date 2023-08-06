// New code
const section1 = document.getElementById('section1');
window.addEventListener('load', function() {
  showSection(section1);
});
function showSection(section) {
  section1.style.display = 'none';
  section2.style.display = 'none';
  section3.style.display = 'none';
  section.style.display = 'block';
}


// Initialize the Home Page
  var homeHtml = `<h1><center>Welcome to Council 13026</center></h1>
    <p><center><i>Serving Saint Francis Parish and the Litchfield NH Community</center></i></p>
    <div class="image">
        <img src="HomeCross2.jpg">
    </div>
    <div class="text">
        <p>Founded in 2001, our Council strives to follow the Knights of Columbus' principles of Charity, Unity, Fraternity and Patriotism which serve as the basis of the Order's core values which are Integrity, Professionalism, Excellence, and Respect.</p>
    </div>`;
    //document.getElementById("display").innerHTML = (homeHtml);

// Listener to toggle sidebar and container section
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
	document.querySelector("body").classList.toggle("active");
})
// Listener for Home Selection
//var homeId = document.getElementById("home");
//var homeId = document.getElementById("section1");
//homeId.addEventListener("click", function(){
section1.addEventListener("click", function(){
    //document.getElementById("display").innerHTML = (homeHtml);
    showSection(section1);
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