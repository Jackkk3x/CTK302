let myState = 0;

function setup() {
  createCanvas(500, 500)

}

function draw() {
  switch (myState) {
    case 0:
      background('white');
      text("case 0", 250, 250);
      break;

    case 1:
      background('grey');
      text("case1", 250, 250);
      break;

    case 2:
      background('pink');
      text("case 2", 250, 250);
      break;

  }


}

function mouseReleased() {
  myState++;
  if ((mouseX > 10 && (mouseX < 60) && (mouseY > 10) && (mouseY < 35)) if (myState > 2) {
      myState = 0;
    }
  }
