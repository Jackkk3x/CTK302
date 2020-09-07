var f, f1 ;



function setup() {
  createCanvas(800,800);

  f = loadFont("cookie_2/Cookie.ttf");
    f1 = loadFont("cookie_2/Cookie.ttf");

   textAlign(CENTER)
}

function draw() {
  background(100);

  textFont(f);
  textSize(80);
  text("Everything", width / 2, height / 2)

  textFont(f1);
  textSize(160);
  text("Happens for a reason", width / 2, height / 2)

}
