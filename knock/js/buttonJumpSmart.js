const botonOpciones9 = document.getElementById("brand9");
botonOpciones9.addEventListener("click", popupOptions);

function popupOptions(){
     // Create the div element
    var popup = document.createElement("div");
    popup.classList.add("popup");
    // Create the button element 
    var btn1 = document.createElement("button");
    btn1.innerText = "FAQs";
    btn1.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://www.qvc.com/footers/el/pdf/E233902_Jumpsmart_FAQ.pdf", "_blank", "noopener");
    });
    var btn2 = document.createElement("button");
    btn2.innerText = "Tutorial 1 -video";
    btn2.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://www.youtube.com/watch?v=7ObzbsDEJag", "_blank", "noopener");
    });
    var btn3 = document.createElement("button");
    btn3.innerText = "Tutorial 2 -video";
    btn3.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://www.youtube.com/watch?v=e-rSPyBqMMY", "_blank", "noopener");
    });
    var btn4 = document.createElement("button");
    btn4.innerText = "Manual";
    btn4.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://files.bbystatic.com/2cObPGt8Aba6LDGDIKfoLQ%3D%3D/99f80d32-dcfb-4481-9df2-165e4e339a70.pdf", "_blank", "noopener");
    });
    // Append the button to the div
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

