var num1,num2;
var i;
var balloon144,balloon169;
var balloon144Image,balloon169Image;
function preload(){
  balloon144Image = loadImage("Layer144.png");
  balloon169Image = loadImage("Layer169.png");
}
function setup() {
  createCanvas(500,600);
  //num1 = Math.round(random(1,10));
  //num2 = Math.round(random(1,10));
  num1 = [12,13,17,19,22,25,27,29,30,14];

  i = Math.round(random(0,9));
  num2 = num1[i]*num1[i];
  balloon144 = createSprite(40,20);
  balloon144.addImage("balloon144",balloon144Image);
  balloon144.scale = 0.1;
  balloon144.velocityY = +2;
  balloon169 = createSprite(10,40);
  balloon169.addImage("balloon169",balloon169Image);
  balloon169.scale = 0.1;
  balloon169.velocityY = +2;
}

function draw() {
  background(0); 
  fill('white');
  text(num1[i] + " x "+num1[i] + "  =  ?",250,500) ;
  console.log(num2);
 
  drawSprites();
}

function spawn1(){
  if(frameCount%60===0){
    var count1 = createSprite(0,250,10,10);
    count1.x = random(10,450);
    count1.velocityY = 2;
  }
}