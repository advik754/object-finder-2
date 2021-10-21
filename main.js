value="";
status1="";
function preload(){
    
}


function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
  }

function draw(){
image(video,0,0,380,380);
}

function start(){
objectFinder=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="staust: detecting objects";
value=document.getElementById("object_name").value;
}

function modelloaded(){
console.log("robot dance intiated");
status1=true;
}
  