const botonbrand49 = document.getElementById("brand49");
botonbrand49.addEventListener("click", popupOptions);


function popupOptions(){
  // Create the div element
 var popup = document.createElement("div");
 popup.classList.add("popup");
 // Create the button element 

var btn0 = document.createElement("button");
   btn0.innerText = "Presentation";
   btn0.addEventListener("click", function(){
       //add here the action that you want
       window.open("./Recursos externos/presentation/Sunday.pdf", "_blank", "noopener");
   });

   var btn1 = document.createElement("button");
   btn1.innerText = "How To Video";
   btn1.addEventListener("click", function(){
       //add here the action that you want
       window.open("https://www.youtube.com/watch?v=DoUqblCB_Wk", "_blank", "noopener");
   });

   var btn2 = document.createElement("button");
   btn2.innerText = "Ingredients";
   btn2.addEventListener("click", function(){
       //add here the action that you want
       window.open("https://www.getsunday.com/our-ingredients", "_blank", "noopener");
   });

  
   
   https://www.getsunday.com/
  
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
