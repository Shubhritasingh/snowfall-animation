var bgImg,snowflake,snowflakeImg;
function preload() {
  bgImg=loadImage("snow2.jpg");
  snowflakeImg=loadImage("snow4.webp");
}
function setup() {
  createCanvas(1200,800);
  for(var i=40;i<600;i++){
  snowflake=createSprite(400, 200, 50, 50);
  snowflake.addImage(snowflakeImg);
  snowflake.velocityY=3;
snowflake.scale=0.2;}
}

function draw() {
  background(bgImg);  
  drawSprites();
}