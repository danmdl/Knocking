const botonFaqs3 = document.getElementById("faqs3");
botonFaqs3.addEventListener("click", popupFaqs3);

function popupFaqs3(){
     // div element
    var popup = document.createElement("div");
    popup.classList.add("popup");

    // button element 
    var btn1 = document.createElement("button");
    btn1.innerText = "Xpress Knee";
    btn1.addEventListener("click", function(){
        //action
        window.open("./Recursos externos/presentation/ReAthleteXpress.pdf", "_blank", "noopener");
    });
    var btn2 = document.createElement("button");
    btn2.innerText = "Rachel Glauber";
    btn2.addEventListener("click", function(){
        //action
        window.open("./Recursos externos/presentation/RachelGlauber.pdf", "_blank", "noopener");
    });
    var btn4 = document.createElement("button");
    btn4.innerText = "PowerPro Go";
    btn4.addEventListener("click", function(){
      //action
      window.open("./Recursos externos/presentation/PowerProGo.pdf", "_blank", "noopener");
        
    });
    var btn5 = document.createElement("button");
    btn5.innerText = "Briogeo";
    btn5.addEventListener("click", function(){
      //action
      window.open("./Recursos externos/presentation/Briogeo.pdf", "_blank", "noopener");
        
    });
    var btn6 = document.createElement("button");
    btn6.innerText = "Jiggy puzzle";
    btn6.addEventListener("click", function(){
      //action
      window.open("./Recursos externos/presentation/JiggyPuzzles.pdf", "_blank", "noopener");
        
    });
    var btn7 = document.createElement("button");
    btn7.innerText = "Magic Mesh";
    btn7.addEventListener("click", function(){
      //action
      window.open("./Recursos externos/presentation/Magic Mesh.pdf", "_blank", "noopener");
        
    });
    var btn8 = document.createElement("button");
    btn8.innerText = "Oboi";
    btn8.addEventListener("click", function(){
      //action
      window.open("./Recursos externos/presentation/Oboi.pdf", "_blank", "noopener");
        
    });
    var btn9 = document.createElement("button");
    btn9.innerText = "None";
    btn9.addEventListener("click", function(){
      //action
      window.open("", "_blank", "noopener");
        
    });
    var btn10 = document.createElement("button");
    btn10.innerText = "None";
    btn10.addEventListener("click", function(){
      //action
      window.open("", "_blank", "noopener");
        
    });
    
    // Append button to div
    popup.appendChild(btn1);
    popup.appendChild(btn2);
    popup.appendChild(btn4);
    popup.appendChild(btn5);
    popup.appendChild(btn6);
    popup.appendChild(btn7);
    popup.appendChild(btn8);
    popup.appendChild(btn9);
    popup.appendChild(btn10);
 

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

