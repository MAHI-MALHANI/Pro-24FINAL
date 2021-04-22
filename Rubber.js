class Rubber{
    constructor(x, y, radius){
        var options ={
            restitution:0.5,
            friction:1,
            density:2
        };
        this.x=x;
        this.y=y;
        this.radius=radius;

        this. body=Bodies.circle(this.x,this.y,(this.radius-20)/2,options);
        
        World.add(world, this.body);

    }

    display(){
        var pos= this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black");
        fill("darkBlue");
        ellipse(0,0, this.radius);
        pop();
    }
    };
