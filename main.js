yuvra="";


function preload()
{
  
}

function setup()
 {
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
   
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("object_status").innerHTML="Status : Detecting Objects";
  document.getElementById("object_name_input").value;
}

function modelLoaded()
{
  console.log("model Loaded");
  yuvraj = true;
}



function draw() 
{
  image(video,100,180,200,200)
}



