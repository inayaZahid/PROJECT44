var hr,mn,sc,scAngle;
var bg; 
var backgroundImg;
var soil,soilImg;

function preload(){
  getResponse();
  soilImg=loadImage("gardenSoil.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
 angleMode(DEGREES)
 seed=createButton('Add Seed');
 seed.position(50,200);
 watering=createButton('Watering Can');
 watering.position(50,240);
soil=createSprite(50,displayHeight/2,displayWidth,displayHeight/2);
soil.addImage(soilImg);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
 
  fill("black")
textSize(22)

text("12",displayWidth-185,100)
text("6",displayWidth-185,318)
text("3",displayWidth-69,210)
text("9",displayWidth-300,210)
text("Made by-",50,50)
text("Inaya Zahid",50,80);
translate(displayWidth-175,200);

rotate(-90)
hr=hour();
mn=minute();
sc=second();

scAngle = map(sc,0,60,0,360)
mnAngle = map(mn,0,60,0,360)
hrAngle = map(hr % 12,0,12,0,360)

push();
rotate(scAngle);
stroke("red");
strokeWeight(6);
line(0,0,50,0);
pop()

push();
rotate(mnAngle);
stroke("orange");
strokeWeight(7);
line(0,0,37,0);
pop();

push();
rotate(hrAngle);
stroke("yellow");
strokeWeight(7);
line(0,0,25,0);
pop()

stroke("magenta");
point(0,0)

strokeWeight(10);
noFill();

stroke(255,0,0);
arc(0,0,300,300,0,scAngle);

stroke("orange");
arc(0,0,280,280,0,mnAngle);

stroke("yellow");
arc(0,0,260,260,0,hrAngle);



  drawSprites();
}
async function getResponse(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseType =await  response.json();
  console.log(responseType);
  var dt= responseType.datetime;
console.log(dt)
var hr= dt.slice(11,13);
console.log(hr);
if(hr>=6 && hr<=19){
bg="bg.png";
}
else{
    
    bg="bg2.jpg";
}
backgroundImg=loadImage(bg)

}