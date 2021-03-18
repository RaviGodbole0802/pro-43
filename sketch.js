var h,m,s;
var scAngle,mAngle,hAngle;





function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);
}

function draw() {
  background("black");
  fill("cyan")
  textSize(20)
  text(h%12+":"+m+":"+s,660,32)
  translate(380,200) 
  rotate(-90) 
  drawSprites();

 h=hour()
 m=minute()
 s=second()
 console.log(h+":"+m+":"+s)

 scAngle = map(s,0,60,0,360)
 mAngle = map(m,0,60,0,360)
hAngle = map(h%12,0,12,0,360)

 push()
 rotate(scAngle)
 stroke("green")
 strokeWeight(7)
 line(0,0,100,0)
 pop()

 push()
 rotate(mAngle)
 stroke("red")
 strokeWeight(7)
 line(0,0,70,0)
 pop()

 push()
 rotate(hAngle)
 stroke("blue")
 strokeWeight(7)
 line(0,0,50,0)
 pop()

 strokeWeight(10)
 noFill()
 stroke("green")
 arc(0,0,300,300,0,scAngle)


 stroke("red")
 arc(0,0,280,280,0,mAngle)

 

 stroke("blue")
 arc(0,0,260,260,0,hAngle)


}