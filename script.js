// Initialize the Home Page
   var homeHtml = `<h1><center>Welcome to Council 13026</center></h1>
    <p><center><i>Serving Saint Francis Parish and the Litchfield NH Community</center></i></p>
    <div>
        <p>
        The Knights of Columbus' principles of Charity, Unity, Fraternity and Patriotism serve as the basis of the Order's core values which are Integrity, Professionalism, Excellence, and Respect.
        </p>
    </div>`;
    document.getElementById("display").innerHTML = (homeHtml);

// Listener to toggle sidebar and container section
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
	document.querySelector("body").classList.toggle("active");
})
var officersId = document.getElementById("officers");
officersId.addEventListener("click", function(){
    var officersHtml = `<h1><center>2023-2024 Council Officers</center></h1>`;
    document.getElementById("display").innerHTML = (officersHtml);
})

var homeId = document.getElementById("home");
homeId.addEventListener("click", function(){
    document.getElementById("display").innerHTML = (homeHtml);
})