const botonbrand34 = document.getElementById("brand34");
botonbrand34.addEventListener("click", popupOptions);

function popupOptions(){
  // div element
 var popup = document.createElement("div");
 popup.classList.add("popup");
 // button element 

 var btn1 = document.createElement("button");
 btn1.innerText = "RC960-Power Station";
 btn1.addEventListener("click", function(){
     //action
     window.open("./Recursos externos/manuals/RushCharge/RC960-Power Station.pdf", "_blank", "noopener");
 });
 var btn2 = document.createElement("button");
 btn2.innerText = "RC45-Hinge";
 btn2.addEventListener("click", function(){
     //action
     window.open("./Recursos externos/manuals/RushCharge/RC45-Hinge.pdf", "_blank", "noopener");
 });
 var btn3 = document.createElement("button");
 btn3.innerText = "RC25-Air";
 btn3.addEventListener("click", function(){
   //action
   window.open("./Recursos externos/manuals/RushCharge/RC25-Air.pdf", "_blank", "noopener", "_blank", "noopener");     
 });
 var btn4 = document.createElement("button");
 btn4.innerText = "UV Light Sanitizer";
 btn4.addEventListener("click", function(){
   //action
   window.open("./Recursos externos/manuals/RushCharge/UVC-UV-Light-Sanitizer.pdf", "_blank", "noopener");     
 });
 var btn5 = document.createElement("button");
 btn5.innerText = "RC-Max-Sepcs";
 btn5.addEventListener("click", function(){
     //action
   window.open("./Recursos externos/manuals/RushCharge/Max-specs.png", "_blank", "noopener");
 });
 var btn6 = document.createElement("button");
 btn6.innerText = "RC-Trident-Specs";
 btn6.addEventListener("click", function(){
     //action
   window.open("./Recursos externos/manuals/RushCharge/Trident-specs.png", "_blank", "noopener");
 });
 var btn7 = document.createElement("button");
 btn7.innerText = "RC Quad Station-Specs";
 btn7.addEventListener("click", function(){
     //action
   window.open("./Recursos externos/manuals/RushCharge/RC-Squad-Manual.pdf", "_blank", "noopener");
 });

 
 
 // Append button to div
 popup.appendChild(btn1);
 popup.appendChild(btn2);
 popup.appendChild(btn3);
 popup.appendChild(btn4);
 popup.appendChild(btn5);
 popup.appendChild(btn6);
 popup.appendChild(btn7);


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