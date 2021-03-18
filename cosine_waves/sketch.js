var x = 6;
var speed = 1;

function setup() {
  createCanvas(400, 200);
  //noLoop();
}

function draw() {
  background(245);
  
  if(x > 60 || x < 6){
    speed = speed * -1;
  }
  let a = 0.0;
  let inc = TWO_PI / 50.0;
  for (let i = 0; i < width; i++) {
    //stroke(random(255), random(255), random(255));
    stroke('rgba(0,255,0, 0.20)');
    strokeWeight(2);
    line(i * 3, height/2, i * 2, height/2 + cos(a) * x);
    a = a + inc;
  }
  x = x + speed;
}
