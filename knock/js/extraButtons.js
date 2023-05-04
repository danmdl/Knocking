const buttonNight = document.getElementById("night");

const about = document.querySelector(".about");
const mid = document.querySelector(".brands-card");
const extra = document.querySelector(".extras-container");
const knockingLogo = document.querySelector("knocking-Logo");

const colorsA = ["rgb(32, 123, 237)", "rgb(15, 53, 100)"];
let currentColorA = 0;

const colorsB = ["rgb(16, 79, 156)", "rgb(4, 20, 39)"];
let currentColorB = 0;

buttonNight.addEventListener("click", function() {
    currentColorA = (currentColorA + 1) % colorsA.length;
    about.style.background = colorsA[currentColorA];
    
});

// if a section is changed or deleted it needs to be deleted from here below too.
// otherwise it will break the code
buttonNight.addEventListener("click", function() {
    currentColorB = (currentColorB + 1) % colorsB.length;
    
    mid.style.background = colorsB[currentColorB];
    extra.style.background = colorsB[currentColorB];
});


knockingLogo.addEventListener("click", function() {
    window.open("https://starlights.knocking.com/", "_blank", "noopener");
});