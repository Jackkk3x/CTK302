function setup() {
 // Sets the screen to be 720 pixels wide and 400 pixels high
 createCanvas(720, 400, );

}

setInterval(thunder, 3500);

function thunder() {
 stroke(255, 255, 180, 150);
 strokeWeight(random(6, 10));
 noFill();
 frameRate(12);
 beginShape();
 vertex(random(0, width), 0);
 vertex(random(0, width), height / 10);
 vertex(random(0, width), height / 8);
 vertex(random(0, width), height / 6);
 vertex(random(0, width), height / 4);
 vertex(width / 2 + 100, height / 2);
 endShape();
}
   //non-pressed stat

function draw(){

 if(mouseIsPressed){
 background('purple');
   fill(10)

} else {


 background('rgb(17, 128, 174)');}
 noStroke();
 fill(100)
ellipse(148,122,10,10);


 fill('gray');
ellipse(294,14,90,90);


 fill('yellow');

 triangle(652,34,288,360,386,362);

 fill('green');
 textSize(40);
 text("Everything happens for a reason", width / 1, height / 80);



 text(mouseX +  ','+ mouseY, 600,30);

// fill(255);
//  ellipse(252, 144, 72, 72);
 fill('rgb(224, 123, 57)');
 ellipse(326,12,150,150)

 fill(100);
 triangle(655, 29, 351, 360, 900, 400);

 fill(110)
 triangle(655,29,716,124,720,53);


 fill(110);
 triangle(241, 145, 345, 360, 576,376);

 fill(80);
 triangle(241,148,20,350,349,362);

  //eyes
   fill(0);
   strokeWeight(1);
//nose
   fill(255);
   ellipse(203,202, 15, 8);

   noStroke();
   fill(255);
   ellipse(178, 120, 58, 58);

   fill(255);
   ellipse(276, 118, 58, 58);

   fill(0);
   ellipse(178, 116, 45, 45);

   fill(0);
   ellipse(279, 120, 45, 45);

   fill(255);
   ellipse(279, 116, 13, 13);

   fill(255);
   ellipse(173, 116, 13, 13);

   fill(255);
   ellipse(280, 117, 5, 5);

   fill(255);
   ellipse(552, 357, 5, 5);

 //mouth
 fill('red')
 ellipse(164,375, 150,100);
//teeth
 fill('white')
 triangle(132,344,137,328,126,333);

 fill('white')
 triangle(181,386,179,400,192,401);



 //clouds

 fill(255);
   ellipse(74,50,70,50);

 fill(250);
 ellipse(99,35,70,50);

 fill(240);
 ellipse(136,54,70,50);

 fill(230);
 ellipse(150,26,70,50);

   fill(230);
 ellipse(179,47,70,50);





 fill('rgb(237, 184, 121)');

fill('white');


}
