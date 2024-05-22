function downloadFile(url, name){
var link = document.createElement("a");
link.href = url;
link.download = name;
document.body.appendChild(link);
link.click();
link.remove();
}
function viewFile(url){
window.open(url);
}
function changeFavicon(url){
  var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = url;
}
changeFavicon("/favicon.png");
document.title = "SpaceTime Makerspace";
var currenturl = location.href.replace(location.origin + "/", "");
if(currenturl == ""){
  currenturl = "index.html";
}
var links = document.querySelectorAll("a");
for(var i = 0; i < links.length; i++){
if(links[i].href == currenturl){
alert(links[i]);
links[i].style.fontWeight = "bold";
}
}

let eventElements = document.querySelectorAll('.event, .workshop');

eventElements.forEach(function(element) {
  element.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

let testimonialElements = document.querySelectorAll('.testimonial');

testimonialElements.forEach(function(element) {
  element.addEventListener('mouseover', function() {
    this.classList.add('highlight');
  });

  element.addEventListener('mouseout', function() {
    this.classList.remove('highlight');
  });
});
document.addEventListener("DOMContentLoaded", (event) => {
    let images = document.querySelectorAll('.imageContainer');
    images.forEach(function(element) {
      element.style.display='block';
    });
  document.querySelector("header").outerHTML = `<header>
	  <center><img src="logo.png" style="margine: 0; border: none;" width="250"></center>
    <h1>Welcome to SpaceTime Makerspace</h1>
    <h4><q>Our Space and Your Time = Perfection</q></h4>
    <nav>
      <ul>
	<li><a href="index.html"> <button type="button">Home</button></a></li>
        <li><a href="about.html"> <button type="button">About Us</button></a></li>
        <li><a href="equipment.html"> <button type="button">Equipment</button></a></li>
        <li><a href="events.html"> <button type="button">Events</button></a></li>
	<li><a href="workshops.html"> <button type="button">Workshops</button></a></li>
	<li><a href="classes.html"><button type="button">Classes</button></a></li>
	<li><a href="memberships.html"> <button type="button">Membership</button></a></li>
	<li><a href="calendar.html"> <button type="button">Calendar</button></a></li>
        <li><a href="contact.html"> <button type="button">Contact Us</button></a></li>
	<li><a href="citations.html"> <button type="button">Sources</button></a></li>
 	<li><a href="documentation.html"> <button type="button">Documents</button></a></li>
      </ul>
    </nav>
  </header>`;
    const downloadButtons = document.querySelectorAll(".download");
    downloadButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const fileName = this.getAttribute("name") + ".pdf";
            console.log("Downloading: " + fileName);
	    downloadFile("/" + fileName, fileName);
        });
    });
	    const viewButtons = document.querySelectorAll(".view");
    viewButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const fileName = this.getAttribute("name") + ".pdf";
            console.log("Viewing: " + fileName);
	    viewFile("/" + fileName);
        });
    });
	
});
