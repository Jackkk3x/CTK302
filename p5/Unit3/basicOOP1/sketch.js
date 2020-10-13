let myCar1;
let myCar2;


function setup() {
  createCanvas(500, 500);
  myCar1= new Car();
  myCar2 = new Car();
}

function draw() {
  background('grey')
  myCar1.display();
  myCar2.display();

  myCar1.move();
  myCar2.move();

}

class Car {
  constructor(){
    //attributes
this.pos = createVector(random(width), random(height));
this.vel = createVector(random(-5,5), random(-5,5));
}

    //methods
    display(){
    rect(this.pos.x,100,50,25);
  }
move(){
  this.pos.add(this.vel);
  if(this.pos.x>width)this.pos.x = 0;
  if (this.pos.x < 0) this.pos.x = width
  if(this.pos.y>height)this.pos.y = 0;
  if(this.pos.y<0) this.pos.y =height;

}

}
