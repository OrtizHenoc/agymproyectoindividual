const elementoPadre = document.getElementById("container-photo");
const elementoHijo  = elementoPadre.querySelector(".take-image")
if(elementoHijo){
    elementoPadre.classList.add("container");
}else{  
    console.log(elementoHijo)
    elementoPadre.classList.remove("container");
}

function takess(){
    var cameraDiv = document.getElementById("camera");

    Webcam.snap(function(data_uri){
        if(cameraDiv.style.display === "none"){
            alert("Desplega la camara para tomar la foto")
        }else{
            const element = document.getElementById("container-photo");
            element.classList.add("container")
            document.querySelector(".circle-container").innerHTML = 
            `<img src="${data_uri}" class="take-image">`;
        }
    });
}

function toggleCameraDisplay() {
    var cameraDiv = document.getElementById("camera");
    var computedStyle = window.getComputedStyle(cameraDiv);
    var displayValue = computedStyle.getPropertyValue("display");
    if (displayValue === "none") {
      cameraDiv.style.display = "block";
         Webcam.set({
            width: 200,
            heigth: 200,
            imgage_format:'jpeg',
            jpeg_quality:90
        })
        Webcam.attach("#camera")
    } else {
      cameraDiv.style.display = "none";
    }
  }