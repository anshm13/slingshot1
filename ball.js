class Ball {
    constructor(x,y,radius) {
      var options = {
          restitution: 0,
          isStatic: false
          
      };
      this.body = Bodies.circle(x,y,radius,options);
     // this.body = Bodies.circle(100,100,20,options);
     this.radius = radius;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white");
      //this.body.display();
      circle(pos.x, pos.y, this.radius*2);
    }
}