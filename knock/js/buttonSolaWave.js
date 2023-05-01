const botonOpciones16 = document.getElementById("brand16");
botonOpciones16.addEventListener("click", popupOptions);

function popupOptions(){
     // div element
    var popup = document.createElement("div");
    popup.classList.add("popup");
    // button element 
    var btn0 = document.createElement("button");
    btn0.innerText = "Presentation red wand";
    btn0.addEventListener("click", function(){
        //action
        window.open("./Recursos externos/presentation/SolaWave.pdf", "_blank", "noopener");
    });
    var btn1 = document.createElement("button");
    btn1.innerText = "Red Wand- FAQs";
    btn1.addEventListener("click", function(){
        //action
        window.open("https://solawave.co/pages/faq", "_blank", "noopener");
    });
    var btn2 = document.createElement("button");
    btn2.innerText = "Red Wand- Tutorial Video";
    btn2.addEventListener("click", function(){
        //action
        window.open("https://www.youtube.com/watch?v=AdM6Dau60tc", "_blank", "noopener");
    });

    var btn3 = document.createElement("button");
    btn3.innerText = "Presentation Acne";
    btn3.addEventListener("click", function(){
       //add here the action that you want
       window.open("./Recursos externos/presentation/ByeAcne.pdf", "_blank", "noopener");
   });
   var btn4 = document.createElement("button");
   btn4.innerText = "Acne- How to (scroll down)";
   btn4.addEventListener("click", function(){
       //add here the action that you want
       window.open("https://solawave.co/collections/topicals-1/products/bye-acne-3-minute-acne-spot-treatment-red-light-therapy-blue-light-therapy-pimples-breakouts", "_blank", "noopener");
   });

   var btn5 = document.createElement("button");
   btn5.innerText = "Acne- Manual";
   btn5.addEventListener("click", function(){
       //add here the action that you want
       window.open("./Recursos externos/manuals/ByeAcneManual.pdf", "_blank", "noopener");
   });
    
    
    // Append button to div
    popup.appendChild(btn0);
    popup.appendChild(btn1);
    popup.appendChild(btn2);
    popup.appendChild(btn3);
    popup.appendChild(btn4);
    popup.appendChild(btn5);
    
 

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

