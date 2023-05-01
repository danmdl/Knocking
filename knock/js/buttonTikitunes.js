const botonOpciones6 = document.getElementById("brand6");
botonOpciones6.addEventListener("click", popupOptions);

function popupOptions(){
     // Create the div element
    var popup = document.createElement("div");
    popup.classList.add("popup");
    // Create the button element 

    var btn0 = document.createElement("button");
    btn0.innerText = "Presentation";
    btn0.addEventListener("click", function(){
        //add here the action that you want
        window.open("", "_blank", "noopener", "_blank", "noopener");
    });
    var btn00 = document.createElement("button");
    btn00.innerText = "Manual";
    btn00.addEventListener("click", function(){
        //add here the action that you want
        window.open("./Recursos externos/manuals/TikiManual.pdf", "_blank", "noopener");
    });

    var btn1 = document.createElement("button");
    btn1.innerText = "FAQs";
    btn1.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://www.qvc.com/footers/el/pdf/E235881_FAQS_Update.pdf", "_blank", "noopener");
    });
    var btn2 = document.createElement("button");
    btn2.innerText = "How to Video";
    btn2.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://www.youtube.com/watch?v=vgjKqrWAoIM", "_blank", "noopener");
    });
    var btn3 = document.createElement("button");
    btn3.innerText = "(PRO) Manual";
    btn3.addEventListener("click", function(){
        //add here the action that you want
        window.open("./Recursos externos/manuals/TikiTunes-Pro-manual.pdf", "_blank", "noopener");
    });
    var btn4 = document.createElement("button");
    btn4.innerText = "(PRO) How to Video";
    btn4.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://www.youtube.com/watch?v=t-8UtiRa1aE", "_blank", "noopener");
    });

    var btn5 = document.createElement("button");
    btn5.innerText = "(PRO): What's included +  Specs";
    btn5.addEventListener("click", function(){
        //add here the action that you want
        window.open("./Recursos externos/Others/TikiProSpecs.png", "_blank", "noopener");
    });

    // Append the button to the div
    popup.appendChild(btn0);
    popup.appendChild(btn00);
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

