var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

      background(100);
      rect(x, 250, 50, 50);

      x += 5;

      if (x > width) {
        x = random(-500, -200);
      }
  }
