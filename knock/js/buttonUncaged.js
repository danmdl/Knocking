const botonOpciones8 = document.getElementById("brand8");
botonOpciones8.addEventListener("click", popupOptions);

function popupOptions(){
     // Create the div element
    var popup = document.createElement("div");
    popup.classList.add("popup");
    // Create the button element 
    var btn1 = document.createElement("button");
    btn1.innerText = "FAQs";
    btn1.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://uncagedergonomics.com/pages/faq", "_blank", "noopener");
    });
    var btn2 = document.createElement("button");
    btn2.innerText = "WorkEz Video";
    btn2.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://www.youtube.com/watch?v=GX67ufg4X50", "_blank", "noopener");
    });
    var btn3 = document.createElement("button");
    btn3.innerText = "CD4 Video";
    btn3.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://www.youtube.com/watch?v=o6g-NZQOtPk", "_blank", "noopener");
    });
    var btn4 = document.createElement("button");
    btn4.innerText = "ALL product's FAQs";
    btn4.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://uncagedergonomics.com/pages/faq", "_blank", "noopener");
    });
    var btn5 = document.createElement("button");
    btn5.innerText = "ALL product's Manuals";
    btn5.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://uncagedergonomics.com/pages/product-info", "_blank", "noopener");
    });
    // Append the button to the div
    popup.appendChild(btn1);
    popup.appendChild(btn2);
    popup.appendChild(btn3);
    popup.appendChild(btn4);
    popup.appendChild(btn5);

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

