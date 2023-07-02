var video =  document.getElementById("video01")

function playpause(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
function stop(){
    video.pause();
    video.currentTime = 0;
}
function skip(value){
    video.currentTime += value;
}