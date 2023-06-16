let btnOpen = document.querySelector(".buy-button");
let totaContainer = document.querySelector(".total-container");
let modal=document.querySelector(".container-modal");
let box = document.querySelector(".pay-modal");
let body = document.querySelector("body");
let close = document.querySelector(".close");

btnOpen.addEventListener("click", () =>{
    btnOpen.style.display = "none";
    totaContainer.style.display = "none";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    box.style.display = "block";
    box.style.position = "absolute";
})
close.addEventListener("click" ,() => {
    btnOpen.style.display = "inline";
    totaContainer.style.display = "flex";
    box.style.display = "none";
    modal.style.display = "none";
})




