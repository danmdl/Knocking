const botonOpciones2 = document.getElementById("brand2");
botonOpciones2.addEventListener("click", popupOptions);

function popupOptions(){
    // Create the div element
     var popup = document.createElement("div");
     popup.classList.add("popup");
     // Create the button element 
     var btn1 = document.createElement("button");
     btn1.innerText = "All Manuals";
     btn1.addEventListener("click", function(){
         //add here the action that you want
         window.open("https://www.reathlete.com/pages/user-manual", "_blank", "noopener");
     });
     var btn2 = document.createElement("button");
     btn2.innerText = "Unofficial Air C -video";
     btn2.addEventListener("click", function(){
         //add here the action that you want
         window.open("https://www.youtube.com/watch?v=EHLeXwrpYkM", "_blank", "noopener");
     });
     var btn3 = document.createElement("button");
     btn3.innerText = "Spina short video";
     btn3.addEventListener("click", function(){
         //add here the action that you want
         window.open("https://www.youtube.com/shorts/6wm-I_RgCkI", "_blank", "noopener");
     });
     var btn4 = document.createElement("button");
     btn4.innerText = "YoutubeChannel";
     btn4.addEventListener("click", function(){
         //add here the action that you want
         window.open("https://www.youtube.com/@REATHLETE/videos", "_blank", "noopener");
     });

     var btn5 = document.createElement("button");
     btn5.innerText = "Air-C pro VS Air-C heat";
     btn5.addEventListener("click", function(){
         //add here the action that you want
         window.open("./Recursos externos/Others/pro-vs-heat.jpg", "_blank", "noopener");
     });
     var btn6 = document.createElement("button");
     btn6.innerText = "Counto Scale";
     btn6.addEventListener("click", function(){
         //add here the action that you want
         window.open("./Recursos externos/manuals/Counto manual v1-1.pdf", "_blank", "noopener");
     });
     var btn7 = document.createElement("button");
     btn7.innerText = "DrinQ";
     btn7.addEventListener("click", function(){
         //add here the action that you want
         window.open("https://www.reathlete.com/products/drinq", "_blank", "noopener");
     });
     var btn8 = document.createElement("button");
     btn8.innerText = "Necka: Specs+Videos (scroll down)";
     btn8.addEventListener("click", function(){
         //add here the action that you want
         window.open("https://www.reathlete.com/products/necka-neck-massager", "_blank", "noopener");
     });
     var btn9 = document.createElement("button");
     btn9.innerText = "Necka: What's included?";
     btn9.addEventListener("click", function(){
         //add here the action that you want
         window.open("./Recursos externos/Others/NeckaIncluded.png", "_blank", "noopener");
     });

     // Append the button to the div
     popup.appendChild(btn1);
     popup.appendChild(btn2);
     popup.appendChild(btn3);
     popup.appendChild(btn4);
     popup.appendChild(btn5);
     popup.appendChild(btn6);
     popup.appendChild(btn7);
     popup.appendChild(btn8);
     popup.appendChild(btn9);


     
 
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








