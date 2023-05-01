const botonbrand41 = document.getElementById("brand41");
botonbrand41.addEventListener("click", popupOptions);


function popupOptions(){
    // Create the div element
   var popup = document.createElement("div");
   popup.classList.add("popup");
   // Create the button element 

   var btn0 = document.createElement("button");
   btn0.innerText = "Presentation";
   btn0.addEventListener("click", function(){
       //add here the action that you want
       window.open("./Recursos externos/presentation/Jennifer-Adams.pdf", "_blank", "noopener");
   });
   var btn1 = document.createElement("button");
   btn1.innerText = "Youtube Channel";
   btn1.addEventListener("click", function(){
       //add here the action that you want
       window.open("https://www.youtube.com/@JenniferAdams/videos", "_blank", "noopener");
   });

   var btn2 = document.createElement("button");
   btn2.innerText = "Each offer";
   btn2.addEventListener("click", function(){
       //add here the action that you want
       window.open("./Recursos externos/Others/Jennifers-offers.png", "_blank", "noopener");
   });
   var btn3 = document.createElement("button");
   btn3.innerText = "None";
   btn3.addEventListener("click", function(){
       //add here the action that you want
       window.open("", "_blank", "noopener");
   });
   
   
   
   // Append the button to the div
   popup.appendChild(btn0);
   popup.appendChild(btn1);
   popup.appendChild(btn2);
   popup.appendChild(btn3);
   
  
   

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

