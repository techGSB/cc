class Fly {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:1.2,
            length:250
        }
        this.pointB = pointB;
        this.Fly = Constraint.create(options);
         World.add(world,this.Fly);
    }
    attach(body){
        this.Fly.bodyA = body;
    }
    fly(){
        this.Fly.bodyA = null;
    }
    display(){
        if(this.Fly.bodyA){
            var pointA = this.Fly.bodyA.position;
            var pointB = this.pointB;
            push()
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop()
        }
    }
}