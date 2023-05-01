const botonOpciones4 = document.getElementById("brand4");
botonOpciones4.addEventListener("click", popupOptions);

function popupOptions(){
     // Create the div element
    var popup = document.createElement("div");
    popup.classList.add("popup");
    // Create the button element 
    var btn1 = document.createElement("button");
    btn1.innerText = "FAQs";
    btn1.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://tileteam.zendesk.com/hc/en-us/articles/360007855513-Tile-KeySmart", "_blank", "noopener");
    });
    var btn2 = document.createElement("button");
    btn2.innerText = "Setup connection -video";
    btn2.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://www.youtube.com/watch?v=PqbnyeW3pCI", "_blank", "noopener");
    });
    var btn3 = document.createElement("button");
    btn3.innerText = "Empty";
    btn3.addEventListener("click", function(){
        //add here the action that you want
        alert("No more info at the moment")
    });
    
    // Append the button to the div
    popup.appendChild(btn1);
    popup.appendChild(btn2);
    popup.appendChild(btn3);
    

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

