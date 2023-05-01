const botonbrand24 = document.getElementById("brand24");
botonbrand24.addEventListener("click", popupOptions);

function popupOptions(){
  // div element
 var popup = document.createElement("div");
 popup.classList.add("popup");
 // button element 
 var btn1 = document.createElement("button");
 btn1.innerText = "Brands Website";
 btn1.addEventListener("click", function(){
     //action
     window.open("https://beautystat.com/", "_blank", "noopener");
 });
 var btn2 = document.createElement("button");
 btn2.innerText = "CBS Link";
 btn2.addEventListener("click", function(){
     //action
     window.open("https://cbsdeals.com/collections/beautystat-cosmetics?_pos=1&_psq=beautysta&_ss=e&_v=1.0", "_blank", "noopener");
 });
 var btn3 = document.createElement("button");
 btn3.innerText = "General FAQs";
 btn3.addEventListener("click", function(){
   //action
   window.open("https://support.beautystat.com/en-us/categories/6396a00dd14e5957c0fb6efc/faqs", "_blank", "noopener", "_blank", "noopener");     
 });
 var btn4 = document.createElement("button");
 btn4.innerText = "Youtube Channel";
 btn4.addEventListener("click", function(){
   //action
   window.open("https://www.youtube.com/@Beautystat/videos", "_blank", "noopener");     
 });
 var btn5 = document.createElement("button");
 btn5.innerText = "All products + FAQs";
 btn5.addEventListener("click", function(){
     //action
   window.open("https://support.beautystat.com/en-us/categories/6396a007d14e5957c0fb6ed2/products", "_blank", "noopener");
 });


 // Append button to div
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