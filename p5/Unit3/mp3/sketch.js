let cars = [];
let bg;
let maxCars = 5;
let frogPos;
let state = 0;
let timer = 0;
let musicnotesandflat;
let song1;
let hand;
let fonts = [];


function preload() {
  song1 = loadSound("assets/(124)chickito prod jackkk3x & tj dank.mp3");
  song1.loop();
  song1.pause();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  f1 = loadFont("assets/KGChasingCars.ttf");
  f2 = loadFont("assets/rock.ttf");
  f3 = loadFont("assets/spaceage.ttf");
  hand = loadImage("assets/hand.jpg");
  bg = loadImage("assets/musicnotes.jpg");
  musicnotesandflats = loadImage("assets/musicnotesandflat");

  fonts = [f1, f2, f3];

  frogPos = createVector(400 / 2, height / 100);
  textAlign(CENTER);
  imageMode(CENTER);
  hand = loadImage("assets/hand.jpg");






  // Spawn 20 objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());

  }
}

function draw() {
  switch (state) {
    case 0:
      background("orange");
      text("Welcome to my game!");
      textSize(20);
      loadFont("assets/spaceage.ttf");
      break;
    case 1:
      game();

      timer++;
      if (timer > 10 * 60) {
        state = 3;
      }
      break;

    case 2:
      background('red')
      text("YAY YOUUU WONNNN!")
      loadFont("assets/rock.ttf");
      textSize(20);
      break;
    case 3:
      background('purple');
      text('BOO YOU LOST')
      loadFont("assets/KGChasingCars.ttf");
      textSize(20);

      break;
  }
}

function game() {
  //background(100);
  bg = loadImage("assets/musicnotes.jpg");
  // display and move 20 objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);

    }
  }
  if (cars.length == 0) {
    state = 2;
  }
  //draw frog
  //fill('green');
  //ellipse(frogPos.x, frogPos.y, 50, 50);
  image(hand, frogPos.x, frogPos.y);
  checkForKeys();
}

function resetTheGame() {
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());

  }
  timer = 0;
}

function checkForKeys() {

  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;

  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;

  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;

  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;
    case 2: //they WONNNN
      state = 0;
      resetTheGame();
      break;

    case 3: //  LOST
      resetTheGame();
      state = 0
      break;
  }
}

// Car class
class Car {

  // constructor and attributes

  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-8, 8), random(-8, 8));
    this.size = random(40, 240);
    this.c = color(random(150, 200), random(50), random(50));

    let b = floor(random(3)); //random number between 0 2.999



    this.image = musicnotesandflat[b];
  }

  // methods


  display() {
    //rect(this.pos.x, this.pos.y, 50, 25);
    //  fill(this.c);

    image(musicnotesandflats, this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;

    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
