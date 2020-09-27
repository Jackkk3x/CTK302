var song1;

function preload() {
  song1 = loadSound("assets/skip.mp3");
}


function setup() {
  createCanvas(800, 800);
  song1.loop()
}

function draw() {
  background(100);
}

function mouseReleased() {
  if (song1.isPlaying()) {
  
  } else {
    song1.loop();
  }
}
