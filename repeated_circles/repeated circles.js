function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  
  //var x = width/2;
  for(var x = 0; x <= width; x = x + (width/10)){
    for(var y = 0; y <= height; y = y + (height/10)){
      noStroke();
      fill(random(255), random(255), random(255));
      circle(x, y, 50);
    }
  }
  
}