let myState = 0;
let song1;
var x = 0;

function preload(){
  song1 = loadSound('assets/)
}

function setup() {
  createCanvas(500, 500)

}

function draw() {
  switch (myState) {
    case 0:
      background('orange');
      text("case 0", 250, 250);
      break;

    case 1:
      background('green');
      text("case1", 250, 250);
      break;

    case 2:
      background('yellow');
      text("", 250, 250);
      break;

  }


}

function mouseReleased() {
  myState++;
  if ((mouseX > 10 )&& (mouseX < 60) && (mouseY > 10) && (mouseY < 35))
  if (myState > 2) {
      myState = 0;
    }
   {
      if (song1.isPlaying()) {
        song1.paused();
      } else {
        song1.loop();
      }
  }
}
