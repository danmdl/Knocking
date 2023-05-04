const botonhotnews2 = document.getElementById("hotnews2");
botonhotnews2.addEventListener("click", popupOptions);

function popupOptions(){
    // Create the div element
   var popup = document.createElement("div");
   popup.classList.add("popup");
   // Create the button element 
   var btn1 = document.createElement("button");
   btn1.innerText = "Presentation";
   btn1.addEventListener("click", function(){
       //add here the action that you want
       window.open("./Recursos externos/presentation/WowSports.pdf", "_blank", "noopener");
   });
   var btn2 = document.createElement("button");
   btn2.innerText = "Youtube Channel";
   btn2.addEventListener("click", function(){
       //add here the action that you want
       window.open("https://www.youtube.com/@worldofwatersports/videos", "_blank", "noopener");
   });

   

   
   
   
   // Append the button to the div
   popup.appendChild(btn1);
   popup.appendChild(btn2);
   
   
   

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



