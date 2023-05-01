const botonOpciones17 = document.getElementById("brand17");
botonOpciones17.addEventListener("click", popupOptions);

function popupOptions(){
     // div element
    var popup = document.createElement("div");
    popup.classList.add("popup");
    // button element 
    var btn1 = document.createElement("button");
    btn1.innerText = "FAQs";
    btn1.addEventListener("click", function(){
        //action
        window.open("https://www.shesbirdie.com/pages/faqs", "_blank", "noopener");
    });
    var btn2 = document.createElement("button");
    btn2.innerText = "Change Battery Video";
    btn2.addEventListener("click", function(){
        //action
        window.open("https://www.youtube.com/watch?v=ULLCHDENqs8", "_blank", "noopener");
    });
    var btn3 = document.createElement("button");
    btn3.innerText = "TIP";
    btn3.addEventListener("click", function(){
        
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

