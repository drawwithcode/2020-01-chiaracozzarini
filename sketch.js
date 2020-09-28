var points = Array();

function setup() {
  createCanvas(windowWidth,windowHeight); // creates the canvas with dimensions of the browser dimensions
  // put setup code here
  background("MidnightBlue"); // canvas color
  angleMode(DEGREES);
}


function mousePressed() {
    var pointCoord = Array(mouseX, mouseY);
    points.push(pointCoord);
  }

function draw(){

  background("MidnightBlue");


  //TEXT
  push()
  textAlign(CENTER);
  stroke(lerpColor(color('snow'),color('MidnightBlue'),frameCount/350));
  textSize(30);
  fill(lerpColor(color('snow'),color('MidnightBlue'),frameCount/350));
  text("Cry: click to free your tears :'(", 0, 37, width);
  pop()

  push()

  strokeWeight(1.5);
  stroke(lerpColor(color('snow'),color('MidnightBlue'),frameCount/700));
  noFill();

  t = frameCount - 50;

  r = abs(sin(t*2));

  for (j=0; j<points.length; j++){

    //DROP
    circle(points[j][0], points[j][1], r*10);

    //WAVES
    for(i=0; i<100; i++){
      if(t>90*i){
      circle(points[j][0], points[j][1], (t-90*i))
      }
    }
  }
  pop()
}
