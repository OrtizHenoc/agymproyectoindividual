    
    document.addEventListener("DOMContentLoaded", function() {
        document.addEventListener("click",function (event){
            if(event.target.classList.contains("buy-button")){
                let btnOpen = document.querySelector(".buy-button");
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
            }
        })
    })





