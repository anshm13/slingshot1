class SlingShot{
    constructor(body1, body2) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.1
        }
        this.bodyB = bodyB
        this.Rope1 = Constraint.create(options);
        World.add(world, this.Rope1);
    }
    /*attach(body){
        this.Rope.bodyA = body;
    }*/
    fly(){
        this.Rope1.bodyB=null;
       // this.Rope.bodyA = null;
    }

    display() {
        var pointA = this.Rope1.bodyA.position;
        var pointB = this.Rope1.bodyB.position;

        strokeWeight(10);

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x;
        var Anchor2Y = pointB.y;

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }
}