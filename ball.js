class Ball{
    constructor(x,y) {
        var options = {
           // restitution:0.1,
           // isStatic:false,
            friction:0.05,
            density:1

        }

        this.r = 40;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world, this.body);
      }
    display(){
        var pos =this.body.position;
        var angle =this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);

        pop();
    }
}