var f,
 f1 ;

function setup() {
  createCanvas(800,800);

  f = loadFont("cookie_2/Cookie.ttf");
    f1 = loadFont("cookie_2/Cookie.ttf");

   textAlign(CENTER);
}

function draw() {
  background(100);

fill('green');
  textFont(f);
  textSize(80);
  text("Everything happens for a reason", width / 2, height / 2 + 80);

}
