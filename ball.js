class Ball{
    constructor(x,y,r){
        var options={
           restitution:2, 
           friction:1,
           density:3
        }
        
  this.x=x;
  this.y=y;
  this.r=r;
  this.body=Bodies.circle(this.x,this.y,this.r/2,options)
  this.image=loadImage("stone.png");
  World.add(world, this.body);
    }

    display(){
    var paperpos=this.body.position;
    push()
    translate(paperpos.x,paperpos.y);
    rotate(this.body.angle)
    fill("grey");
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop()
    }
}
