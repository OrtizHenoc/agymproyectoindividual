document.addEventListener("DOMContentLoaded", function(){
    let btnOpen = document.querySelector(".buy-button");
    let totaContainer = document.querySelector(".total-container");
    let modal=document.querySelector(".container-modal");
    let box = document.querySelector(".pay-modal");
    let close = document.querySelector(".close");
    
    btnOpen.addEventListener("click", () =>{
        //totaContainer.style.display = "none";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        box.style.display = "block";
        box.style.position = "absolute";
    })
    close.addEventListener("click" ,() => {
        //totaContainer.style.display = "flex";
        box.style.display = "none";
        modal.style.display = "none";
    })
    
})




