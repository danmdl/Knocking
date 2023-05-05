const extrasNav = document.querySelector(".extrasnav");
const panel = document.querySelector(".panel");
const cross = document.querySelector(".cross-image");
const afterHeaderContainer = document.querySelector(".afterHeaderContainer");
const mainContrainer = document.querySelector(".brands-card");


extrasNav.addEventListener("click", openPanel);
cross.addEventListener("click", closePanel);



//! ALL functions
function openPanel() {
    
    panel.classList.add("deploy");
    afterHeaderContainer.classList.add("blur");
    mainContrainer.classList.add("blur");
    
}

function closePanel() {
    
    panel.classList.remove("deploy");
    afterHeaderContainer.classList.remove("blur");
    mainContrainer.classList.remove("blur");
}











