const botonOpciones21 = document.getElementById("brand21");
botonOpciones21.addEventListener("click", popupOptions);

function popupOptions(){
   // div element
   var popup = document.createElement("div");
   popup.classList.add("popup");
   // button element 
   var btn1 = document.createElement("button");
   btn1.innerText = "User Manual";
   btn1.addEventListener("click", function(){
       //action
       window.open("https://cdn4.sharperimage.com/si/pdf/manuals/207183.pdf", "_blank", "noopener");
   });
   var btn2 = document.createElement("button");
   btn2.innerText = "Coming Soon!";
   btn2.addEventListener("click", function(){
       //action
       window.open("/proyecto-knocking/knock/logo/coming soon.png");
   });
   

      
   // Append button to div
   popup.appendChild(btn1);
   popup.appendChild(btn2);
   
  
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

