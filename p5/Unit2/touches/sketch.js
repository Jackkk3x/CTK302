let numberOfTouches;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch (numberOfTouches) {
    case 0:
      text(" aye you ! touch the screen", 5, 22);
      break;

    case 1:
      text("Yeah you ", 5, 22);
      // put a picture here
      break;

    case 2:
      text("Get more friends come on", 5, 22);
      // put a picture here
      break;

    case 3:
      text("Ayeee , lets go", 5, 22);
      // put a picture here
      break;


  }

}
