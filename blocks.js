class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.color = color;
      World.add(world, this.body);
    }
    display(color){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(color);
      rect(pos.x, pos.y, this.width, this.height);
    }
};