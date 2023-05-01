const botonbrand45 = document.getElementById("brand45");
botonbrand45.addEventListener("click", popupOptions);


function popupOptions(){
  // Create the div element
 var popup = document.createElement("div");
 popup.classList.add("popup");
 // Create the button element 

var btn0 = document.createElement("button");
   btn0.innerText = "Presentation";
   btn0.addEventListener("click", function(){
       //add here the action that you want
       window.open("./Recursos externos/presentation/RemoteRetriever.pdf", "_blank", "noopener");
   });

   var btn1 = document.createElement("button");
   btn1.innerText = "Faqs";
   btn1.addEventListener("click", function(){
       //add here the action that you want
       window.open("https://theremoteretriever.net/faq", "_blank", "noopener");
   });
   var btn2 = document.createElement("button");
   btn2.innerText = "How to PAIR";
   btn2.addEventListener("click", function(){
       //add here the action that you want
       window.open("https://www.youtube.com/watch?v=gGQ1amoA4LM", "_blank", "noopener");
   });
   
   

   https://www.youtube.com/shorts/wGTvwJciJ-Y

  
   // Append the button to the div
   popup.appendChild(btn0);
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
