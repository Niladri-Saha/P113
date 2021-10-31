function preload(){
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.size(300,300);
   
}
function draw(){
   image(video,0,0,640,480);
   shape(shape);
}
function take_snapshot(){
   save('Niladri.png');
}
function Shape_Frame(){
    shape=document.getElementById("shape_name").value;
}