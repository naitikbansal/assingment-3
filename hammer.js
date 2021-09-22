class Hammer {
    constructor(x, y, width, height) {
        var options={
            
             restitution:0.5, 
             friction:2,
             density:3
          }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("hammer.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX
      pos.y=mouseY
      var angle = this.body.angle;
      fill("black");
      imageMode(CENTER)
      image(this.image,pos.x, pos.y, this.width, this.height);
      
    }
  };
  