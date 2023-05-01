const botonbrand22 = document.getElementById("brand22");
botonbrand22.addEventListener("click", popupOptions);

function popupOptions(){
  // div element
 var popup = document.createElement("div");
 popup.classList.add("popup");
 // button element 
 var btn1 = document.createElement("button");
 btn1.innerText = "Brands Website";
 btn1.addEventListener("click", function(){
     //action
     window.open("https://snuggiestore.com/", "_blank", "noopener");
 });
 var btn2 = document.createElement("button");
 btn2.innerText = "CBS Link";
 btn2.addEventListener("click", function(){
     //action
     window.open("https://cbsdeals.com/collections/snuggie?_pos=1&_psq=snuggire&_ss=e&_v=1.0", "_blank", "noopener");
 });
 var btn3 = document.createElement("button");
 btn3.innerText = "Coming Soon";
 btn3.addEventListener("click", function(){
   //action
   window.open("Coming Soon", "_blank", "noopener", "_blank", "noopener");     
 });
 var btn4 = document.createElement("button");
 btn4.innerText = "Coming Soon";
 btn4.addEventListener("click", function(){
   //action
   window.open("Coming Soon", "_blank", "noopener");     
 });
 

 
 
 // Append button to div
 popup.appendChild(btn1);
 popup.appendChild(btn2);
 popup.appendChild(btn3);
 popup.appendChild(btn4);



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