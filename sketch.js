var car,wall,speed;


function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);

  wall = createSprite(1500, 200, 60,height/2);

  speed = random(40,55)
}

function draw() {
  background(255,255,255);  



  var deformation=0.5*wieght * speed*speed/22509

if(wallHit){
  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX=0;
   
    if(deformation>180){

          car.shapeColor=color(255,0,0)

    }
    if(deformation<180 && deformation>100){

        car.shapeColor = color(230,230,0)


    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }





  }
}
  wallHit();
  drawSprites();
  


}

function wallHit(){

  



}


