class Iron {
  constructor(x, y, width, height) {
   
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.image=loadImage("iron.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    fill("grey");
    imageMode(CENTER)
    image(this.image,pos.x,pos.y, this.width, this.height);
    
  }
};
