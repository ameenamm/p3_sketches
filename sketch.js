function setup() { 
var c = createCanvas(700,700); //width and height in pixels
background(255);
//rect(0,0,1000,1000)

stroke(0)
//no fill
for(var i = 0;i<100; i++)  {
 
	//ellipse(i*50,i*50,250,250)


}
fill(0)
//stroke(255)
noStroke(255)

rect(100,100,100,500)

//fill(255)
//ellipse(260,230,75,75)

}

function draw(){

	stroke(0)
	fill(0)
	rRadius = random(30)+30
	rect(mouseX,mouseY,rRadius,rRadius)

}

function mousePressed() {
	saveCanvas("sketch-01","jpg")
}



//var i = 0;
//while(i<10) {
	//add code here

	//ellipse(10*i,10*i,250,250)

	//i=i+i;


	noFill();

	for (i=0;i<500;i=i+10) {

		ellipse(200+i,200,350,350)

		ellipse(200+i,800,350,350)










//}