

function takess(){
    var cameraDiv = document.getElementById("camera");
    var cameraDisplayStyle = window.getComputedStyle(cameraDiv).display;
    if(cameraDisplayStyle === "none"){
        alert("Desplega la camara para tomar la foto")
    }else{
        Webcam.snap(function(data_uri){
                document.querySelector(".circle-container").innerHTML = 
                `<img src="${data_uri}" class="take-image">`;
            
        });
    }
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