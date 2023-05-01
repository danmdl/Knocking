const botonOpciones20 = document.getElementById("brand20");
botonOpciones20.addEventListener("click", popupOptions);

function popupOptions(){
     // div element
    var popup = document.createElement("div");
    popup.classList.add("popup");
    // button element 
    var btn1 = document.createElement("button");
    btn1.innerText = "Features & Specs (Select product & go to bottom)";
    btn1.addEventListener("click", function(){
        //action
        window.open("https://www.kalorik.com/collections/cobra-knives", "_blank", "noopener");
    });
    var btn2 = document.createElement("button");
    btn2.innerText = "User Manual";
    btn2.addEventListener("click", function(){
        //action
        window.open("https://manuals.plus/kalorik/r1-huvi-robot-vacuum-manual#axzz7tPovzZMj");
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

