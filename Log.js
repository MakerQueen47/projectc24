class Log {

    constructor(x,y,height, angle){
            // constructor function is invoked everytime we create an object from 'this' class! 
        var options= {

            restitution:0.8,
            friction:1.0,
            density:1.0

        }

        this.body = BODIES.rectangle(x,y,height,20,options);
        Matter.Body.setAngle(this.body, angle);
        WORLD.add(world, this.body);
        this.w = height;
        this.h = 20;

    }

    display(){

      
        var angle = this.body.angle;
        var pos = this.body.position;

       push();
       strokeWeight(4);
       stroke("green");
       rotate(angle);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();


    }



}