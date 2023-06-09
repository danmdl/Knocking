const botonOpciones15 = document.getElementById("brand15");
botonOpciones15.addEventListener("click", popupOptions);

function popupOptions(){
     // div element
    var popup = document.createElement("div");
    popup.classList.add("popup");
    // button element 
    var btn1 = document.createElement("button");
    btn1.innerText = "FAQs";
    btn1.addEventListener("click", function(){
        //action
        window.open("https://buymymagiccarpet.com/pages/faqs", "_blank", "noopener");
    });
    var btn2 = document.createElement("button");
    btn2.innerText = "Unboxing instructions Video";
    btn2.addEventListener("click", function(){
        //action
        window.open("https://www.youtube.com/watch?v=Bq2LBW9WGgI", "_blank", "noopener");
    });
    var btn3 = document.createElement("button");
    btn3.innerText = "Brillá Lamp FAQs";
    btn3.addEventListener("click", function(){
      //action
      window.open("https://buymymagiccarpet.com/products/brilla-self-charging-power-outage-everyday-lamp-24", "_blank", "noopener");
        
    });
    var btn4 = document.createElement("button");
    btn4.innerText = "Brillá Lamp User Manual";
    btn4.addEventListener("click", function(){
      //action
      window.open("./Recursos externos/manuals/Brilla Lamp User manual.pdf", "_blank", "noopener");
    });
        
    
    
    // Append button to div
    popup.appendChild(btn1);
    popup.appendChild(btn2);
    popup.appendChild(btn3);
    popup.appendChild(btn4);
    
 

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

