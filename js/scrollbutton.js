window.onscroll = function (){
    if(document.documentElement.scrollTop < 100){
        var button = document.querySelector('.up-button-container')
        button.style.width = "0px";
    }else{
        var button = document.querySelector('.up-button-container')
        button.style.width = "50px";
    }
}

document.querySelector('.up-button-container').addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})