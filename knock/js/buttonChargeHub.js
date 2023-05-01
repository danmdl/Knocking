const botonbrand42 = document.getElementById("brand42");
botonbrand42.addEventListener("click", popupOptions);

function popupOptions(){
    // Create the div element
   var popup = document.createElement("div");
   popup.classList.add("popup");
   // Create the button element 
   var btn1 = document.createElement("button");
   btn1.innerText = "Presentation";
   btn1.addEventListener("click", function(){
       //add here the action that you want
       window.open("./Recursos externos/presentation/ChargeHub.pdf", "_blank", "noopener");
   });
   var btn2 = document.createElement("button");
   btn2.innerText = "Specs Differences";
   btn2.addEventListener("click", function(){
       //add here the action that you want
       window.open("./Recursos externos/Others/ChargeHub-Comparison.png", "_blank", "noopener");
   });
   var btn3 = document.createElement("button");
   btn3.innerText = "X3 Manual";
   btn3.addEventListener("click", function(){
       //add here the action that you want
       window.open("./Recursos externos/manuals/ChargeHub/x3.pdf", "_blank", "noopener");
   });
   var btn4 = document.createElement("button");
   btn4.innerText = "X5 Manual";
   btn4.addEventListener("click", function(){
       //add here the action that you want
       window.open("./Recursos externos/manuals/ChargeHub/x5.pdf", "_blank", "noopener");
   });
   var btn5 = document.createElement("button");
   btn5.innerText = "X7 Manual";
   btn5.addEventListener("click", function(){
       //add here the action that you want
       window.open("./Recursos externos/manuals/ChargeHub/x7.pdf", "_blank", "noopener");
   });
   // Append the button to the div
   popup.appendChild(btn1);
   popup.appendChild(btn2);
   popup.appendChild(btn3);
   popup.appendChild(btn4);
   popup.appendChild(btn5);

   // Append the div to the body
   document.body.appendChild(popup);

   //create the close button
 var closeButton = document.createElement("buttonClose");
 closeButton.innerText = "X";
 closeButton.addEventListener("click", function(){
   document.body.removeChild(popup);
   document.body.classList.remove("blurred");
 });
 popup.appendChild(closeButton);

 //append the popup div to the body and add a class to the body element
 document.body.appendChild(popup);
 
 // Add the "blur" class to the parent container
 document.querySelector(".about").classList.add("blur");

 document.querySelector("buttonClose").addEventListener("click", function(){
   document.querySelector(".about").classList.remove("blur");
});

 
}



