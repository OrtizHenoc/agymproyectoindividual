Webcam.set({
    width: 200,
    heigth: 200,
    imgage_format:'jpeg',
    jpeg_quality:90
})
Webcam.attach("#camera")

function takess(){
    Webcam.snap(function(data_uri){
        document.getElementById("circle-container").innerHTML = 
        `<img src="${data_uri}">`;
    });
}