let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/(102)chopped and screwed v2 akira prod jackkk3x & tjdank.mp3");
  song2 = loadSound("assets/(140)film prod jackkk3x & nadddot v2.mp3");
  song3 = loadSound("assets/(160)haunting the hill prod jackkk3x & chris galaxy.mp3");

  // song1.loop();
  // song1.pause();
  // song2.loop();
  // song2.pause();
  // song3.loop();
  // song3.pause();
}

function setup() {
  createCanvas(400, 400);


}

function draw() {

  background(100);
  switch (state) {

    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
      text("this is a beat i made with a friend that is internet money.", 100, 100);
      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
      text("this is probably one of the prettiest beats i ever made ", 100, 100);
      break;

    case 4:
      song3.play();
      state = 5;
      break;

    case 5:
      text("this is a beat i made today ", 100, 100);
      break;


  }
}

function mouseReleased() {
  state++;
  song1.pause();
  song2.pause();
  song3.pause();
  if (state > 5) state = 0;

}

function touchStarted() {
  getAudioContext().resume();
}
