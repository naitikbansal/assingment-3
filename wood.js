class Wood {
    constructor(x, y, width, height) {
        var options={
            
             restitution:1, 
             friction:3,
             density:3
          }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("wood.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      fill("brown");
      imageMode(CENTER)
      image(this.image,pos.x,pos.y, this.width, this.height);
      
    }
  };
  