const botonbrand23 = document.getElementById("brand23");
botonbrand23.addEventListener("click", popupOptions);

function popupOptions(){
  // div element
 var popup = document.createElement("div");
 popup.classList.add("popup");
 // button element 
 var btn1 = document.createElement("button");
 btn1.innerText = "Brands Website";
 btn1.addEventListener("click", function(){
     //action
     window.open("https://www.tracgrabber.eu/", "_blank", "noopener");
 });
 var btn2 = document.createElement("button");
 btn2.innerText = "CBS Link";
 btn2.addEventListener("click", function(){
     //action
     window.open("https://cbsdeals.com/collections/trac-grabber", "_blank", "noopener");
 });
 var btn3 = document.createElement("button");
 btn3.innerText = "FAQs";
 btn3.addEventListener("click", function(){
   //action
   window.open("https://www.tracgrabber.eu/pages/faq", "_blank", "noopener", "_blank", "noopener");     
 });
 var btn4 = document.createElement("button");
 btn4.innerText = "Youtube Channel";
 btn4.addEventListener("click", function(){
   //action
   window.open("https://www.youtube.com/@tracgrabbereu8317/videos", "_blank", "noopener");     
 });
 var btn5 = document.createElement("button");
 btn5.innerText = "More Videos";
 btn5.addEventListener("click", function(){
     //action
   window.open("https://www.tracgrabber.com/videos/", "_blank", "noopener");
 });
 var btn6 = document.createElement("button");
 btn6.innerText = "Tech Specs";
 btn6.addEventListener("click", function(){
     //action
   window.open("https://www.tracgrabber.com/technical-information/", "_blank", "noopener");
 });

 
 
 // Append button to div
 popup.appendChild(btn1);
 popup.appendChild(btn2);
 popup.appendChild(btn3);
 popup.appendChild(btn4);
 popup.appendChild(btn5);
 popup.appendChild(btn6);


 // Append div to body
 document.body.appendChild(popup);

 //close button
var closeButton = document.createElement("buttonClose");
closeButton.innerText = "X";
closeButton.addEventListener("click", function(){
 document.body.removeChild(popup);
 document.body.classList.remove("blurred");
});
popup.appendChild(closeButton);

//append the popup div to the body
document.body.appendChild(popup);

// Add blur to parent container
document.querySelector(".about").classList.add("blur");

document.querySelector("buttonClose").addEventListener("click", function(){
 document.querySelector(".about").classList.remove("blur");
});


}