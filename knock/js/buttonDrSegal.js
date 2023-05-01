const botonbrand38 = document.getElementById("brand38");
botonbrand38.addEventListener("click", popupOptions);

function popupOptions(){
    // div element
   var popup = document.createElement("div");
   popup.classList.add("popup");

   // button element 
   var btn1 = document.createElement("button");
   btn1.innerText = "Presentation";
   btn1.addEventListener("click", function(){
       //action
       window.open("./Recursos externos/presentation/DrSegal.pdf", "_blank", "noopener");
   });
   var btn2 = document.createElement("button");
   btn2.innerText = "Faqs";
   btn2.addEventListener("click", function(){
       //action
       window.open("https://www.drsegals.com/pages/faqs", "_blank", "noopener");
   });
   
   var btn3 = document.createElement("button");
   btn3.innerText = "YouTube channel";
   btn3.addEventListener("click", function(){
     //action
     window.open("https://www.youtube.com/@dr.segals664/videos", "_blank", "noopener", "_blank", "noopener");     
   });

   
   
   
  
   
   // Append button to div
   popup.appendChild(btn1);
   popup.appendChild(btn2);
   popup.appendChild(btn3);
   
   
   
  
  
  
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