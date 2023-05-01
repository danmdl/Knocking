const botonOpciones18 = document.getElementById("brand18");
botonOpciones18.addEventListener("click", popupOptions);

function popupOptions(){
     // div element
    var popup = document.createElement("div");
    popup.classList.add("popup");
    // button element 
    var btn1 = document.createElement("button");
    btn1.innerText = "FAQs";
    btn1.addEventListener("click", function(){
        //action
        window.open("https://airwhirltips.com/faqs", "_blank", "noopener");
    });
    var btn2 = document.createElement("button");
    btn2.innerText = "User Manual";
    btn2.addEventListener("click", function(){
        //action
        window.open("https://img1.wsimg.com/blobby/go/b3d56bdf-d407-460c-b14f-fcacdaea54d5/downloads/Air%20Whirl%20ENG%20Instructions-IM1.pdf?ver=1630517384003", "_blank", "noopener");
    });
    var btn3 = document.createElement("button");
    btn3.innerText = "Warning Label";
    btn3.addEventListener("click", function(){
      //action
      window.open("https://img1.wsimg.com/blobby/go/b3d56bdf-d407-460c-b14f-fcacdaea54d5/downloads/Air%20Whirl%20warning%20label.pdf?ver=1630517384003", "_blank", "noopener", "_blank", "noopener");     
    });
    var btn4 = document.createElement("button");
    btn4.innerText = "Free Recipes PDF";
    btn4.addEventListener("click", function(){
      //action
      window.open("https://airwhirlrecipe.com/f/Air_Whirl_Crisper_Recipe_Book.pdf?_ga=2.125755210.1770056993.1676486028-985498455.1664899373", "_blank", "noopener");     
    });
    var btn5 = document.createElement("button");
    btn5.innerText = "Demo Video";
    btn5.addEventListener("click", function(){
        //action
      window.open("https://vimeo.com/740113574", "_blank", "noopener");
    });
    var btn6 = document.createElement("button");
    btn6.innerText = "PTFE";
    btn6.addEventListener("click", function(){
        //action
      window.open("https://misen.com/blogs/news/what-is-ptfe", "_blank", "noopener");
    });

    
    
    // Append button to div
    popup.appendChild(btn1);
    popup.appendChild(btn2);
    popup.appendChild(btn3);
    popup.appendChild(btn4);
    popup.appendChild(btn5);
    popup.appendChild(btn6);
 

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

