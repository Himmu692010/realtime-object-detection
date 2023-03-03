video="";
status="";
function preload(){
     video=createVideo('video.mp4');
     video.hide();
}

function setup(){
     canvas=createCanvas(600,380);
     canvas.center();
}

function draw(){
     image(video,0,0,595,375);
}

function start(){
     objectDetector=ml5.objectDetector('cocossd',modelLoaded);
     document.getElementById("status").innerHTML="Status: Detecting objects";
}

function modelLoaded(){
     console.log("model is loaded!");
     status=true;
     video.loop();
     video.volume(0);
     video.speed(1);


     
}