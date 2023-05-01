const botonOpciones10 = document.getElementById("brand10");
botonOpciones10.addEventListener("click", popupOptions);

function popupOptions(){
    // Create the div element
   var popup = document.createElement("div");
   popup.classList.add("popup");
   // Create the button element 
   var btn00 = document.createElement("button");
   btn00.innerText = "Presentation";
   btn00.addEventListener("click", function(){
       //add here the action that you want
       window.open("./Recursos externos/presentation/PowerProGo.pdf", "_blank", "noopener");
   });
   var btn0 = document.createElement("button");
   btn0.innerText = "Tech Specs";
   btn0.addEventListener("click", function(){
       //add here the action that you want
       window.open("./Recursos externos/Others/PowerProGo_specs.png", "_blank", "noopener");
   }); 
   var btn1 = document.createElement("button");
   btn1.innerText = "PowerPro Manual";
   btn1.addEventListener("click", function(){
       //add here the action that you want
       window.open("https://manuals.plus/limitless/powerpro-go-10000mah-portable-power-wall-charger-manual#axzz7rXJxw9F6", "_blank", "noopener");
   }); 
   var btn2 = document.createElement("button");
   btn2.innerText = "PowerPro Go video";
   btn2.addEventListener("click", function(){
       //add here the action that you want
       window.open("https://www.youtube.com/watch?v=FcK93uNBMMI", "_blank", "noopener");
   });
   var btn3 = document.createElement("button");
   btn3.innerText = "PowerPro 5 video";
   btn3.addEventListener("click", function(){
       //add here the action that you want
       window.open("https://www.youtube.com/watch?v=5wsmuEGiy8o", "_blank", "noopener");
   });
   var btn4 = document.createElement("button");
   btn4.innerText = "PowerPro 7 video";
   btn4.addEventListener("click", function(){
       //add here the action that you want
       window.open("https://www.youtube.com/watch?v=s7PMARGb5SI", "_blank", "noopener");
   });
   // Append the button to the div
   popup.appendChild(btn00);
   popup.appendChild(btn0);
   popup.appendChild(btn1);
   popup.appendChild(btn2);
   popup.appendChild(btn3);
   popup.appendChild(btn4);
  
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
  
  