let myState = 0;
let numberOfTouches;
var x = 0;
var song1;


function preload() {
  song1 = loadSound("assets/HD010(140).mp3");
}



function setup() {
  createCanvas(500, 500)
  song1.loop()

  textAlign(CENTER);
  textSize(32);

}

function draw() {
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touch the screen', 5, 10);

  switch (myState) {
    case 0:
      background('orange');
      text("Not everything is as it seems", 250, 250);
      break;

    case 1:
      background('green');
      text("Sometimes you have to look inbetween", 250, 250);
      break;

    case 2:
      background('blue');
      text("To understand what you can't see", 250, 250);
      break;

  }




function mouseReleased() {
    if (song1.isPlaying()) {
      song1.paused();
    } else {
      song1.loop();
    }
  myState++;
  if ((mouseX > 10) && (mouseX < 60) && (mouseY > 10) && (mouseY < 35))
    if (myState > 2) {
      myState = 0;
    }

    }
}
